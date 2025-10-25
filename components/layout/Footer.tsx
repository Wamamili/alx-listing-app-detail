// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
        <div className="mb-2 font-semibold text-gray-800">ALX Listings</div>
        <p>© {new Date().getFullYear()} ALX Listings. Built with Next.js + Tailwind.</p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="text-sm hover:underline">About</a>
          <a href="#" className="text-sm hover:underline">Privacy</a>
          <a href="#" className="text-sm hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
