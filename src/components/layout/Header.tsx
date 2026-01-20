"use client"; 

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/app/data/navLinks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
       
        <div className="text-xl font-bold text-black">SSA Hunter Valley</div>

        
        <nav className="hidden gap-8 md:flex">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-sm text-black transition-colors hover:text-primary"
            >
              {name}
            </Link>
          ))}
        </nav>

        
        <button className="rounded-full border border-[#b5dc41] px-8 py-2 text-black transition-colors hover:bg-black hover:text-white hidden md:block">
          Register Now
        </button>

  
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-black border-gray-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block text-sm text-black transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
          <button className="w-full rounded-full border border-[rgba(122,146,49,0.7)] px-4 py-2 text-black transition-colors hover:bg-black hover:text-white">
            Register Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
