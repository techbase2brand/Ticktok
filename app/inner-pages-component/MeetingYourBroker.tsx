import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

type MeetingYourBrokerProps = {
  badgeTitle: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
};

const MeetingYourBroker = ({
  badgeTitle,
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink
}: MeetingYourBrokerProps) => {

  const buttonIcon = (
    <svg width={21} height={21} viewBox="0 0 21 21" fill="none">
      <path d="M4.30566 10.334H16.3616" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M10.3335 4.30566L16.3615 10.3336L10.3335 16.3616" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className='inner-banner bg-gradient-to-r from-[#000000] via-[#19240d] to-[#090a09] pb-12 md:pb-20 px-4 sm:px-6 lg:px-8'>
      <div className="mx-auto max-w-[1440px]">
        <div className='banner-wrapper flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center'>

          {(badgeTitle || title || description) && (
            <div className='content text-center md:text-left order-1 md:order-2'>

              {badgeTitle && (
                <p className="text-[#B5FF5F] bg-[#384329] text-sm font-bold mb-4 px-4 py-2 rounded-3xl w-fit mx-auto md:mx-0">
                  {badgeTitle}
                </p>
              )}

              {title && (
                <h2 className='text-white text-4xl md:text-[45px] font-bold pb-[15px]'>
                  {title.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                                {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                            </span>
                        ))}
                </h2>
              )}

              {description && (
                <p className="text-white/90 my-2">{description}</p>
              )}

              {buttonText && (
                <Link
                  href={buttonLink || "/contact-us"}
                  className='cursor-pointer bg-[#B4FE5D]  hover:bg-[#fff] hover:text-[#154617] border border-[#B5FF5F] text-[#154617] w-fit mx-auto md:mx-0  mt-8  px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold  hover:border-[#B5FF5F] transition-all duration-300 flex items-center gap-2 text-sm'>
                  {buttonText}
                  {buttonIcon && <span>{buttonIcon}</span>}
                </Link>
              )}

            </div>
          )}

          {imageUrl && (
            <div className='image order-2 md:order-1'>
              <Image src={imageUrl} alt="banner" className="max-w-full w-full" width={1000} height={1000} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default memo(MeetingYourBroker);