"use client";
import { memo, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = ({copyRight}) => {
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
    const [isLegalOpen, setIsLegalOpen] = useState(false);

    return (
        <footer className='bg-[#154617] pt-[40px] px-4 md:px-6 lg:px-8'>
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
                <div className='logo-content w-full md:w-auto'>
                    <div className="logo">
                        <Link href="/" title="logo" className="inline-block"  aria-label="Logo">
                            <Image 
                                className="" 
                                src="/logo.svg" 
                                alt="Logo" 
                                width={220} 
                                height={20} 
                                quality={75}
                                priority
                            />
                        </Link>
                        <p className='text-[#bebaba] max-w-[400px] pt-[17px] text-sm md:text-base'>
                            Fast, secure, and transparent instant loans. Get funded in minutes, not days.
                        </p>
                    </div>
                    
                    {/* Social Icons with hover effects */}
                    <div className="social-icons flex flex-wrap gap-4 mt-8">
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
                            href="#" 
                            title="Email"
                            aria-label="Email"
                             className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300">
                            <svg 
                                width={20} 
                                height={20} 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
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
                
                <div className='quick-links w-full md:w-auto'>
                    <button
                        type="button"
                        className="heading w-full flex items-center justify-between md:block cursor-pointer"
                        onClick={() => setIsQuickLinksOpen((prev) => !prev)}
                    >
                        <h3 className='text-white font-bold text-[18px] md:text-[20px] pb-[12px]'>Quick Links</h3>
                        <span className="md:hidden text-white">
                            <svg
                                className={`w-5 h-5 transform transition-transform duration-300 ${isQuickLinksOpen ? 'rotate-180' : 'rotate-0'}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                   <div className={`menu-links flex-col gap-2 md:gap-3 ${isQuickLinksOpen ? 'flex' : 'hidden'} md:flex`}>
                        <Link title="How It Works" aria-label="How It Works" href="/how-it-works" 
                            className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 min-h-[48px] flex items-center">
                            How It Works
                        </Link>
                        <Link title="Calculator" aria-label="Calculator" href="/calculator" 
                            className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 min-h-[48px] flex items-center">
                            Calculator
                        </Link>
                        <Link title="About" aria-label="About" href="/about" 
                            className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 min-h-[48px] flex items-center">
                            About
                        </Link>
                    </div>
                </div>
                
                <div className='quick-links w-full md:w-auto'>
                    <button
                        type="button"
                        className="heading w-full flex items-center justify-between cursor-pointer"
                        onClick={() => setIsLegalOpen((prev) => !prev)}
                    >
                        <h3 className='text-white font-bold text-[18px] md:text-[20px] pb-[12px]'>Legal</h3>
                        <span className="md:hidden text-white">
                            <svg
                                className={`w-5 h-5 transform transition-transform duration-300 ${isLegalOpen ? 'rotate-180' : 'rotate-0'}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                    <div className={`menu-links flex-col gap-2 md:gap-3 ${isLegalOpen ? 'flex' : 'hidden'} md:flex`}>
                        <Link href="/privacy-policy" title="Privacy Policy" aria-label="Privacy Policy" 
                            className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 min-h-[48px] flex items-center">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" title="Terms of Service" aria-label="Terms of Service" 
                            className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 min-h-[48px] flex items-center">
                            Terms of Service
                        </Link>
                        <Link href="/cookie-policy" title="Cookie Policy" aria-label="Cookie Policy" 
                            className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 min-h-[48px] flex items-center">
                            Cookie Policy
                        </Link>
                        <Link href="/contact" title="Contact" aria-label="Contact" 
                            className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300 min-h-[48px] flex items-center">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto py-[20px] md:py-[25px] border-t border-[#816f6f40] mt-[40px] md:mt-[50px]">
                <p className="text-white text-left text-[12px] md:text-[12px]">{copyRight} <a href="https://base2brand.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#B5FF5F] transition-colors duration-300">Designed By Base2brand</a></p>
            </div>
        </footer>
    );
};

export default memo(Footer);