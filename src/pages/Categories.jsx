// src/pages/Categories.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockBooks } from '../mockData';

const handleCategoryClick = (category) => {
  navigate(`/books/${encodeURIComponent(category)}`);
};
const callouts = [
  {
    name: 'Fiction',
    imageSrc: 'https://covers.openlibrary.org/b/id/8281996-L.jpg',
    imageAlt: 'Fiction books',
    description: 'Explore captivating fictional worlds and stories.',
  },
  {
    name: 'Mystery',
    imageSrc: 'https://covers.openlibrary.org/b/id/11153202-L.jpg',
    imageAlt: 'Mystery novels',
    description: 'Unravel thrilling mysteries and suspense.',
  },
  {
    name: 'Romance',
    imageSrc: 'https://covers.openlibrary.org/b/id/8091016-L.jpg',
    imageAlt: 'Romantic novels',
    description: 'Feel the love in timeless romance tales.',
  },
  {
    name: 'Non-fiction',
    imageSrc: 'https://covers.openlibrary.org/b/id/9259418-L.jpg',
    imageAlt: 'Non-fiction books',
    description: 'Discover facts, history, and knowledge.',
  },
  {
    name: 'Fantasy',
    imageSrc: 'https://covers.openlibrary.org/b/id/7984916-L.jpg',
    imageAlt: 'Fantasy books',
    description: 'Dive into magical realms and epic quests.',
  },
  {
    name: 'Academic',
    imageSrc: 'https://covers.openlibrary.org/b/id/8225265-L.jpg',
    imageAlt: 'Academic books',
    description: 'Expand your knowledge with academic texts.',
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Categories() {
  const query = useQuery();
  const navigate = useNavigate();
  const initialCategory = query.get('cat') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = mockBooks.filter(
        (book) =>
          book.genre.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
      );
      setBooks(filtered);
    } else {
      setBooks([]);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/categories?cat=${encodeURIComponent(category)}`);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#3b2f2f]">
        Explore Categories
      </h1>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {callouts.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
            className={`rounded-lg p-4 border shadow hover:shadow-lg transition cursor-pointer ${
              selectedCategory === cat.name
                ? 'border-[#a47551] bg-[#fffaf1]'
                : 'border-gray-200 bg-white'
            }`}
          >
            <img
              src={cat.imageSrc}
              alt={cat.imageAlt}
              className="rounded-lg mb-4 h-40 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-[#3b2f2f] mb-2">{cat.name}</h3>
            <p className="text-[#5e4636] text-sm">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Book List */}
      <h2 className="text-2xl font-semibold text-[#3b2f2f] mb-6">
        {selectedCategory
          ? `Books in "${selectedCategory}"`
          : 'Choose a category to explore books'}
      </h2>

      {selectedCategory && books.length === 0 && (
        <p className="text-gray-600">No books found in this category.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="rounded-lg border p-4 bg-white shadow hover:shadow-md transition"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="h-48 w-full object-cover mb-3 rounded"
            />
            <h3 className="font-bold text-lg text-[#3b2f2f] mb-1">{book.title}</h3>
            <p className="text-sm text-[#5e4636]">by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
