import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Browse Books', path: '/books' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="bg-[#0a0a0a] border-b border-[#a47551] shadow-md">
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-[#fdf6e3] tracking-wide"
            >
              BookShelf
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? 'text-[#c8a27c]' : 'text-[#fdf6e3]'
                  } hover:text-[#c8a27c]`
                }
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                {name}
              </NavLink>
            ))}

            {/* Profile Icon */}
            <NavLink to="/profile" className="relative">
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-[#a47551] hover:border-[#c8a27c] transition duration-200"
              />
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
