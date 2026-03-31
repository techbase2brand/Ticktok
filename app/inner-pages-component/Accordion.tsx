"use client";  // ← Add this at the very top

import { memo, useState } from 'react';

const Accordion = ({ mainheading, items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="custom-accordion bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-8 md:pt-[50px] px-4 sm:px-6 lg:px-8">
            <div className='max-w-[1440px] mx-auto'>
                {mainheading && (
                    <h2 className='text-3xl max-w-4xl mx-auto sm:text-4xl md:text-[45px] font-bold text-center pb-2 md:pb-4 leading-tight'>{mainheading.split(' ').map((word, index) => (
                            <span key={index} className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                                {word}{index < mainheading.split(' ').length - 1 ? ' ' : ''}
                            </span>
                        ))}</h2>
                )}

                <div className='space-y-4 max-w-5xl mx-auto mt-5'>
                    {items && items.map((item, index) => (
                        <div key={item.id} className='border border-[#B4FE5D]/30 rounded-lg overflow-hidden'>
                            <button onClick={() => toggleItem(index)}
                                className='w-full cursor-pointer text-left px-4 py-3 md:py-4 text-[14px] md:text-[18px] bg-gradient-to-b from-transparent to-[#9EF01A]/9 flex justify-between items-center text-white font-medium'>
                                {item.title}
                                <span className='ml-2'>
                                    {activeIndex === index ? (
                                    // Minus icon SVG - further reduced size
                                    <svg width={16} height={16} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_221_641)">
                                        <path d="M11.9855 5.77716L0.415363 17.3475C0.147544 17.6151 3.17783e-08 17.9723 2.7236e-08 18.3532C2.26937e-08 18.7341 0.147544 19.0914 0.415362 19.359L1.26723 20.2111C1.82231 20.7655 2.72448 20.7655 3.27872 20.2111L12.9946 10.4952L22.7213 20.2218C22.9891 20.4895 23.3461 20.6372 23.7268 20.6372C24.1079 20.6372 24.465 20.4895 24.733 20.2218L25.5846 19.3698C25.8525 19.102 26 18.7449 26 18.364C26 17.9831 25.8525 17.6259 25.5846 17.3583L14.004 5.77716C13.7353 5.50892 13.3766 5.36159 12.9952 5.36244C12.6124 5.36159 12.2539 5.50892 11.9855 5.77716Z" fill="#B5FF5F"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_221_641">
                                            <rect width={26} height={26} fill="white" transform="translate(0 26) rotate(-90)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    ) : (
                                    // Plus icon SVG - further reduced size
                                    <svg width={16} height={16} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_221_665)">
                                        <path d="M14.0145 20.2228L25.5846 8.65251C25.8525 8.3849 26 8.02767 26 7.64676C26 7.26585 25.8525 6.90862 25.5846 6.64101L24.7328 5.78894C24.1777 5.23449 23.2755 5.23449 22.7213 5.78894L13.0054 15.5048L3.27872 5.77816C3.0109 5.51055 2.65388 5.36279 2.27318 5.36279C1.89207 5.36279 1.53504 5.51055 1.26701 5.77816L0.415362 6.63023C0.147544 6.89805 1.05378e-06 7.25507 1.03713e-06 7.63598C1.02048e-06 8.01689 0.147544 8.37412 0.415362 8.64173L11.996 20.2228C12.2647 20.4911 12.6234 20.6384 13.0048 20.6376C13.3876 20.6384 13.7461 20.4911 14.0145 20.2228Z" fill="#B5FF5F"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_221_665">
                                            <rect width={26} height={26} fill="white" transform="translate(26 1.1365e-06) rotate(90)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    )}
                                </span>
                                </button>

                            {activeIndex === index && (
                                <div className='px-4 py-3 bg-gradient-to-b from-transparent to-[#9EF01A]/9 text-white text-[13px] md:leading-[24px] md:text-[14px]'>{item.content}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(Accordion);