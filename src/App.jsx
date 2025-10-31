import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookCategories from './components/BookCategories';
import ProductGrid from './components/ProductGrid';
import BookDetails from './pages/BookDetails';
import BookReviews from './components/BookReviews';
import Rentals from './pages/Rentals';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router> {/* Only one router now */}
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route path="/" element={
          <>
            <Hero />
            <BookCategories />
            <ProductGrid />
            <BookReviews />
          </>
        } />
        
        {/* Category browsing */}
        <Route path="/categories" element={<BookCategories />} />
        
        {/* Books in a specific category */}
        <Route path="/categories/:categoryId" element={<ProductGrid />} />
        
        {/* Individual book details */}
        <Route path="/book/:id" element={<BookDetails />} />
        
        {/* Other routes */}
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/books" element={<ProductGrid />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

