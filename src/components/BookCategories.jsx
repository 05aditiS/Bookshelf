// components/BookCategories.jsx
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Fiction", icon: "📖" },
  { name: "Mystery", icon: "🕵️" },
  { name: "Romance", icon: "❤️" },
  { name: "Non-fiction", icon: "📚" },
  { name: "Academic", icon: "🎓" },
  { name: "Fantasy", icon: "🐉" },
];

export default function BookCategories() {
  const navigate = useNavigate();

  const handleClick = (categoryName) => {
    navigate(`/books/${categoryName}`);
  };

  return (
    <section className="py-16 bg-[#fdf6e3] relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#3b2f2f] mb-12 text-center">
          Browse Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleClick(category.name)}
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
}
