"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
type SubMenuItem = {
  href: string;
  label: string;
};

type NavLink = {
  href: string;
  label: string;
  submenu?: SubMenuItem[];
};
const navLinks: NavLink[] = [
  {
    href: "/HomeLoans",
    label: "Home Loans",
    submenu: [
      { href: "/HomeLoans/buying-a-home", label: "Buying a Home" },
      { href: "/HomeLoans/becoming-a-first-home-buyer", label: "Becoming a first home buyer" },
      { href: "/HomeLoans/buying-off-the-plan", label: "Buying Off the plan" },
      { href: "/HomeLoans/refinancing-your-home-loan", label: "Refinancing your home loan" },
      { href: "/HomeLoans/investing-in-property", label: "Investing in property" },
      { href: "/HomeLoans/different-type-loan", label: "Different type loan" },
      { href: "/HomeLoans/typical-loan-features", label: "Typical Loan Features" },
    ],
  },
  {
    href: "/Business-Loans",
    label: "Business Loans",
    submenu: [
      { href: "/Business-Loans/finance-for-my-business", label: "Finance for My Business" },
      { href: "/Business-Loans/asset-&-equipment-finance", label: "Asset & Equipment Finance" },
      { href: "/Business-Loans/invoice-finance-or-accounts-receivable", label: "Invoice Finance or Accounts Receivable" },
      { href: "/Business-Loans/working-capital-finance", label: "Working Capital Finance" },
      { href: "/Business-Loans/term-loan", label: "Term Loan" },
      { href: "/Business-Loans/self-managed-super-fund-loan", label: "Self-Managed Super Fund Loan" },
      { href: "/Business-Loans/unsecured-business-loans", label: "Unsecured Business Loans" },
    ],
  },
  { href: "/about", label: "About" },
  {
    href: "/TipsandGuides",
    label: "Tips and Guides", 
    submenu: [
      { href: "/TipsandGuides/why-use-a-broker", label: "Why Use a Broker?" },
      { href: "/TipsandGuides/first-home-buyer-guide", label: "First Home Buyer Guide" },
      { href: "/TipsandGuides/looking-for-refinance-your-home", label: "Looking for Refinance Your Home" },
      { href: "/TipsandGuides/investing-in-property-guide", label: "Investing in Property Guide" },
      { href: "/TipsandGuides/business-finance-guide", label: "Business Finance Guide" },
      { href: "/TipsandGuides/explaining-the-loan-process", label: "Explaining the Loan Process" },
      { href: "/TipsandGuides/checklist-of-loan-document", label: "Checklist of loan document" },
      
    ],
  },
  { href: "/Contact", label: "Contact" },
];
type ChevronIconProps = {
  isOpen: boolean;
};
// Chevron icon
function ChevronIcon({ isOpen }: ChevronIconProps) {
  return (
    <svg
      className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMobileMenu(null);
  }, [pathname]);

  const getLinkClass = (href: string) => {
  const isActive = pathname === href || pathname.startsWith(href + "/");
  return `transition-colors duration-300 hover:text-[#B5FF5F] hover:underline ${
    isActive ? "text-[#B5FF5F] underline font-semibold" : "text-white"
  }`;
};

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200) 
  };

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredMenu(label);
  };

  return (
    <header
      className={`p-4 md:p-4 bg-[#1d361e] shadow-sm transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 w-full z-50" : "relative"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <Link href="/" title="logo" aria-label="Home">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={250}
              height={30}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) =>
            link.submenu ? (
              // Link WITH hover submenu
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Trigger button - NOW CLICKABLE */}
                <Link
                  href={link.href}
                  className={`flex items-center cursor-pointer transition-colors duration-300 hover:text-[#B5FF5F] hover:underline ${
                    pathname.startsWith(link.href)
                      ? "text-[#B5FF5F] underline font-semibold"
                      : "text-white"
                  }`}
                >
                  {link.label}
                  <ChevronIcon isOpen={hoveredMenu === link.label} />
                </Link>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-[#002802] rounded-xl shadow-xl border border-[#B5FF5F]/20 z-50 transition-all duration-200 origin-top ${
                    hoveredMenu === link.label
                      ? "opacity-100 scale-y-100 pointer-events-auto visible"
                      : "opacity-0 scale-y-95 pointer-events-none invisible"
                  }`}
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Arrow pointer */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#002802] rotate-45 border-l border-t border-[#B5FF5F]/20" />

                  <ul className="py-2">
                    {link.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={`block px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-[#B5FF5F]/10 hover:text-[#B5FF5F] ${
                            pathname === sub.href
                              ? "text-[#B5FF5F] font-semibold bg-[#B5FF5F]/10"
                              : "text-white/90"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // Plain link
              <Link
                key={link.href}
                href={link.href}
                title={link.label}
                aria-label={link.label}
                className={getLinkClass(link.href)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Apply Now */}
        <div className="hidden md:block apply_button">
          <Link
            href="/Contact"
            className="bg-[#B5FF5F] text-[#154617] py-[10px] px-[20px] hover:bg-white flex items-center justify-center rounded-3xl font-bold text-[16px] transition-colors duration-300"
            title="Apply Now"
            aria-label="Apply Now"
          >
            Apply Now
          </Link>
        </div>

        {/* Hamburger */}
        {!isMenuOpen && (
          <button
            aria-label="Open navigation menu"
            className="md:hidden text-white focus:outline-none z-50 min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed top-0 left-0 right-0 w-full bg-[#002802] shadow-lg z-50 transform h-full transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close button */}
        <button
          aria-label="Close navigation menu"
          className="absolute top-5 right-5 text-white focus:outline-none min-w-[48px] min-h-[48px] flex items-center justify-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col px-5 pt-20 pb-5 space-y-1 h-full overflow-y-auto">
          {navLinks.map((link) =>
            link.submenu ? (
              // Mobile accordion (click-based)
              <div key={link.href}>
                <button
                  onClick={() => setOpenMobileMenu((prev) => (prev === link.label ? null : link.label))}
                  aria-expanded={openMobileMenu === link.label}
                  className={`w-full flex items-center justify-between py-2.5 text-base min-h-[48px] px-3 rounded-lg transition-colors duration-200 hover:bg-[#B5FF5F]/10 hover:text-[#B5FF5F] ${
                    pathname.startsWith(link.href) ? "text-[#B5FF5F] font-semibold" : "text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronIcon isOpen={openMobileMenu === link.label} />
                </button>

                {/* Accordion items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openMobileMenu === link.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="ml-3 border-l border-[#B5FF5F]/30 pl-3 py-1 space-y-0.5">
                    {link.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={`block py-2 px-3 text-sm rounded-lg transition-colors duration-200 hover:bg-[#B5FF5F]/10 hover:text-[#B5FF5F] ${
                            pathname === sub.href ? "text-[#B5FF5F] font-semibold" : "text-white/80"
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenMobileMenu(null);
                          }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // Plain mobile link
              <Link
                key={link.href}
                href={link.href}
                title={link.label}
                aria-label={link.label}
                className={`${getLinkClass(link.href)} py-2.5 text-base min-h-[48px] flex items-center px-3 rounded-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          <div className="apply_button pt-6 mt-4">
            <Link
              href="/Contact"
              className="inline-block bg-[#B5FF5F] text-[#154617] px-4 py-2.5 rounded-full hover:bg-white font-bold w-full text-center text-base transition-colors duration-300"
              title="Apply Now"
              aria-label="Apply Now"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}