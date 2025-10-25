// components/Hero.tsx
import React from "react";
import { HERO_IMAGE } from "@/constants";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-64 sm:h-80 md:h-96 w-full flex items-center"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Find your favorite place here!</h1>
        <p className="mt-2 text-sm sm:text-base">The best prices for over 2 million properties worldwide.</p>
        <div className="mt-4">
          <a href="#listings" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md">Browse listings</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
