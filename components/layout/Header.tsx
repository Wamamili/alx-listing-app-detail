// components/layout/Header.tsx
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold text-sky-600">ALX Listings</a>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a className="hover:text-sky-600" href="#">Rooms</a>
          <a className="hover:text-sky-600" href="#">Mansion</a>
          <a className="hover:text-sky-600" href="#">Countryside</a>
          <a className="hover:text-sky-600" href="#">Apartments</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <input
              type="search"
              placeholder="Search properties..."
              aria-label="Search properties"
              className="border rounded-full px-3 py-1 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
          <button className="text-sm">Sign in</button>
          <button className="hidden sm:inline-block bg-sky-600 text-white px-3 py-1 rounded-md text-sm">Sign up</button>

          {/* mobile menu icon */}
          <button className="sm:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
