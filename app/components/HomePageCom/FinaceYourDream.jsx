import Image from 'next/image';
import { title } from 'process';
import { memo } from 'react';

const FinaceYourDream = ({title , getStartBtn}) => {
    const finaceContent =[
        {
            id:1,
            title: "Get the best rates for Home, Car & Business loans",
        },
        {
            id:2,
            title: "Compare multiple banks & NBFCs in one place",
        },
        {
            id:3,
            title: "Quick approvals with minimal documentation",
        },
        {
            id:4,
            title: "Expert guidance from application to disbursal",
        }
    ]

    const arrowSvg = (
        <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.30566 10.3337H16.3616" stroke="#154617" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.3337 4.30573L16.3617 10.3337L10.3337 16.3616" stroke="#154617" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
    return (
       <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] px-4 sm:px-6 lg:px-8 mt-31px]'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='finace-wrapper grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:gap-4'>
                    {/* Image - Order changes on mobile */}
                    <div className='finace-image order-1 md:order-1 flex justify-center'>
                        <Image
                            data-aos="fade-up"
                            data-aos-duration="500"
                            src="/finace-your-dream.png"
                            alt="Finance Your Dreams with the Right Loan"
                            width={500}
                            height={500}
                            priority
                            className="w-full max-w-[600px] sm:max-w-[400px] md:max-w-[500px] h-auto"
                        />
                    </div>
                    
                    {/* Content - Order changes on mobile */}
                    <div className='finace-content order-2 md:order-2'>
                        <h2 
                            data-aos="fade-up" 
                            data-aos-duration="500"
                            className='text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-left text-[#B4FE5D] pb-2 md:pb-4 leading-tight'
                        >
                            {title.split(' ').map((word, index) => (
                                <span 
                                    key={index} 
                                    className={index === 2 || index === 5 || index === 6 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                                    {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                                </span>
                            ))}
                        </h2>
                        
                        <div 
                            data-aos="fade-up" 
                            data-aos-duration="500" 
                            className='list-data ml-4 sm:ml-[17px] grid gap-3 md:gap-[10px] my-4 md:my-[20px]'
                        >
                            {finaceContent.map((content, index) => (
                                <li 
                                    className='text-[#bebaba] marker:text-[#B5FF5F] text-sm sm:text-base md:text-lg' 
                                    key={index}
                                >
                                    {content.title}
                                </li>
                            ))}
                        </div>
                        
                        {/* Apply Button - Responsive */}
                        <div 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            className='start-your-application mt-4 sm:mt-6 md:mt-[40px] flex justify-center md:justify-start px-0 sm:px-4'
                        >
                            <a 
                                href='/application' 
                                title={getStartBtn} 
                                className='bg-[#B4FE5D] flex items-center gap-[3px] w-full sm:w-fit text-[#154617] font-bold py-3 px-6 rounded-full hover:bg-[#fff] hover:text-[#154617] transition-colors duration-300 justify-center text-sm sm:text-base'
                            >
                                {getStartBtn} {arrowSvg}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(FinaceYourDream);