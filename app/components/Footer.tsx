"use client";
import { memo, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";

const poppins = Inter({ subsets: ["latin"], weight: "400" });
type FooterProps = {
    copyRight: string;
};

// Floating Footer Social Component (Internal)
const FloatingFooterSocial = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      label: 'Book a meeting',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zm0 19H5V9h14v14zm-5-10h-4v4h4v-4z" 
            fill="currentColor" />
        </svg>
      ),
      href: 'https://calendly.com/your-link', // 👈 UPDATE THIS
      external: true, // Open in new tab
    },
    {
      label: 'Request a call',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" 
            fill="currentColor" />
        </svg>
      ),
      href: '/Contact', // 👈 UPDATE THIS
    },
    {
      label: '+0433 249 678',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
            fill="currentColor" />
        </svg>
      ),
      href: 'tel:+0433249678', // 👈 UPDATE THIS
    },
  ];

  const handleActionClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 footer-floating-button">
      {/* Action Menu Items */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ease-out transform origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        }`}
      >
        {actions.map((action, index) => (
          <button
            key={action.label}
            onClick={() => handleActionClick(action.href, action.external)}
            className={`group cursor-pointer relative flex items-center gap-3 px-6 py-4 rounded-full bg-[#013003] border-2 border-[#B5FF5F] text-[#B5FF5F] font-medium shadow-lg hover:shadow-xl hover:bg-[#B5FF5F] hover:text-[#013003] transition-all duration-200 hover:scale-105 whitespace-nowrap text-sm md:text-base transform ${
              isOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-4 opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? `${index * 60}ms` : '0ms',
            }}
          >
            <span className="group-hover:text-[#013003] transition-colors duration-200">
              {action.icon}
            </span>
            {action.label}
          </button>
        ))}
      </div>

      {/* Main Speak to Us Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#B5FF5F] text-[#013003] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 w-max cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Open contact menu">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-[#B5FF5F] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />

        {/* Icon and text */}
        <span className="relative flex items-center gap-2">
          <span className="text-sm md:text-base">Speak to us</span>
        </span>

        {/* Chevron indicator */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ml-1 ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
          <path d="M7 10l5 5 5-5z" fill="currentColor" />
        </svg>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full border-2 border-[#013003] animate-pulse opacity-40" />
        )}
      </button>
    </div>
  );
});

FloatingFooterSocial.displayName = 'FloatingFooterSocial';

