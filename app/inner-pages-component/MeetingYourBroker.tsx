import Link from 'next/link';
import { memo } from 'react';

const MeetingYourBroker = ({
  badgeTitle,
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink
}) => {

  const buttonIcon = (
    <svg width={21} height={21} viewBox="0 0 21 21" fill="none">
      <path d="M4.30566 10.334H16.3616" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M10.3335 4.30566L16.3615 10.3336L10.3335 16.3616" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className='inner-banner bg-gradient-to-r from-[#000000] via-[#19240d] to-[#090a09] py-17 md:py-20 px-4 sm:px-6 lg:px-8'>
      <div className="mx-auto max-w-[1440px]">
        <div className='banner-wrapper flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 lg:gap-20 items-center'>

          {(badgeTitle || title || description) && (
            <div className='content text-center md:text-left'>

              {badgeTitle && (
                <p className="text-[#B5FF5F] bg-[#384329] text-sm font-bold mb-4 px-4 py-2 rounded-3xl w-fit mx-auto md:mx-0">
                  {badgeTitle}
                </p>
              )}

              {title && (
                <h1 className='text-white text-4xl md:text-[60px] font-bold pb-[15px]'>
                  {title}
                </h1>
              )}

              {description && (
                <p className="text-white/90 mb-6">{description}</p>
              )}

              {buttonText && (
                <Link
                  href={buttonLink || "/contact-us"}
                  className='border border-[#B5FF5F] text-[#B5FF5F] px-6 py-3 rounded-full flex items-center gap-2 w-fit mx-auto md:mx-0'
                >
                  {buttonText}
                  <span>{buttonIcon}</span>
                </Link>
              )}

            </div>
          )}

          {imageUrl && (
            <div className='image'>
              <img src={imageUrl} alt="banner" className="max-w-full" />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default memo(MeetingYourBroker);