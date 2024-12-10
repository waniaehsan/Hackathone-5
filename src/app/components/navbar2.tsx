"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[91px] px-4 md:px-12 flex items-center shadow-md bg-white">
      <nav className="w-full flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-[#252B42] font-bold text-[24px] leading-[32px]">
          Bandage
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            {["Home", "About", "Services", "Contact"].map((item, idx) => (
              <li key={idx}>
                <Link href={`/${item.toLowerCase()}`}>
                  <a className="font-semibold text-sm text-[#737373] hover:text-[#252B42] transition">
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Section for Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Login Link */}
          <Link href="/login">
            <a className="font-semibold text-sm text-[#23A6F0] hover:underline">
              Login
            </a>
          </Link>

          {/* Become a Member Button */}
          <Link href="/learn-more">
            <a className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px] hover:bg-[#1d8ad6] transition">
              Become a Member
              <svg
                className="w-[12px] h-[10px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 10"
                fill="none"
                stroke="#FFFFFF"
              >
                <path d="M2 5h8M5 2l3 3-3 3" />
              </svg>
            </a>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-[#252B42]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-[91px] left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Services", "Contact", "Login"].map((item, idx) => (
              <li key={idx}>
                <Link href={`/${item.toLowerCase()}`}>
                  <a
                    className={`font-semibold text-sm ${
                      item === "Login" ? "text-[#23A6F0]" : "text-[#737373]"
                    } hover:text-[#252B42] transition`}
                  >
                    {item}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/learn-more">
                <a className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px] hover:bg-[#1d8ad6] transition">
                  Become a Member
                  <svg
                    className="w-[12px] h-[10px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 10"
                    fill="none"
                    stroke="#FFFFFF"
                  >
                    <path d="M2 5h8M5 2l3 3-3 3" />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
