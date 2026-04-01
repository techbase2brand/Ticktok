import Image from 'next/image';
import { memo } from 'react';
// Define props type
type BannerProps = {
  badgeTitle: string;
  title: string;
  description: string;
  imageUrl: string;
};
const Banner = ({ badgeTitle, title, description, imageUrl }: BannerProps) => {
    const badgeIcon = (
        <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_435_2037)">
            <path d="M7.84018 12.2315C7.76973 11.9584 7.62738 11.7091 7.42795 11.5097C7.22853 11.3103 6.9793 11.1679 6.70621 11.0975L1.86495 9.8491C1.78235 9.82566 1.70966 9.77591 1.6579 9.70741C1.60613 9.63891 1.57812 9.55539 1.57812 9.46954C1.57812 9.38368 1.60613 9.30016 1.6579 9.23166C1.70966 9.16316 1.78235 9.11341 1.86495 9.08997L6.70621 7.84079C6.97921 7.7704 7.22837 7.62818 7.42778 7.4289C7.6272 7.22962 7.7696 6.98056 7.84018 6.70761L9.08857 1.86635C9.11177 1.78343 9.16147 1.71037 9.23007 1.65833C9.29868 1.60629 9.38242 1.57812 9.46853 1.57812C9.55464 1.57812 9.63838 1.60629 9.70699 1.65833C9.77559 1.71037 9.82529 1.78343 9.84849 1.86635L11.0961 6.70761C11.1665 6.9807 11.3089 7.22993 11.5083 7.42936C11.7077 7.62878 11.957 7.77113 12.2301 7.84158L17.0713 9.08918C17.1546 9.11214 17.228 9.16179 17.2803 9.23049C17.3326 9.2992 17.361 9.38317 17.361 9.46954C17.361 9.5559 17.3326 9.63987 17.2803 9.70858C17.228 9.77729 17.1546 9.82693 17.0713 9.84989L12.2301 11.0975C11.957 11.1679 11.7077 11.3103 11.5083 11.5097C11.3089 11.7091 11.1665 11.9584 11.0961 12.2315L9.8477 17.0727C9.8245 17.1556 9.7748 17.2287 9.7062 17.2807C9.63759 17.3328 9.55385 17.3609 9.46774 17.3609C9.38163 17.3609 9.29789 17.3328 9.22928 17.2807C9.16068 17.2287 9.11098 17.1556 9.08778 17.0727L7.84018 12.2315Z"stroke="#B5FF5F"strokeWidth="1.57829"strokeLinecap="round"strokeLinejoin="round"/>
            <path d="M15.7812 2.36768V5.524"stroke="#B5FF5F"strokeWidth="1.57829"strokeLinecap="round"strokeLinejoin="round"/>
            <path d="M17.3595 3.9458H14.2031"stroke="#B5FF5F" strokeWidth="1.57829"  strokeLinecap="round"strokeLinejoin="round"/>
            <path d="M3.15625 13.4155V14.9943" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round"strokeLinejoin="round"/>
            <path d="M3.94592 14.2046H2.36719"stroke="#B5FF5F"strokeWidth="1.57829"strokeLinecap="round"strokeLinejoin="round"/>
            </g> <defs><clipPath id="clip0_435_2037"><rect width="18.9395" height="18.9395" fill="white" /></clipPath></defs>
        </svg>

    );
  return (
    <div className='inner-banner bg-gradient-to-r from-[#000000] via-[#19240d] to-[#090a09] py-12 md:py-20 px-4 sm:px-6 lg:px-8'>
      <div className="mx-auto max-w-[1440px]">
        <div className='banner-wrapper flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 lg:gap-20 items-center'>

          {/* Content Section */}
          {(badgeTitle || title ||description) && (
            <div className='content text-center md:text-left'>

                {badgeTitle && (
                    <p className="flex items-center justify-center md:justify-start gap-[10px] text-[#B5FF5F] bg-[#384329] text-xs sm:text-sm font-bold mb-4 md:mb-2 w-fit mx-auto md:mx-0 border border-[#B5FF5F]/20 py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl shadow-[0_4px_15px_rgba(181,255,95,0.15)]">{badgeIcon} {badgeTitle}</p>
                )}

                {/* Title */}
                {title && (
                <h1 className='text-white text-4xl sm:text-5xl md:text-[60px] font-bold pb-[15px] leading-tight drop-shadow-lg'>
                    {title.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                                {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                            </span>
                        ))}
                </h1>
                )}
              {description && (
                <p className="text-white/90 text-base sm:text-base md:text-lg mb-6 md:mb-6 max-w-xl mx-auto md:mx-0 px-2 sm:px-0 py-2 drop-shadow-md">{description}</p>
              )}

            </div>
          )}

          {/* Image Section */}
          {imageUrl && (
            <div className='image'>
              <Image src={imageUrl} alt="banner" className="max-w-full w-full" width={1000} height={1000} priority  quality={75} />
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default memo(Banner);