"use client";
import { memo } from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = ({copyRight}) => {

    return (
        <footer className='bg-[#154617] pt-[60px] px-4 md:px-6 lg:px-8'>
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10 md:gap-8">
                <div className='logo-content w-full md:w-auto'>
                    <div className="logo">
                        <a href="/" title="logo" className="inline-block">
                            <Image 
                                className="" 
                                src="/logo.svg" 
                                alt="Logo" 
                                width={220} 
                                height={20} 
                                priority
                            />
                        </a>
                        <p className='text-[#bebaba] max-w-[400px] pt-[17px] text-sm md:text-base'>
                            Fast, secure, and transparent instant loans. Get funded in minutes, not days.
                        </p>
                    </div>
                    
                    {/* Social Icons with hover effects */}
                    <div className="social-icons flex flex-wrap gap-4 mt-8">
                        {/* Twitter/X Icon */}
                        <Link 
                            href="#" 
                            className="group border border-[#417703] hover:bg-[#b4fe5d] p-2.5 rounded-3xl transition-colors duration-300"
                        >
                            <svg 
                                width={20} 
                                height={20} 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M21.7018 3.94572C21.7018 3.94572 21.0113 6.01722 19.7289 7.29958C21.3072 17.1639 10.4564 24.3648 1.97314 18.7422C4.14329 18.8408 6.31344 18.1503 7.89173 16.7693C2.95957 15.2897 0.493499 9.46973 2.95957 4.93215C5.12972 7.49687 8.48358 8.97651 11.8374 8.87787C10.9497 4.73486 15.7832 2.36743 18.7425 5.12943C19.8275 5.12943 21.7018 3.94572 21.7018 3.94572Z" 
                                    stroke="white" 
                                    strokeOpacity="0.6" 
                                    strokeWidth="1.97286" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className="group-hover:stroke-black transition-all duration-300"
                                />
                            </svg>
                        </Link>

                        {/* LinkedIn Icon */}
                        <Link 
                            href="#" 
                            className="group border border-[#417703] p-2.5 hover:bg-[#b4fe5d] rounded-3xl transition-colors duration-300"
                        >
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
                            className="group border border-[#417703] p-2.5 rounded-3xl hover:bg-[#b4fe5d] transition-colors duration-300"
                        >
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
                            className="group border border-[#417703] p-2.5 rounded-3xl transition-colors duration-300 hover:bg-[#b4fe5d]"
                        >
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
                    <div className='heading'>
                        <h3 className='text-white font-bold text-[18px] md:text-[20px] pb-[12px]'>Quick Links</h3>
                    </div>
                    <div className='menu-links flex-col flex gap-2 md:gap-3'>
                        <Link href="/how-it-works" className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
                            How It Works
                        </Link>
                        <Link href="/calculator" className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
                            Calculator
                        </Link>
                        <Link href="/about" className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
                            About
                        </Link>
                    </div>
                </div>
                
                <div className='quick-links w-full md:w-auto'>
                    <div className='heading'>
                        <h3 className='text-white font-bold text-[18px] md:text-[20px] pb-[12px]'>Legal</h3>
                    </div>
                    <div className='menu-links flex-col flex gap-2 md:gap-3'>
                        <Link href="/privacy-policy" className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
                            Terms of Service
                        </Link>
                        <Link href="/cookie-policy" className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
                            Cookie Policy
                        </Link>
                        <Link href="/contact" className="text-[#e9e9e9e3] text-[14px] hover:text-[#B5FF5F] hover:underline transition-colors duration-300">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto py-[20px] md:py-[25px] border-t border-[#816f6f40] mt-[40px] md:mt-[50px]">
                <p className="text-[#bebaba] text-left text-[12px] md:text-[14px]">{copyRight}</p>
            </div>
        </footer>
    );
};

export default memo(Footer);