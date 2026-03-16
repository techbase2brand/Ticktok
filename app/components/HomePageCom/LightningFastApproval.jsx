"use client";
import { memo } from 'react';

const LightningFastApproval = ({subheading, badge, heading, applyBtn, description}) => {
    const badgeSvg = (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.94585 13.8097C3.75918 13.8103 3.57617 13.758 3.41806 13.6588C3.25996 13.5595 3.13326 13.4175 3.05269 13.2491C2.97211 13.0807 2.94097 12.8929 2.96287 12.7075C2.98478 12.5221 3.05883 12.3468 3.17643 12.2018L12.9421 2.14023C13.0153 2.05568 13.1152 1.99854 13.2252 1.97819C13.3352 1.95785 13.4488 1.97551 13.5475 2.02828C13.6461 2.08104 13.7239 2.16578 13.7681 2.26858C13.8122 2.37137 13.8201 2.48612 13.7904 2.59399L11.8965 8.5323C11.8406 8.68177 11.8219 8.84255 11.8418 9.00086C11.8618 9.15917 11.9198 9.31028 12.011 9.44122C12.1022 9.57217 12.2237 9.67904 12.3653 9.75267C12.5069 9.82631 12.6642 9.8645 12.8237 9.86398H19.7287C19.9154 9.86335 20.0984 9.91569 20.2565 10.0149C20.4146 10.1142 20.5413 10.2562 20.6219 10.4246C20.7025 10.593 20.7336 10.7808 20.7117 10.9662C20.6898 11.1515 20.6158 11.3269 20.4982 11.4719L10.7325 21.5335C10.6592 21.618 10.5594 21.6751 10.4494 21.6955C10.3394 21.7158 10.2257 21.6982 10.1271 21.6454C10.0284 21.5926 9.95066 21.5079 9.90652 21.4051C9.86237 21.3023 9.85449 21.1876 9.88416 21.0797L11.7781 15.1414C11.834 14.9919 11.8527 14.8311 11.8328 14.6728C11.8128 14.5145 11.7548 14.3634 11.6636 14.2325C11.5724 14.1015 11.4508 13.9946 11.3093 13.921C11.1677 13.8474 11.0104 13.8092 10.8509 13.8097H3.94585Z" stroke="#B5FF5F" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    
    const arrowSvg = (
        <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.30566 10.3337H16.3616" stroke="#154617" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.3337 4.30573L16.3617 10.3337L10.3337 16.3616" stroke="#154617" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const squareList = [
        {id:1, title:"100% Secure"}, 
        {id:2, title:"No Hidden Fees"},
        {id:3, title:"Instant Approval"}
    ];

    return (
        <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pb-12 md:pb-[80px] px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1440px] mx-auto'>
                {/* Badge */}
                <h5 
                    data-aos="fade-up" 
                    data-aos-duration="400" 
                    className='flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular mb-4 md:mb-2 w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl'
                >
                    {badgeSvg} {badge}
                </h5>
                
                {/* Subheading - Responsive */}
                <h3 
                    data-aos="fade-up" 
                    data-aos-duration="500" 
                    className='text-white text-2xl sm:text-2xl md:text-5xl lg:text-[50px] pt-4 sm:pt-6 md:pt-[10px] font-bold text-center leading-tight'
                >
                    {subheading}
                </h3>
                
                {/* Heading - Responsive */}
                <h2 
                    data-aos="fade-up" 
                    data-aos-duration="600" 
                    className='text-center text-3xl sm:text-3xl md:text-6xl lg:text-[70px] font-bold text-[#A0E255] leading-tight pb-4 sm:pb-5 md:pb-[20px]'
                >
                    {heading}
                </h2>
                
                {/* Description - Responsive */}
                <p 
                    data-aos="fade-up" 
                    data-aos-duration="700" 
                    className='text-center font-regular text-[#ddd] text-sm sm:text-base md:text-lg max-w-[700px] mx-auto px-4 sm:px-6'
                >
                    {description}
                </p>
                
                {/* Apply Button - Responsive */}
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    className='start-your-application mt-6 sm:mt-8 md:mt-[40px] flex justify-center px-4'>
                    <a 
                        href='/application' 
                        title={applyBtn} 
                        className='bg-[#B4FE5D] flex items-center gap-[3px] w-full sm:w-fit text-[#154617] font-bold py-3 px-6 rounded-full hover:bg-[#fff] hover:text-[#154617] transition-colors duration-300 justify-center text-sm sm:text-base'
                    >
                        {applyBtn} {arrowSvg}
                    </a>
                </div>

                {/* Square List - Fully Responsive */}
                <div 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    className='mt-5 sm:mt-6 md:mt-[23px] flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-[32px] px-4'
                >
                    {squareList.map((item) => (
                        <div key={item.id} className='text-center'>
                            <ol className='flex items-center gap-2'>
                                <li className='flex items-center gap-2 text-[#878787] text-xs sm:text-sm md:text-[16px] list-none'>
                                    {/* Green Square Bullet Point */}
                                    <span className='w-3 h-3 bg-[#B5FF5F] rounded-sm flex-shrink-0'></span>
                                    {item.title}
                                </li>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(LightningFastApproval);