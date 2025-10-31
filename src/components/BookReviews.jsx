import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    id: 1,
    title: 'A Masterpiece in Minimalism',
    href: '#',
    review: 'This book strips away the unnecessary to deliver a deeply moving narrative that resonates long after the final page.',
    date: 'May 5, 2025',
    datetime: '2025-05-05',
    category: { title: 'Fiction', href: '#' },
    reviewer: {
      name: 'Aditi Sharma',
      role: 'Book Enthusiast',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'A Riveting Page-Turner',
    href: '#',
    review: 'I stayed up all night reading this - the plot twists were completely unexpected yet perfectly executed.',
    date: 'Apr 18, 2025',
    datetime: '2025-04-18',
    category: { title: 'Mystery', href: '#' },
    reviewer: {
      name: 'Raj Patel',
      role: 'Mystery Lover',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Profound and Poetic',
    href: '#',
    review: 'The lyrical prose transported me to another world. Each sentence felt carefully crafted and meaningful.',
    date: 'Mar 22, 2025',
    datetime: '2025-03-22',
    category: { title: 'Literary Fiction', href: '#' },
    reviewer: {
      name: 'Priya Desai',
      role: 'Literature Professor',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'A Timeless Classic',
    href: '#',
    review: 'This book deserves a place on every bookshelf. Its insights into human nature are as relevant today as ever.',
    date: 'Feb 14, 2025',
    datetime: '2025-02-14',
    category: { title: 'Classic', href: '#' },
    reviewer: {
      name: 'Vikram Singh',
      role: 'Historian',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Unforgettable Characters',
    href: '#',
    review: 'The character development was exceptional - I felt like I knew these people personally by the end.',
    date: 'Jan 30, 2025',
    datetime: '2025-01-30',
    category: { title: 'Drama', href: '#' },
    reviewer: {
      name: 'Meera Kapoor',
      role: 'Book Club Organizer',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0e16019?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function BookReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => setActiveIndex(index);
  const goToPrev = () => setActiveIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  const goToNext = () => setActiveIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <div className="py-16 bg-gradient-to-b from-[#fdf6e3] to-[#f9e9c8] relative overflow-hidden">
      <div className="absolute top-10 left-0 w-24 h-24 rounded-full bg-[#e8d4a8] opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-[#d8b985] opacity-30"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#3b2f2f]">
            What Readers Are Saying
          </h2>
          <p className="mt-2 text-md text-[#5e4636] max-w-2xl mx-auto">
            Discover why our books are captivating readers around the world
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative h-[360px] overflow-hidden rounded-xl shadow-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
        >
          {/* Arrows */}
          <button
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white/80 text-[#5e4636] p-2 rounded-full shadow hover:bg-white transition"
            onClick={goToPrev}
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white/80 text-[#5e4636] p-2 rounded-full shadow hover:bg-white transition"
            onClick={goToNext}
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slides */}
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === activeIndex
                  ? 'translate-x-0 opacity-100 z-10'
                  : index < activeIndex
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
              }`}
            >
              <div className="bg-white h-full flex flex-col md:flex-row overflow-hidden rounded-xl">
                {/* Left */}
                <div className="md:w-1/3 bg-gradient-to-br from-[#a47551] to-[#8b5a2b] p-6 flex flex-col justify-center items-center text-white">
                  <img
                    src={review.reviewer.imageUrl}
                    alt={review.reviewer.name}
                    className="w-24 h-24 rounded-full border-4 border-white/50 shadow mb-4"
                  />
                  <h3 className="text-lg font-bold">{review.reviewer.name}</h3>
                  <p className="text-sm text-[#f9e9c8]">{review.reviewer.role}</p>
                  <time dateTime={review.datetime} className="text-xs mt-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="..." clipRule="evenodd" /></svg>
                    {review.date}
                  </time>
                  <a
                    href={review.category.href}
                    className="mt-4 px-3 py-1 bg-[#fdf6e3] text-[#8b5a2b] rounded-full text-xs font-semibold hover:bg-[#f9e9c8]"
                  >
                    {review.category.title}
                  </a>
                </div>

                {/* Right */}
                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#3b2f2f] mb-2">
                    <a href={review.href} className="hover:text-[#a47551] transition">
                      {review.title}
                    </a>
                  </h3>
                  <p className="text-sm text-[#5e4636] italic">"{review.review}"</p>
                  <a
                    href={review.href}
                    className="mt-4 inline-flex items-center text-[#8b5a2b] text-sm font-semibold group hover:text-[#a47551]"
                  >
                    Read full review
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'bg-[#8b5a2b] w-8' : 'bg-[#d8b985] w-2.5'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
