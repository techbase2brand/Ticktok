"use client";
import { memo } from 'react';

type LovedbyThousandsProps = {
  title?: string;
  description?: string;
};

const LovedbyThousands = ({ title, description }: LovedbyThousandsProps) => {
    const customerData = [
        {
            id: 1, 
            starIcon:((
                <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6422 2.71625C13.6941 2.61145 13.7742 2.52323 13.8736 2.46155C13.9729 2.39987 14.0875 2.36719 14.2045 2.36719C14.3214 2.36719 14.436 2.39987 14.5354 2.46155C14.6347 2.52323 14.7149 2.61145 14.7667 2.71625L17.501 8.25472C17.6812 8.61926 17.9471 8.93464 18.2759 9.1738C18.6048 9.41296 18.9867 9.56875 19.389 9.6278L25.504 10.5227C25.6198 10.5395 25.7287 10.5883 25.8182 10.6638C25.9077 10.7392 25.9744 10.8382 26.0106 10.9495C26.0468 11.0608 26.0511 11.1801 26.0231 11.2938C25.9951 11.4074 25.9358 11.511 25.852 11.5927L21.4297 15.899C21.1381 16.1832 20.9199 16.534 20.7939 16.9212C20.6679 17.3085 20.6379 17.7205 20.7065 18.1219L21.7505 24.2061C21.7709 24.3219 21.7584 24.4411 21.7144 24.5502C21.6703 24.6592 21.5965 24.7537 21.5014 24.8228C21.4062 24.8919 21.2936 24.9329 21.1762 24.941C21.0589 24.9492 20.9417 24.9242 20.8379 24.8689L15.3716 21.995C15.0114 21.8058 14.6107 21.707 14.2039 21.707C13.7971 21.707 13.3964 21.8058 13.0362 21.995L7.5711 24.8689C7.46732 24.9239 7.35022 24.9486 7.2331 24.9403C7.11597 24.9319 7.00354 24.8909 6.90858 24.8219C6.81362 24.7528 6.73995 24.6585 6.69594 24.5496C6.65194 24.4408 6.63937 24.3217 6.65966 24.2061L7.70248 18.1231C7.77137 17.7215 7.74153 17.3092 7.61553 16.9217C7.48953 16.5342 7.27116 16.1832 6.97925 15.899L2.557 11.5939C2.47248 11.5123 2.41258 11.4085 2.38414 11.2945C2.35569 11.1805 2.35984 11.0608 2.39611 10.949C2.43238 10.8372 2.49931 10.7379 2.58929 10.6623C2.67926 10.5867 2.78865 10.5379 2.905 10.5215L9.01874 9.6278C9.4215 9.5692 9.80399 9.41362 10.1333 9.17443C10.4626 8.93524 10.7288 8.61962 10.9091 8.25472L13.6422 2.71625Z" fill="#B5FF5F" stroke="#B5FF5F" strokeWidth="2.36744" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )),
            qoutationSvg:((
                <svg width={76} height={76} viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                        <path d="M50.5052 9.46997C48.8309 9.46997 47.2251 10.1351 46.0412 11.319C44.8573 12.503 44.1921 14.1087 44.1921 15.7831V34.7224C44.1921 36.3967 44.8573 38.0025 46.0412 39.1864C47.2251 40.3703 48.8309 41.0355 50.5052 41.0355C51.3424 41.0355 52.1453 41.368 52.7373 41.96C53.3292 42.552 53.6618 43.3548 53.6618 44.192V47.3486C53.6618 49.0229 52.9967 50.6286 51.8127 51.8126C50.6288 52.9965 49.023 53.6616 47.3487 53.6616C46.5115 53.6616 45.7086 53.9942 45.1167 54.5862C44.5247 55.1781 44.1921 55.981 44.1921 56.8182V63.1313C44.1921 63.9685 44.5247 64.7713 45.1167 65.3633C45.7086 65.9553 46.5115 66.2878 47.3487 66.2878C52.3717 66.2878 57.189 64.2925 60.7408 60.7407C64.2926 57.1889 66.288 52.3716 66.288 47.3486V15.7831C66.288 14.1087 65.6229 12.503 64.4389 11.319C63.255 10.1351 61.6492 9.46997 59.9749 9.46997H50.5052Z" stroke="#B5FF5F" strokeWidth="6.31317" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.7828 9.46997C14.1085 9.46997 12.5027 10.1351 11.3188 11.319C10.1349 12.503 9.46973 14.1087 9.46973 15.7831V34.7224C9.46973 36.3967 10.1349 38.0025 11.3188 39.1864C12.5027 40.3703 14.1085 41.0355 15.7828 41.0355C16.62 41.0355 17.4229 41.368 18.0148 41.96C18.6068 42.552 18.9394 43.3548 18.9394 44.192V47.3486C18.9394 49.0229 18.2742 50.6286 17.0903 51.8126C15.9064 52.9965 14.3006 53.6616 12.6263 53.6616C11.7891 53.6616 10.9862 53.9942 10.3943 54.5862C9.80229 55.1781 9.46973 55.981 9.46973 56.8182V63.1313C9.46973 63.9685 9.80229 64.7713 10.3943 65.3633C10.9862 65.9553 11.7891 66.2878 12.6263 66.2878C17.6493 66.2878 22.4666 64.2925 26.0184 60.7407C29.5702 57.1889 31.5656 52.3716 31.5656 47.3486V15.7831C31.5656 14.1087 30.9004 12.503 29.7165 11.319C28.5326 10.1351 26.9268 9.46997 25.2525 9.46997H15.7828Z" stroke="#B5FF5F" strokeWidth="6.31317" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            )),
            content:"Got my loan approved in literally 8 minutes! The process was super smooth and transparent. No hidden charges, just straight-up honest service. Best fintech experience ever!",
            name:"John Doe",
            location:"New York, USA",   
        }
    ];

    // Function to get initials from name
    const getInitials = (fullName?: string) => {
        const nameParts = fullName?.split(' ') || [];
        if (nameParts.length >= 2) {
            return {
                firstInitial: nameParts[0].charAt(0).toUpperCase(),
                lastInitial: nameParts[1].charAt(0).toUpperCase()
            };
        }
        return {
            firstInitial: fullName?.charAt(0).toUpperCase() || '',
            lastInitial: ''
        };
    };

    // Function to render star icons using for loop
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <div key={i} className="star-item">
                    <svg width={29} height={29} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6422 2.71625C13.6941 2.61145 13.7742 2.52323 13.8736 2.46155C13.9729 2.39987 14.0875 2.36719 14.2045 2.36719C14.3214 2.36719 14.436 2.39987 14.5354 2.46155C14.6347 2.52323 14.7149 2.61145 14.7667 2.71625L17.501 8.25472C17.6812 8.61926 17.9471 8.93464 18.2759 9.1738C18.6048 9.41296 18.9867 9.56875 19.389 9.6278L25.504 10.5227C25.6198 10.5395 25.7287 10.5883 25.8182 10.6638C25.9077 10.7392 25.9744 10.8382 26.0106 10.9495C26.0468 11.0608 26.0511 11.1801 26.0231 11.2938C25.9951 11.4074 25.9358 11.511 25.852 11.5927L21.4297 15.899C21.1381 16.1832 20.9199 16.534 20.7939 16.9212C20.6679 17.3085 20.6379 17.7205 20.7065 18.1219L21.7505 24.2061C21.7709 24.3219 21.7584 24.4411 21.7144 24.5502C21.6703 24.6592 21.5965 24.7537 21.5014 24.8228C21.4062 24.8919 21.2936 24.9329 21.1762 24.941C21.0589 24.9492 20.9417 24.9242 20.8379 24.8689L15.3716 21.995C15.0114 21.8058 14.6107 21.707 14.2039 21.707C13.7971 21.707 13.3964 21.8058 13.0362 21.995L7.5711 24.8689C7.46732 24.9239 7.35022 24.9486 7.2331 24.9403C7.11597 24.9319 7.00354 24.8909 6.90858 24.8219C6.81362 24.7528 6.73995 24.6585 6.69594 24.5496C6.65194 24.4408 6.63937 24.3217 6.65966 24.2061L7.70248 18.1231C7.77137 17.7215 7.74153 17.3092 7.61553 16.9217C7.48953 16.5342 7.27116 16.1832 6.97925 15.899L2.557 11.5939C2.47248 11.5123 2.41258 11.4085 2.38414 11.2945C2.35569 11.1805 2.35984 11.0608 2.39611 10.949C2.43238 10.8372 2.49931 10.7379 2.58929 10.6623C2.67926 10.5867 2.78865 10.5379 2.905 10.5215L9.01874 9.6278C9.4215 9.5692 9.80399 9.41362 10.1333 9.17443C10.4626 8.93524 10.7288 8.61962 10.9091 8.25472L13.6422 2.71625Z" fill="#B5FF5F" stroke="#B5FF5F" strokeWidth="2.36744" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            );
        }
        return stars;
    };

    return (
       <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-[40px] md:pt-0 pb-12 md:pb-[80px] px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1440px] mx-auto'>
                <h3 
                    data-aos="fade-up" 
                    data-aos-duration="500" 
                    className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-center leading-tight'
                >
                    {title!.split(' ').map((word, index) => (
                        <span 
                            key={index} 
                            className={index === 2 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                            {word}{index < title!.split(' ').length - 1 ? ' ' : ''}
                        </span>
                    ))}
                </h3>
                <p 
                    data-aos="fade-up" 
                    data-aos-duration="500" 
                    className='text-[#bebaba] text-center pt-4 md:pt-6 max-w-[700px] mx-auto text-sm sm:text-base'
                >
                    {description}
                </p>

                <div className='customer max-w-[1000px] border border-[1px] shadow-xl shadow-[#203b01] border-[#313030]  mx-auto mt-8 sm:mt-10 md:mt-[50px] bg-gradient-to-r from-[#203b01] via-[#1F7A2E33] to-[#1F7A2E33] rounded-[16px] sm:rounded-[20px] md:rounded-[28px] py-6 sm:py-8 md:py-[30px] px-4 sm:px-6 md:px-[40px]'>
                    {customerData.map((customer, index) => {
                        const initials = getInitials(customer.name); 
                        
                        return (
                            <div key={index} className='customer-card' data-aos="fade-up" data-aos-duration="500">
                                <div className='customer-content relative'>
                                    {/* Quotation SVG - Desktop: absolute positioning, Mobile: relative */}
                                    <div className='customer-quotation hidden md:block absolute top-0 left-0 opacity-20 w-[76px] h-[76px]'>
                                        {customer.qoutationSvg}
                                    </div>
                                    <div className='customer-quotation md:hidden flex justify-center mb-4 opacity-20 w-12 h-12 mx-auto'>
                                        {customer.qoutationSvg}
                                    </div>
                                    
                                    {/* Star ratings */}
                                    <div className='star-icons flex justify-center gap-1 mt-[20px]'>
                                        {renderStars()}
                                    </div>
                                    
                                    <p className='customer-text text-white font-[400] text-center max-w-[700px] mx-auto py-6 md:py-[40px] text-sm sm:text-base md:text-lg lg:text-[20px]'>
                                        {customer.content}
                                    </p>
                                </div>
                                
                                {/* Customer details - Desktop: row, Mobile: column */}
                                <div className='customer-details flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-[20px]'>
                                    <div className='customer-icon w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#B5FF5F] flex items-center justify-center flex-shrink-0'>
                                        <span className='text-[#154617] font-bold text-base md:text-[20px]'>
                                            {initials.firstInitial}{initials.lastInitial}
                                        </span>
                                    </div>
                                    <div className='customer-ct text-center md:text-left'>
                                        <h4 className='customer-name text-white font-bold text-base md:text-[18px]'>
                                            {customer.name}
                                        </h4>
                                        <p className='customer-location pt-1 md:pt-2 text-[#bebaba] text-sm md:text-[16px] font-[400]'>
                                            {customer.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default memo(LovedbyThousands);