// Main Footer Component
const Footer = ({ copyRight }: FooterProps) => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (accordion: string) => {
        setOpenAccordion(openAccordion === accordion ? null : accordion);
    };

    return (
        <footer className='bg-gradient-to-r from-[#013003] to-[#013811] pt-[40px] px-4 md:px-6 lg:px-8 relative'>
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between  md:gap-8">
                <div className='logo-content w-full md:w-auto mb-5'>
                    <div className="logo">
                        <Link href="/" title="logo" className="inline-block" aria-label="Logo">
                            <Image
                             
                                src="/logo.svg"
                                alt="Logo"
                                width={220}
                                height={20}
                                quality={75}
                                priority
                               className="w-[200px] sm:w-[200px] md:w-[300px] h-auto"
                            />
                        </Link>
                        <p className='text-white max-w-[400px] pt-[15px] text-[14px] md:text-[14px]'>
                            Fast, secure, and transparent instant loans. Get funded in minutes, not days.
                        </p>
                    </div>

                    {/* Social Icons with hover effects */}
                    <div className="social-icons flex flex-wrap gap-4 mt-6 pb-2 md:pb-0">
                        {/* Facebook Icon */}
                        <Link
                            href="#"
                            title="Facebook"
                            aria-label="Facebook"
                            className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.5 4H16.5C17.0523 4 17.5 3.55228 17.5 3V2C17.5 1.44772 17.0523 1 16.5 1H14C10.9624 1 8.5 3.46243 8.5 6.5V9H7C6.44772 9 6 9.44772 6 10V12C6 12.5523 6.44772 13 7 13H8.5V21C8.5 21.5523 8.94772 22 9.5 22H12.5C13.0523 22 13.5 21.5523 13.5 21V13H15.5C16.0523 13 16.5 12.5523 16.5 12V10C16.5 9.44772 16.0523 9 15.5 9H13.5V6.5C13.5 5.67157 14.1716 5 15 5H14.5Z"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                            </svg>
                        </Link>

                        {/* Twitter/X Icon */}
                        <Link
                            href="#"
                            title="Twitter"
                            aria-label="Twitter"
                            className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={20}
                                height={20}
                                fill="none"
                            >
                                <path d="M18.244 2H21.5l-7.45 8.52L23 22h-6.828l-5.35-6.993L4.95 22H1.693l7.97-9.11L1 2h6.996l4.837 6.365L18.244 2zM17.05 20h1.904L7.032 4H5.03l12.02 16z"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                            </svg>
                        </Link>

                        {/* LinkedIn Icon */}
                        <Link
                            href="#"
                            title="LinkedIn"
                            aria-label="LinkedIn"
                            className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.7827 7.8916C17.3523 7.8916 18.8576 8.51512 19.9674 9.62499C21.0773 10.7349 21.7008 12.2402 21.7008 13.8098V20.7143H17.7554V13.8098C17.7554 13.2866 17.5475 12.7848 17.1776 12.4148C16.8076 12.0449 16.3059 11.837 15.7827 11.837C15.2595 11.837 14.7577 12.0449 14.3877 12.4148C14.0178 12.7848 13.8099 13.2866 13.8099 13.8098V20.7143H9.8645V13.8098C9.8645 12.2402 10.488 10.7349 11.5979 9.62499C12.7078 8.51512 14.2131 7.8916 15.7827 7.8916Z"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.97286"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                                <path
                                    d="M5.91859 8.87793H1.97314V20.7143H5.91859V8.87793Z"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.97286"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                                <path
                                    d="M3.94585 5.91807C5.03535 5.91807 5.91856 5.03486 5.91856 3.94536C5.91856 2.85587 5.03535 1.97266 3.94585 1.97266C2.85635 1.97266 1.97314 2.85587 1.97314 3.94536C1.97314 5.03486 2.85635 5.91807 3.94585 5.91807Z"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.97286"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                            </svg>
                        </Link>

                        {/* Instagram Icon */}
                        <Link
                            href="#"
                            title="Instagram"
                            aria-label="Instagram"
                            className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.7696 1.97266H6.9053C4.18134 1.97266 1.97314 4.18086 1.97314 6.90481V16.7691C1.97314 19.4931 4.18134 21.7013 6.9053 21.7013H16.7696C19.4936 21.7013 21.7018 19.4931 21.7018 16.7691V6.90481C21.7018 4.18086 19.4936 1.97266 16.7696 1.97266Z"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.97286"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                                <path
                                    d="M15.7835 11.2158C15.9052 12.0367 15.765 12.8752 15.3827 13.6119C15.0005 14.3486 14.3956 14.946 13.6543 15.3192C12.9129 15.6923 12.0728 15.8222 11.2534 15.6903C10.4339 15.5585 9.67694 15.1716 9.09006 14.5847C8.50318 13.9979 8.1163 13.2409 7.98445 12.4214C7.85259 11.602 7.98247 10.7619 8.35562 10.0205C8.72876 9.27915 9.32617 8.67433 10.0629 8.29207C10.7996 7.90981 11.6381 7.76958 12.459 7.89132C13.2965 8.0155 14.0718 8.40573 14.6704 9.00437C15.2691 9.60301 15.6593 10.3783 15.7835 11.2158Z"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.97286"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                                <path
                                    d="M17.2627 6.41162H17.2721"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.97286"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                            </svg>
                        </Link>

                        {/* Email Icon */}
                        <Link
                            href="mailto:sim@ticktockloans.com.au"
                            title="Email"
                            aria-label="Email"
                            target='_blank'
                            className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7289 3.94629H3.94601C2.85642 3.94629 1.97314 4.82957 1.97314 5.91915V17.7563C1.97314 18.8459 2.85642 19.7292 3.94601 19.7292H19.7289C20.8185 19.7292 21.7018 18.8459 21.7018 17.7563V5.91915C21.7018 4.82957 20.8185 3.94629 19.7289 3.94629Z"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.97286"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                                <path
                                    d="M21.7018 6.90576L12.8535 12.5284C12.5489 12.7192 12.1968 12.8204 11.8374 12.8204C11.4781 12.8204 11.126 12.7192 10.8214 12.5284L1.97314 6.90576"
                                    stroke="white"
                                    strokeOpacity="0.6"
                                    strokeWidth="1.97286"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Quick Links Accordion */}
                <div className={poppins.className + ' quick-links w-full md:w-auto'}>
                    <button
                        type="button"
                        className="heading w-full flex items-center justify-between md:block cursor-pointer mb-4 md:mb-3"
                        onClick={() => toggleAccordion('quickLinks')}>
                        <h3 className='text-white font-normal md:font-semibold text-[15px] md:text-[16px] pb-0 md:pb-[12px] text-left'>Quick Links</h3>
                        <span className="md:hidden text-white">
                            <svg className={`w-4 h-4 transform transition-transform duration-300 ${openAccordion === 'quickLinks' ? 'rotate-180' : 'rotate-0'}`}
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <div className={`menu-links gap-3 flex-col transition-all duration-300 mb-4 md:mb-0 ${openAccordion === 'quickLinks' ? 'flex' : 'hidden'} md:flex`}>
                        <Link title="Home Loans" aria-label="Home Loans" href="/HomeLoans"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Home Loans
                        </Link>
                        <Link title="Business Loans" aria-label="Business Loans" href="/Business-Loans"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Business Loans
                        </Link>
                        <Link title="About" aria-label="About" href="/about"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            About
                        </Link>
                        <Link title="Tips and Guides" aria-label="Tips and Guides" href="/TipsandGuides"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Tips and Guides
                        </Link>
                        <Link title="Finance for My Business" aria-label="Finance for My Business" href="/Business-Loans/finance-for-my-business"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Finance for My Business
                        </Link>
                        <Link href="/Contact" title="Contact" aria-label="Contact"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Contact
                        </Link>
                        <Link href="/privacy-policy" title="Privacy Policy" aria-label="Privacy Policy"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-conditions" title="Terms & Conditions" aria-label="Terms & Conditions"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Terms & Conditions
                        </Link>

                    </div>
                </div>

                {/* Legal Accordion */}
                <div className={poppins.className + ' quick-links w-full md:w-auto'}>
                    <button
                        type="button"
                        className="heading w-full flex items-center justify-between md:block cursor-pointer mb-4 md:mb-3"
                        onClick={() => toggleAccordion('legal')}>
                        <h3 className='text-white font-normal md:font-semibold text-[15px] md:text-[16px] text-left pb-0 md:pb-[12px]'>Guides</h3>
                        <span className="md:hidden text-white">
                            <svg className={`w-4 h-4 transform transition-transform duration-300 ${openAccordion === 'legal' ? 'rotate-180' : 'rotate-0'}`}
                                viewBox="0 0 24 24"fill="none"xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9"stroke="currentColor"strokeWidth="1.8"strokeLinecap="round"strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <div className={`menu-links gap-3 flex-col transition-all duration-300 mb-4 md:mb-0 ${openAccordion === 'legal' ? 'flex' : 'hidden'} md:flex`}>
                        <Link href="/TipsandGuides/first-home-buyer-guide" title="First Home Buyer Guide" aria-label="First Home Buyer Guide"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            First Home Buyer Guide
                        </Link>
                        <Link href="/TipsandGuides/why-use-a-broker" title="Why Use a Broker?" aria-label=" Why Use a Broker?"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Why Use a Broker?
                        </Link>
                        <Link href="/TipsandGuides/looking-for-refinance-your-home" title="Looking for Refinance Your Home" aria-label="Looking for Refinance Your Home"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Looking for Refinance Your Home
                        </Link>
                        <Link href="/TipsandGuides/investing-in-property-guide" title="Investing in Property Guide" aria-label="Investing in Property Guide"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Investing in Property Guide
                        </Link>
                        <Link href="/TipsandGuides/business-finance-guide" title="Business Finance Guide" aria-label="Business Finance Guide"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Business Finance Guide
                        </Link>
                        <Link href="/TipsandGuides/explaining-the-loan-process" title="Explaining the Loan Process" aria-label="Explaining the Loan Process"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Explaining the Loan Process
                        </Link>
                        <Link href="/TipsandGuides/checklist-of-loan-document" title="Checklist of loan document" aria-label="Checklist of loan document"
                            className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 flex items-center">
                            Checklist of loan document
                        </Link>
                    </div>
                </div>

                {/* Contact Column - 4th Column with Mobile Accordion */}
                <div className={poppins.className + ' contact-info w-full md:w-auto'}>
                    <button
                        type="button"
                        className="heading w-full flex items-center justify-between md:block cursor-pointer mb-4 md:mb-3"
                        onClick={() => toggleAccordion('contact')}
                    >
                        <h3 className='text-white font-normal md:font-semibold text-[15px] md:text-[16px] pb-0 md:pb-[12px] text-left'>Our Contact</h3>
                        <span className="md:hidden text-white">
                            <svg className={`w-4 h-4 transform transition-transform duration-300 ${openAccordion === 'contact' ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9"stroke="currentColor"strokeWidth="1.8"strokeLinecap="round"strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <div className={`contact-items flex flex-col gap-3 transition-all duration-300 ${openAccordion === 'contact' ? 'flex' : 'hidden'} md:flex`}>
                        {/* Email */}
                        <div className='flex items-center gap-3'>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <path d="M19.7289 3.94629H3.94601C2.85642 3.94629 1.97314 4.82957 1.97314 5.91915V17.7563C1.97314 18.8459 2.85642 19.7292 3.94601 19.7292H19.7289C20.8185 19.7292 21.7018 18.8459 21.7018 17.7563V5.91915C21.7018 4.82957 20.8185 3.94629 19.7289 3.94629Z" stroke="#B5FF5F" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.7018 6.90576L12.8535 12.5284C12.5489 12.7192 12.1968 12.8204 11.8374 12.8204C11.4781 12.8204 11.126 12.7192 10.8214 12.5284L1.97314 6.90576" stroke="#B5FF5F" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <a href="mailto:sim@ticktockloans.com.au" className="text-[#e9e9e9e3] text-[12px] md:text-[13px] hover:text-[#B5FF5F] transition-colors duration-300">
                                sim@ticktockloans.com.au
                            </a>
                        </div>
                        {/* Phone 1 */}
                        <div className='flex items-center gap-3'>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#B5FF5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <a href="tel:+61433249678" className="text-[#e9e9e9e3] font-poppins text-[12px] md:text-[13px] hover:text-[#B5FF5F] transition-colors duration-300">
                                + 0433 249 678
                            </a>
                        </div>

                        {/* Address */}
                        <div className='flex items-start gap-3'>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
                                <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" stroke="#B5FF5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[#e9e9e9e3] text-[12px] md:text-[13px]">
                               <a target='_blank' href='https://www.google.com/maps/place/136+Green+Valley+Dr,+Greenwith+SA+5125,+Australia/@-34.7715352,138.7006255,17z/data=!3m1!4b1!4m6!3m5!1s0x6ab0b2de72200d53:0x23b071f82d1df8b0!8m2!3d-34.7715352!4d138.7006255!16s%2Fg%2F11c4txjgt6?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D' title=' 136 GreenValley Drive Greenwith, SA, 5125' aria-label=' 136 GreenValley Drive Greenwith, SA, 5125'>
                                    136 GreenValley Drive Greenwith, SA, 5125
                               </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto py-[20px] md:py-[25px] border-t border-[#816f6f40] text-center mt-[20px] md:mt-[50px]">
                <p className="text-white text-left text-[10px] md:text-[12px] text-center w-full flex justify-center gap-2">{copyRight} <a href="https://base2brand.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#B5FF5F] transition-colors duration-300">Designed By Base2brand</a></p>
            </div>

            {/* Floating Footer Social - Built-in Component */}
            <FloatingFooterSocial />
        </footer>
    );
};

export default memo(Footer);