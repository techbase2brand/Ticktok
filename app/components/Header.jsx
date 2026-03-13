"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 
    <header className={`p-4 md:p-4 bg-[#1d361e] shadow-sm transition-all duration-300 ${
      isScrolled ? 'fixed top-0 left-0 w-full z-50' : 'relative'
    }`}> 
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <a href="/" title="logo">
            <Image
              className=" "
              src="/logo.svg"
              alt="Logo"
              width={250}
              height={30}
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex gap-6">
          <Link href="/HomeLoans" className="text-white hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
            Home Loans
          </Link>
          <Link href="/Business-Loans" className="text-white hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
            Business Loans
          </Link>
          <Link href="/about" className="text-white hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
            About
          </Link>
          <Link href="/TipsandGuides" className="text-white hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
            Tips and Guides
          </Link>
        </nav>

        {/* Apply Now Button - Visible on desktop, hidden on mobile */}
        <div className="hidden md:block apply_button">
          <a 
            href="/apply" 
            className="bg-[#B5FF5F] text-[#154617] py-[10px] px-[20px] hover:bg-white flex items-center justify-center rounded-3xl font-bold text-[16px] transition-colors duration-300"
            title="Apply Now"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) - Only visible when menu is closed */}
        {!isMenuOpen && (
          <button 
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Overlay - visible when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Off-canvas Menu - slides from right */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-[#1d361e] shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close Button inside menu */}
        <button 
          className="absolute top-5 right-5 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col p-6 pt-20 space-y-4">
          <Link 
            href="/how-it-works" 
            className="text-white hover:text-[#B5FF5F] hover:underline py-2 text-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="/calculator" 
            className="text-white hover:text-[#B5FF5F] hover:underline py-2 text-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Calculator
          </Link>
          <Link 
            href="/about" 
            className="text-white hover:text-[#B5FF5F] hover:underline py-2 text-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          
          {/* Mobile Apply Now Button */}
          <div className="apply_button pt-4">
            <a 
              href="/apply" 
              className="inline-block bg-[#B5FF5F] text-[#154617] px-4 py-2 rounded-3xl hover:bg-white font-bold w-full text-center text-base transition-colors duration-300"
              title="Apply Now"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}