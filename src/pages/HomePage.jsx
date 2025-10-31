import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockBooks } from '../mockData';
import navbar from "../../src/components/Navbar"

export function HomePage() {
  const books = mockBooks;

  
  

  /* ------------------- Hero ------------------- */
  const Hero = () => {
    const navigate = useNavigate();
    return (
      <section className="relative bg-gradient-to-b from-[#fdf6e3] via-[#f5e2c4] to-[#f2d6aa] py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-white/40 p-10 rounded-xl shadow-lg border border-[#f2d6aa]/40">
            <h1 className="text-5xl md:text-6xl font-bold text-[#3b2f2f] tracking-tight mb-6">
              Discover Your Next Favourite Book
            </h1>
            <p className="text-lg md:text-xl text-[#5e4636] mb-10 max-w-2xl mx-auto leading-relaxed">
              Dive into curated reviews, explore timeless classics or modern gems, and build your personalised bookshelf.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate("/categories")}
                className="px-8 py-3 bg-gradient-to-r from-[#8b5a2b] to-[#a47551] text-white rounded-full font-semibold shadow-lg hover:from-[#a47551] hover:to-[#8b5a2b] transition-all duration-300"
              >
                Browse Books
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3 bg-white text-[#8b5a2b] border-2 border-[#a47551] rounded-full font-semibold hover:bg-[#a47551] hover:text-white transition-all duration-300"
              >
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  /* ------------------- Product Grid ------------------- */
  const ProductGrid = () => {
    const navigate = useNavigate();
    const sampleBooks = [
      {
        id: '1',
        title: 'The Timeless Tale',
        author: 'Jane Doe',
        coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      },
      {
        id: '2',
        title: 'Mystic Mountains',
        author: 'John Smith',
        coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      },
      {
        id: '3',
        title: 'Ocean of Dreams',
        author: 'Sarah Lee',
        coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
      },
      {
        id: '4',
        title: 'Whispers of Time',
        author: 'Elena Grace',
        coverImage: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93',
      },
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => navigate(`/book/${book.id}`)}
          >
            <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  /* ------------------- Book Categories ------------------- */
  const BookCategories = () => {
    const navigate = useNavigate();
    const categories = [
      { name: "Fiction", icon: "📖" },
      { name: "Mystery", icon: "🕵️" },
      { name: "Romance", icon: "❤️" },
      { name: "Non-fiction", icon: "📚" },
      { name: "Academic", icon: "🎓" },
      { name: "Fantasy", icon: "🐉" },
    ];

    return (
      <section className="py-16 bg-[#fdf6e3] relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3b2f2f] mb-12 text-center">Browse Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => navigate(`/books/${category.name}`)}
                className="bg-white p-4 rounded-lg border border-[#a47551] text-center hover:bg-[#a47551] hover:text-white transition cursor-pointer"
              >
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <h3 className="font-medium text-[#3b2f2f] hover:text-white">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  /* ------------------- Book Reviews ------------------- */
  const BookReviews = () => {
    const reviews = [
      { id: 1, title: 'A Masterpiece in Minimalism', review: 'Deeply moving narrative.', reviewer: 'Aditi Sharma' },
      { id: 2, title: 'A Riveting Page-Turner', review: 'Plot twists were unexpected.', reviewer: 'Raj Patel' },
    ];
    return (
      <section className="py-16 bg-gradient-to-b from-[#fdf6e3] to-[#f9e9c8]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#3b2f2f] mb-8">What Readers Are Saying</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{rev.title}</h3>
                <p className="italic mb-4">"{rev.review}"</p>
                <span className="text-sm text-gray-500">- {rev.reviewer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  /* ------------------- Footer ------------------- */
  const Footer = () => (
    <footer className="bg-[#8b5a2b] text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Book Haven. All rights reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-[#fdf6e3] flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12 space-y-12">
        <Hero />
        <ProductGrid />
        <BookCategories />
        <BookReviews />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
