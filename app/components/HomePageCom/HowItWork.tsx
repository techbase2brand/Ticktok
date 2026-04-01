"use client";
import Link from 'next/link';
import { memo } from 'react';

type HowItWorkProps = {
  title?: string;
  description?: string;
  applicationBtn?: string;
};
const HowItWork = ({ title, description, applicationBtn }: HowItWorkProps) => {
    const boxData = [
        {
            iconSvg: (
                <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.5927 3.94592H11.8372C10.7908 3.94592 9.78721 4.36162 9.04725 5.10158C8.3073 5.84153 7.8916 6.84512 7.8916 7.89157V39.4567C7.8916 40.5032 8.3073 41.5068 9.04725 42.2467C9.78721 42.9867 10.7908 43.4024 11.8372 43.4024H35.5111C36.5576 43.4024 37.5612 42.9867 38.3011 42.2467C39.0411 41.5068 39.4568 40.5032 39.4568 39.4567V13.81L29.5927 3.94592Z" stroke="#0F4D1C" strokeWidth="3.94573" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.6201 3.94592V11.8368C27.6201 12.8832 28.0358 13.8867 28.7757 14.6267C29.5156 15.3666 30.5192 15.7822 31.5656 15.7822H39.4564" stroke="#0F4D1C" strokeWidth="3.94573" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.7284 17.7559H15.783" stroke="#0F4D1C" strokeWidth="3.94573" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31.5654 25.6473H15.783" stroke="#0F4D1C" strokeWidth="3.94573" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M31.5656 33.5389H15.7832" stroke="#0F4D1C" strokeWidth="3.94573" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            subheading: "Step 1",
            title: "Apply",
            description: "Fill simple form in 2 minutes",
            count:1
        },
        {
            iconSvg: (
                <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.674 43.4024C34.5696 43.4024 43.4023 34.5698 43.4023 23.6742C43.4023 12.7786 34.5696 3.94592 23.674 3.94592C12.7784 3.94592 3.9458 12.7786 3.9458 23.6742C3.9458 34.5698 12.7784 43.4024 23.674 43.4024Z"stroke="#154617" strokeWidth="3.94573" strokeLinecap="round"strokeLinejoin="round"/>
                <path d="M17.7559 23.6741L21.7013 27.6195L29.5922 19.7286"stroke="#154617"strokeWidth="3.94573"strokeLinecap="round"strokeLinejoin="round"/>
                </svg>

            ),
            subheading: "Step 2",
            title: "Verify",
            description: "Instant KYC & approval",
            count:2
        },
        {
            iconSvg: (
                <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.4842 13.81V7.89142C37.4842 7.36819 37.2763 6.86639 36.9064 6.49641C36.5364 6.12643 36.0346 5.91858 35.5113 5.91858H9.86439C8.81793 5.91858 7.81433 6.33428 7.07437 7.07424C6.33441 7.8142 5.9187 8.8178 5.9187 9.86426C5.9187 10.9107 6.33441 11.9143 7.07437 12.6543C7.81433 13.3942 8.81793 13.81 9.86439 13.81H39.457C39.9803 13.81 40.4821 14.0178 40.852 14.3878C41.222 14.7578 41.4299 15.2596 41.4299 15.7828V23.6742M41.4299 23.6742H35.5113C34.4649 23.6742 33.4613 24.0899 32.7213 24.8298C31.9814 25.5698 31.5657 26.5734 31.5657 27.6199C31.5657 28.6663 31.9814 29.6699 32.7213 30.4099C33.4613 31.1498 34.4649 31.5655 35.5113 31.5655H41.4299C41.9531 31.5655 42.4549 31.3577 42.8249 30.9877C43.1949 30.6177 43.4027 30.1159 43.4027 29.5927V25.647C43.4027 25.1238 43.1949 24.622 42.8249 24.252C42.4549 23.882 41.9531 23.6742 41.4299 23.6742Z" stroke="#154617" strokeWidth="3.94573"strokeLinecap="round"strokeLinejoin="round"/>
                    <path d="M5.9187 9.86438V37.4844C5.9187 38.5309 6.33441 39.5345 7.07438 40.2745C7.81434 41.0144 8.81795 41.4301 9.86442 41.4301H39.4573C39.9806 41.4301 40.4824 41.2223 40.8524 40.8523C41.2223 40.4823 41.4302 39.9805 41.4302 39.4573V31.5658" stroke="#154617" strokeWidth="3.94573" strokeLinecap="round"strokeLinejoin="round"/>
                </svg>
            ),
            subheading: "Step 3",
            title: "Get Funds",
            description: "Money in your account",
            count:3
        }
    ];

    // arrow svg
    const arrowSvg = (
        <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.30566 10.3337H16.3616" stroke="#154617" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.3337 4.30573L16.3617 10.3337L10.3337 16.3616" stroke="#154617" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    return (
        <div className='how-it-work-section bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pb-2 md:pb-[80px] px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1440px] mx-auto'>
                {/* Title */}
                <h2 data-aos="fade-up" data-aos-duration="500"
                    className='text-3xl sm:text-4xl md:text-[45px] font-bold text-center text-[#B4FE5D] pb-2 md:pb-4 leading-tight'>
                   {title!.split(' ').map((word, index) => (
                        <span 
                            key={index} 
                            className={index === 2 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                            {word}{index < title!.split(' ').length - 1 ? ' ' : ''}
                        </span>
                    ))}
                </h2>
                
                {/* Description */}
                <p 
                    data-aos="fade-up" 
                    data-aos-duration="600"
                    className='text-center text-[#ddd] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4'
                >
                    {description}
                </p>

                {/* Steps Wrapper - Responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-7 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12">
                    {boxData.map((step, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                            data-aos-duration="700"
                              className='cursor-pointer p-6 text-center grid justify-center rounded-2xl border border-[#9EF01A]/20 hover:border-[#B4FE5D]/40 transition-all duration-300 bg-gradient-to-b from-transparent to-[#9EF01A]/9 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#B4FE5D]/10'>
                            <div className="flex items-center justify-center mb-5 sm:mb-5">
                                <div className="bg-[#fff] relative shadow-[0px_0px_47.35px_0px_#9EF01A66] p-3 sm:p-4 rounded-full group-hover:bg-[#B4FE5D] transition-colors duration-300">
                                    <div className="w-12 h-12 max-auto flex justify-center items-center sm:w-14 sm:h-14 md:w-16 md:h-16">
                                        {step.iconSvg}
                                    </div>
                                   <div className='counter absolute top-0 right-0 border border-[#B4FE5D] bg-[#0F4D1C] text-[#B4FE5D] w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold'>
                                        {step.count}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Step number */}
                            <h3 className="text-sm sm:text-base font-semibold text-center text-[#fff] mb-1">
                                {step.subheading}
                            </h3>
                            
                            {/* Title */}
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-[#B4FE5D] mb-2">
                                {step.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-center text-[#ddd] text-xs sm:text-sm md:text-base leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div data-aos="fade-up" data-aos-duration="800" className='startr-your-application mt-[60px] flex justify-center'>
                    <Link  aria-label={applicationBtn} href='/Contact' title={applicationBtn} className='bg-[#B4FE5D] flex items-center gap-[3px] w-fit text-[#154617] font-bold py-3 px-6 rounded-full hover:bg-[#fff] hover:text-[#154617] transition-colors duration-300'>
                        {applicationBtn} {arrowSvg}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default memo(HowItWork);