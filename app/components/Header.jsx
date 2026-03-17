"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/HomeLoans", label: "Home Loans" },
  { href: "/Business-Loans", label: "Business Loans" },
  { href: "/about", label: "About" },
  { href: "/TipsandGuides", label: "Tips and Guides" },
  { href: "/Contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // ✅ Current page URL

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Active class helper
  const getLinkClass = (href) => {
    const isActive = pathname === href;
    return `transition-colors duration-300 hover:text-[#B5FF5F] hover:underline ${
      isActive 
        ? 'text-[#B5FF5F] underline font-semibold' 
        : 'text-white'
    }`;
  };

  return (
    <header className={`p-4 md:p-4 bg-[#1d361e] shadow-sm transition-all duration-300 ${
      isScrolled ? 'fixed top-0 left-0 w-full z-50' : 'relative'
    }`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <Link href="/" title="logo" aria-label="Home">
            <Image src="/logo.svg" alt="Logo" width={250} height={30} priority style={{ width: 'auto', height: 'auto' }} />
          </Link>
        </div>

        {/* ✅ Desktop Nav — active class */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              title={link.label} aria-label={link.label}
              className={getLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block apply_button">
          <Link href="/Contact"
            className="bg-[#B5FF5F] text-[#154617] py-[10px] px-[20px] hover:bg-white flex items-center justify-center rounded-3xl font-bold text-[16px] transition-colors duration-300"
            title="Apply Now" aria-label="Apply Now">
            Apply Now
          </Link>
        </div>

        {!isMenuOpen && (
          <button 
            aria-label="Open navigation menu"
            className="md:hidden text-white focus:outline-none z-50 min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)} />
      )}

   {/* ✅ Mobile Drawer — FIXED spacing */}
    <div className={`fixed top-0 right-0 h-full w-full bg-[#002802] shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
      isMenuOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <button 
        aria-label="Close navigation menu"
        className="absolute top-5 right-5 text-white focus:outline-none min-w-[48px] min-h-[48px] flex items-center justify-center"
        onClick={() => setIsMenuOpen(false)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* ✅ Padding ONLY on this div - no nested padding */}
      <div className="flex flex-col px-5 pt-20 pb-5 space-y-3">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}
            title={link.label} aria-label={link.label}
            className={`${getLinkClass(link.href)} py-2.5 text-base min-h-[48px] flex items-center px-3 rounded-lg`}
            onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </Link>
        ))}

        {/* ✅ Better button spacing */}
        <div className="apply_button pt-6 mt-4">
          <Link href="/Contact"
            className="inline-block bg-[#B5FF5F] text-[#154617] px-4 py-2.5 rounded-full hover:bg-white font-bold w-full text-center text-base transition-colors duration-300"
            title="Apply Now" aria-label="Apply Now" onClick={() => setIsMenuOpen(false)}>
            Apply Now
          </Link>
        </div>
      </div>
    </div>
    </header>
  );
}