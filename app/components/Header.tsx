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

  // Add/remove body class when mobile drawer opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("active-drawer");
    } else {
      document.body.classList.remove("active-drawer");
    }
    
    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove("active-drawer");
    };
  }, [isMenuOpen]);

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
    }, 200);
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
              width={200}
              height={30}
              quality={75}
              className="w-[200px] sm:w-[200px] md:w-[300px] h-auto"
              priority 
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
           Speak  To Us
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

          <div className="apply_button pt-6 mt-4 ss">
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

          {/* Social Icons with hover effects */}
          <div className="social-icons flex flex-wrap gap-4 mt-6 pb-2 md:pb-0 ">
            {/* Facebook Icon */}
            <Link href="#" title="Facebook" aria-label="Facebook"
              className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 4H16.5C17.0523 4 17.5 3.55228 17.5 3V2C17.5 1.44772 17.0523 1 16.5 1H14C10.9624 1 8.5 3.46243 8.5 6.5V9H7C6.44772 9 6 9.44772 6 10V12C6 12.5523 6.44772 13 7 13H8.5V21C8.5 21.5523 8.94772 22 9.5 22H12.5C13.0523 22 13.5 21.5523 13.5 21V13H15.5C16.0523 13 16.5 12.5523 16.5 12V10C16.5 9.44772 16.0523 9 15.5 9H13.5V6.5C13.5 5.67157 14.1716 5 15 5H14.5Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
              </svg>
            </Link>

            {/* Twitter/X Icon */}
            <Link href="#" title="Twitter" aria-label="Twitter" className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="none">
                <path d="M18.244 2H21.5l-7.45 8.52L23 22h-6.828l-5.35-6.993L4.95 22H1.693l7.97-9.11L1 2h6.996l4.837 6.365L18.244 2zM17.05 20h1.904L7.032 4H5.03l12.02 16z" stroke="white" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
              </svg>
            </Link>

            {/* LinkedIn Icon */}
            <Link href="#" title="LinkedIn" aria-label="LinkedIn"
              className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7827 7.8916C17.3523 7.8916 18.8576 8.51512 19.9674 9.62499C21.0773 10.7349 21.7008 12.2402 21.7008 13.8098V20.7143H17.7554V13.8098C17.7554 13.2866 17.5475 12.7848 17.1776 12.4148C16.8076 12.0449 16.3059 11.837 15.7827 11.837C15.2595 11.837 14.7577 12.0449 14.3877 12.4148C14.0178 12.7848 13.8099 13.2866 13.8099 13.8098V20.7143H9.8645V13.8098C9.8645 12.2402 10.488 10.7349 11.5979 9.62499C12.7078 8.51512 14.2131 7.8916 15.7827 7.8916Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
                <path d="M5.91859 8.87793H1.97314V20.7143H5.91859V8.87793Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
                <path d="M3.94585 5.91807C5.03535 5.91807 5.91856 5.03486 5.91856 3.94536C5.91856 2.85587 5.03535 1.97266 3.94585 1.97266C2.85635 1.97266 1.97314 2.85587 1.97314 3.94536C1.97314 5.03486 2.85635 5.91807 3.94585 5.91807Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
              </svg>
            </Link>

            {/* Instagram Icon */}
            <Link href="#" title="Instagram" aria-label="Instagram" className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7696 1.97266H6.9053C4.18134 1.97266 1.97314 4.18086 1.97314 6.90481V16.7691C1.97314 19.4931 4.18134 21.7013 6.9053 21.7013H16.7696C19.4936 21.7013 21.7018 19.4931 21.7018 16.7691V6.90481C21.7018 4.18086 19.4936 1.97266 16.7696 1.97266Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
                <path d="M15.7835 11.2158C15.9052 12.0367 15.765 12.8752 15.3827 13.6119C15.0005 14.3486 14.3956 14.946 13.6543 15.3192C12.9129 15.6923 12.0728 15.8222 11.2534 15.6903C10.4339 15.5585 9.67694 15.1716 9.09006 14.5847C8.50318 13.9979 8.1163 13.2409 7.98445 12.4214C7.85259 11.602 7.98247 10.7619 8.35562 10.0205C8.72876 9.27915 9.32617 8.67433 10.0629 8.29207C10.7996 7.90981 11.6381 7.76958 12.459 7.89132C13.2965 8.0155 14.0718 8.40573 14.6704 9.00437C15.2691 9.60301 15.6593 10.3783 15.7835 11.2158Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
                <path d="M17.2627 6.41162H17.2721" stroke="white" strokeOpacity="0.6" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
              </svg>
            </Link>

            {/* Email Icon */}
            <Link href="mailto:sim@ticktockloans.com.au" title="Email" aria-label="Email" target='_blank'
              className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.7289 3.94629H3.94601C2.85642 3.94629 1.97314 4.82957 1.97314 5.91915V17.7563C1.97314 18.8459 2.85642 19.7292 3.94601 19.7292H19.7289C20.8185 19.7292 21.7018 18.8459 21.7018 17.7563V5.91915C21.7018 4.82957 20.8185 3.94629 19.7289 3.94629Z" stroke="white" strokeOpacity="0.6" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
                <path d="M21.7018 6.90576L12.8535 12.5284C12.5489 12.7192 12.1968 12.8204 11.8374 12.8204C11.4781 12.8204 11.126 12.7192 10.8214 12.5284L1.97314 6.90576" stroke="white" strokeOpacity="0.6" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-all duration-300"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}