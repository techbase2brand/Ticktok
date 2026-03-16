"use client";
import { memo } from 'react';
import Image from "next/image";

const Hero = ({ subheading, poster, videoUrl, subheading2, heading, description, badge, apply, checkEligibility, getImage }) => {
    const badgeSvg = (
        <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_31_188)">
                <path d="M7.84164 12.2315C7.77119 11.9584 7.62885 11.7091 7.42942 11.5097C7.22999 11.3103 6.98077 11.1679 6.70768 11.0975L1.86642 9.8491C1.78382 9.82566 1.71112 9.77591 1.65936 9.70741C1.6076 9.63891 1.57959 9.55539 1.57959 9.46954C1.57959 9.38368 1.6076 9.30016 1.65936 9.23166C1.71112 9.16316 1.78382 9.11341 1.86642 9.08997L6.70768 7.84079C6.98067 7.7704 7.22983 7.62818 7.42925 7.4289C7.62867 7.22962 7.77107 6.98056 7.84164 6.70761L9.09003 1.86635C9.11324 1.78343 9.16293 1.71037 9.23154 1.65833C9.30014 1.60629 9.38389 1.57812 9.46999 1.57812C9.5561 1.57812 9.63985 1.60629 9.70845 1.65833C9.77705 1.71037 9.82675 1.78343 9.84996 1.86635L11.0976 6.70761C11.168 6.9807 11.3104 7.22993 11.5098 7.42936C11.7092 7.62878 11.9584 7.77113 12.2315 7.84158L17.0728 9.08918C17.156 9.11214 17.2295 9.16179 17.2818 9.23049C17.3341 9.2992 17.3624 9.38317 17.3624 9.46954C17.3624 9.5559 17.3341 9.63987 17.2818 9.70858C17.2295 9.77729 17.156 9.82693 17.0728 9.84989L12.2315 11.0975C11.9584 11.1679 11.7092 11.3103 11.5098 11.5097C11.3104 11.7091 11.168 11.9584 11.0976 12.2315L9.84917 17.0727C9.82596 17.1556 9.77627 17.2287 9.70766 17.2807C9.63906 17.3328 9.55531 17.3609 9.46921 17.3609C9.3831 17.3609 9.29935 17.3328 9.23075 17.2807C9.16215 17.2287 9.11245 17.1556 9.08924 17.0727L7.84164 12.2315Z" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.783 2.36752V5.52385" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.3609 3.9458H14.2046" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.15674 13.4155V14.9942" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.94641 14.2046H2.36768" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_31_188">
                    <rect width="18.9395" height="18.9395" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    // arrow svg
    const arrowSvg = (
        <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.30566 10.3337H16.3616" stroke="#154617" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.3337 4.30573L16.3617 10.3337L10.3337 16.3616" stroke="#154617" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    // Helper function to check if string has content
    const hasContent = (value) => {
        return value && typeof value === 'string' && value.trim() !== '';
    };

    return (
        <div className='banner w-full relative min-h-[700px] md:min-h-[700px] flex items-center pb-[30px] overflow-hidden'>
            {/* Video Background */}
            <video 
                autoPlay 
                muted 
                loop 
                preload="none"
                playsInline
                poster={poster}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
            
        
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#000]1 z-10"></div>
            
            {/* Content with higher z-index */}
            <div className='relative z-20 max-w-[1440px] mx-auto w-full'>
               <div className='banner-wrapper flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-8 md:py-12 lg:py-16'>
                    
                  {(hasContent(subheading) || hasContent(heading) || hasContent(description) || hasContent(badge) || hasContent(apply) || hasContent(checkEligibility)) && (
                    <div className='content text-center md:text-left w-full md:w-[65%] order-2 md:order-1'>
                        
                        {/* Badge — */}
                        {hasContent(badge) && (
                            <p data-aos="fade-up" data-aos-duration="400" 
                                className='flex items-center justify-center md:justify-start gap-[10px] text-[#B5FF5F] bg-[#384329] text-xs sm:text-sm font-bold mb-4 md:mb-2 w-fit mx-auto md:mx-0 border border-[#B5FF5F]/20 py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl shadow-[0_4px_15px_rgba(181,255,95,0.15)]'>
                                {badgeSvg} {badge}
                            </p>
                        )}
                        
                        {/* Subheading — h1 */}
                        {hasContent(subheading) && (
                            <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" 
                                className='text-white text-4xl sm:text-5xl md:text-[60px] font-bold mb-[-5px] md:mb-[-10px] leading-tight drop-shadow-lg'>
                                {subheading}
                            </h1>
                        )}
                        
                        {/* Heading — h2 */}
                        {hasContent(heading) && (
                            <h2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="0" 
                                className='text-[#B5FF5F] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-4 md:mb-4 leading-tight drop-shadow-2xl'>
                                {heading}
                            </h2>
                        )}
                        
                        {/* Subheading2 — h3 */}
                        {hasContent(subheading2) && (
                            <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" 
                                className='text-white text-4xl sm:text-5xl md:text-[60px] font-bold pb-[15px] leading-tight drop-shadow-lg'>
                                {subheading2}
                            </h3>
                        )}
                        
                        {/* Description */}
                        {hasContent(description) && (
                            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="0" 
                                className='text-white/90 text-sm sm:text-base md:text-lg mb-6 md:mb-6 max-w-md mx-auto md:mx-0 px-2 sm:px-0 drop-shadow-md'>
                                {description}
                            </p>
                        )}
                        
                        {/* Banner Buttons */}
                        {(hasContent(apply) || hasContent(checkEligibility)) && (
                            <div data-aos="fade-up" data-aos-duration="800" 
                                className='banner-button flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 md:gap-[20px] mt-6 sm:mt-8 md:mt-[50px] px-4 sm:px-0'>
                                
                                {hasContent(apply) && (
                                    <button className='cursor-pointer bg-[#B5FF5F] flex items-center justify-center gap-[10px] text-[#154617] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:bg-white transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto shadow-[0_8px_20px_rgba(181,255,95,0.3)] hover:shadow-[0_8px_25px_rgba(181,255,95,0.5)]'>
                                        {apply} {arrowSvg}
                                    </button>
                                )}
                                
                                {hasContent(checkEligibility) && (
                                    <button className='cursor-pointer bg-transparent backdrop-blur-sm border border-white/80 flex items-center justify-center gap-[10px] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:bg-[#B5FF5F] hover:text-[#154617] hover:border-[#B5FF5F] transition-all duration-300 text-sm sm:text-base w-full sm:w-auto shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(181,255,95,0.3)]'>
                                        {checkEligibility}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                )}
                    
                    {/* Image Section - 35% width on desktop */}
                    {getImage && (
                        <div className='banner-image w-full md:w-[35%] flex justify-center order-1 md:order-2 mb-4 md:mb-0'>
                            <div className="relative drop-shadow-2xl">
                                <Image 
                                    data-aos="fade-up" 
                                    data-aos-duration="500"   
                                    src={getImage}
                                    alt="Loan Amount"
                                    width={500}
                                    height={915}
                                    quality={75}
                                    fetchPriority="high"
                                    priority
                                    className="relative z-20 w-full h-auto"
                                />
                                {/* Image glow effect */}
                                <div className="absolute inset-0 bg-[#B5FF5F]/20 blur-3xl rounded-full z-10 scale-150 opacity-50"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(Hero);