import { useState } from 'react';
import { BookOpenIcon, BookmarkIcon, ArrowRightOnRectangleIcon, PencilIcon } from '@heroicons/react/20/solid';

const Profile = () => {
  const [user] = useState({
    name: 'Aditi Sharma',
    email: 'aditi@example.com',
    bio: 'Frontend developer and book enthusiast.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  });

  const [books] = useState([
    { status: 'read', review: 'Great book!' },
    { status: 'reading', review: '' },
    { status: 'planned', review: '' },
    { status: 'read', review: 'Insightful and helpful.' },
    { status: 'read', review: '' },
    { status: 'rented-out', review: '' },
    { status: 'rented-in', review: '' },
  ]);

  const stats = {
    read: books.filter(b => b.status === 'read').length,
    reading: books.filter(b => b.status === 'reading').length,
    planned: books.filter(b => b.status === 'planned').length,
    reviews: books.filter(b => b.review.trim()).length,
    rentedOut: books.filter(b => b.status === 'rented-out').length,
    rentedIn: books.filter(b => b.status === 'rented-in').length,
  };

  return (
    <div className="bg-[#fdf6e3] min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border border-[#a47551]">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-24 h-24 rounded-full border border-[#a47551]"
          />
          <div>
            <h1 className="text-2xl font-bold text-[#3b2f2f]">{user.name}</h1>
            <p className="text-[#5e4636] text-sm">{user.email}</p>
            <p className="text-[#5e4636] mt-2">{user.bio}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center mb-8">
          <div className="bg-[#fdf1db] rounded-lg p-4 border border-[#a47551]">
            <BookmarkIcon className="w-6 h-6 mx-auto text-[#a47551]" />
            <p className="text-lg font-semibold text-[#3b2f2f]">{stats.read}</p>
            <p className="text-sm text-[#5e4636]">Books Read</p>
          </div>
          <div className="bg-[#fdf1db] rounded-lg p-4 border border-[#a47551]">
            <BookOpenIcon className="w-6 h-6 mx-auto text-[#a47551]" />
            <p className="text-lg font-semibold text-[#3b2f2f]">{stats.reading}</p>
            <p className="text-sm text-[#5e4636]">Currently Reading</p>
          </div>
          <div className="bg-[#fdf1db] rounded-lg p-4 border border-[#a47551]">
            <ArrowRightOnRectangleIcon className="w-6 h-6 mx-auto text-[#a47551]" />
            <p className="text-lg font-semibold text-[#3b2f2f]">{stats.planned}</p>
            <p className="text-sm text-[#5e4636]">Planned to Read</p>
          </div>
          <div className="bg-[#fdf1db] rounded-lg p-4 border border-[#a47551]">
            <PencilIcon className="w-6 h-6 mx-auto text-[#a47551]" />
            <p className="text-lg font-semibold text-[#3b2f2f]">{stats.reviews}</p>
            <p className="text-sm text-[#5e4636]">Reviews Written</p>
          </div>
          <div className="bg-[#fdf1db] rounded-lg p-4 border border-[#a47551]">
            <ArrowRightOnRectangleIcon className="w-6 h-6 mx-auto text-[#a47551]" />
            <p className="text-lg font-semibold text-[#3b2f2f]">{stats.rentedOut}</p>
            <p className="text-sm text-[#5e4636]">Rented Out</p>
          </div>
          <div className="bg-[#fdf1db] rounded-lg p-4 border border-[#a47551]">
            <ArrowRightOnRectangleIcon className="w-6 h-6 mx-auto rotate-180 text-[#a47551]" />
            <p className="text-lg font-semibold text-[#3b2f2f]">{stats.rentedIn}</p>
            <p className="text-sm text-[#5e4636]">Rented In</p>
          </div>
        </div>

        {/* Optional Edit Button */}
        <div className="text-right">
          <button className="bg-[#5e4636] hover:bg-[#3b2f2f] text-white px-4 py-2 rounded-md text-sm font-medium">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
