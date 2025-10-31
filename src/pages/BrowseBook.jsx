import { useParams } from 'react-router-dom';
import { mockBooks } from '../mockData';

export default function CategoryBooks() {
  const { categoryName } = useParams();
  const filteredBooks = mockBooks.filter(
    (book) =>
      book.genre.toLowerCase().trim() === categoryName.toLowerCase().trim()
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8 capitalize text-[#3b2f2f]">
        {categoryName} Books
      </h1>

      {filteredBooks.length === 0 ? (
        <p className="text-gray-600">No books found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
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
              <p className="text-xs text-gray-500 mt-2">{book.description}</p>
              <p className="text-sm mt-1 font-semibold text-[#a47551]">₹{book.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
