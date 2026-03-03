import { memo } from 'react';

const WhyTiktock = ({ title, description }) => {
    const boxData = [
        {
            svg: (
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.52389 19.334C5.26256 19.3349 5.00633 19.2616 4.78499 19.1226C4.56365 18.9837 4.38627 18.7848 4.27347 18.5491C4.16066 18.3134 4.11706 18.0504 4.14773 17.7909C4.17839 17.5314 4.28207 17.2859 4.44671 17.0829L18.1186 2.99679C18.2211 2.87841 18.3609 2.79842 18.5149 2.76994C18.6689 2.74146 18.828 2.76618 18.9661 2.84005C19.1042 2.91392 19.2131 3.03255 19.2749 3.17647C19.3367 3.32038 19.3478 3.48103 19.3062 3.63205L16.6547 11.9456C16.5765 12.1549 16.5503 12.38 16.5782 12.6016C16.6061 12.8233 16.6874 13.0348 16.815 13.2181C16.9427 13.4014 17.1129 13.5511 17.3111 13.6542C17.5092 13.7572 17.7295 13.8107 17.9528 13.81H27.6198C27.8811 13.8091 28.1374 13.8824 28.3587 14.0213C28.5801 14.1602 28.7574 14.3591 28.8702 14.5949C28.983 14.8306 29.0266 15.0935 28.996 15.353C28.9653 15.6126 28.8616 15.8581 28.697 16.061L15.0251 30.1472C14.9226 30.2655 14.7828 30.3455 14.6288 30.374C14.4748 30.4025 14.3157 30.3778 14.1776 30.3039C14.0395 30.23 13.9306 30.1114 13.8688 29.9675C13.807 29.8236 13.7959 29.6629 13.8375 29.5119L16.489 21.1983C16.5672 20.9891 16.5934 20.764 16.5655 20.5423C16.5376 20.3207 16.4563 20.1091 16.3287 19.9258C16.201 19.7425 16.0308 19.5929 15.8326 19.4898C15.6345 19.3867 15.4142 19.3332 15.1909 19.334H5.52389Z" stroke="#B4FE5D" strokeWidth="2.76201" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Instant Approval",
            description: "Get approved in under 10 minutes"
        },
        {
            svg: (
                <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.6201 17.953C27.6201 24.858 22.7866 28.3105 17.0417 30.313C16.7408 30.4149 16.4141 30.41 16.1164 30.2991C10.3577 28.3105 5.52417 24.858 5.52417 17.953V8.28608C5.52417 7.91981 5.66967 7.56855 5.92865 7.30957C6.18764 7.05058 6.5389 6.90508 6.90517 6.90508C9.66716 6.90508 13.1196 5.24789 15.5226 3.14877C15.8151 2.89881 16.1873 2.76147 16.5721 2.76147C16.9569 2.76147 17.3291 2.89881 17.6217 3.14877C20.0384 5.2617 23.4771 6.90508 26.2391 6.90508C26.6054 6.90508 26.9566 7.05058 27.2156 7.30957C27.4746 7.56855 27.6201 7.91981 27.6201 8.28608V17.953Z" stroke="#B4FE5D" strokeWidth="2.76201" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "100% Secure",
            description: "Bank-grade encryption & privacy"
        },
        {
            svg: (
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.4767 2.76196H9.66678C8.14137 2.76196 6.90479 3.99855 6.90479 5.52395V27.6199C6.90479 29.1453 8.14137 30.3819 9.66678 30.3819H23.4767C25.0021 30.3819 26.2387 29.1453 26.2387 27.6199V5.52395C26.2387 3.99855 25.0021 2.76196 23.4767 2.76196Z" stroke="#B4FE5D" strokeWidth="2.76201" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.572 24.8579H16.5858" stroke="#B4FE5D" strokeWidth="2.76201" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "100% Online",
            description: "Zero paperwork, all digital"
        },
        {
            svg: (
                <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.572 2.76208V30.382" stroke="#B4FE5D" strokeWidth="2.76201" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.4772 6.90503H13.1196C11.8377 6.90503 10.6083 7.41427 9.70183 8.32073C8.79538 9.22719 8.28613 10.4566 8.28613 11.7385C8.28613 13.0205 8.79538 14.2499 9.70183 15.1563C10.6083 16.0628 11.8377 16.572 13.1196 16.572H20.0247C21.3066 16.572 22.536 17.0813 23.4425 17.9877C24.3489 18.8942 24.8582 20.1236 24.8582 21.4056C24.8582 22.6875 24.3489 23.9169 23.4425 24.8234C22.536 25.7298 21.3066 26.2391 20.0247 26.2391H8.28613" stroke="#B4FE5D" strokeWidth="2.76201" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "No Hidden Fees",
            description: "Transparent pricing, no surprises"
        },
    ];

    return (
        <div className='why-tiktock-section bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] py-8 md:py-[50px] px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1440px] mx-auto'>
                {/* Title - Responsive text sizes */}
               <h2  data-aos="fade-up"  data-aos-duration="500" className='text-3xl sm:text-4xl md:text-[45px] font-bold text-center pb-2 md:pb-4 leading-tight'>
                    {title.split(' ').map((word, index) => (
                        <span 
                            key={index} 
                            className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                            {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                        </span>
                    ))}
                </h2>
                
                {/* Description - Responsive text */}
                <p 
                    data-aos="fade-up" 
                    data-aos-duration="600" 
                    className='text-center text-[#ddd] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4'
                >
                    {description}
                </p>
                
                {/* Box Wrapper - Responsive grid */}
                <div className='box-wrapper grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pt-8 md:pt-[40px]'>
                    {boxData.map((box, index) => (
                        <div 
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                            key={index} 
                            className='bg-[#0e1e11] cursor-pointer box p-4 sm:p-5 md:p-[20px] border border-[#9EF01A33] rounded-2xl hover:border-[#B4FE5D] hover:shadow-lg hover:shadow-[#B4FE5D]/10 transition-all duration-300'
                        >
                            {/* Icon - Responsive sizing */}
                            <div className='icon bg-[#1b3311] w-fit p-3 sm:p-4 rounded-[16.57px] mb-2 sm:mb-3'>
                                <div className="w-8 h-8 sm:w-10 sm:h-10">
                                    {box.svg}
                                </div>
                            </div>
                            
                            {/* Title - Responsive */}
                            <h3 className='text-lg sm:text-xl md:text-[20px] font-bold text-white py-1 sm:py-2 md:py-[10px]'>
                                {box.title}
                            </h3>
                            
                            {/* Description - Responsive */}
                            <p className='text-[#ddd] text-xs sm:text-sm md:text-[14px] font-regular leading-relaxed'>
                                {box.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(WhyTiktock);