// components/Hero.jsx
import { useNavigate } from "react-router-dom";

export default function Hero() {
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
}

