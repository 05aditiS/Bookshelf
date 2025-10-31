import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductGrid = () => {
  const navigate = useNavigate();

  // Sample 4 books with different images
  const books = [
    {
      id: '1',
      title: 'The Timeless Tale',
      author: 'Jane Doe',
      coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136', // Book flatlay
    },
    {
      id: '2',
      title: 'Mystic Mountains',
      author: 'John Smith',
      coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', // Classic cover
    },
    {
      id: '3',
      title: 'Ocean of Dreams',
      author: 'Sarah Lee',
      coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f', // Minimalist cover
    },
    {
      id: '4',
      title: 'Whispers of Time',
      author: 'Elena Grace',
      coverImage: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93', // Artistic cover
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
          onClick={() => navigate(`/book/${book.id}`)}
        >
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
