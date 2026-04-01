"use client";
import Image from 'next/image';
import { memo } from 'react';

interface DownloadGuidsProps {
  title: string;
  description: string;
  buttonLable: string;
  buttonUrl: string;
  image: string;
}

const DownloadGuids = ({ title, description, buttonLable, buttonUrl, image }: DownloadGuidsProps) => {
  const rightArrow = ((
   <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path  d="M4.30566 10.334H16.3616"stroke="currentColor"strokeWidth="1.7223"strokeLinecap="round"strokeLinejoin="round"/>
    <path d="M10.3335 4.30566L16.3615 10.3336L10.3335 16.3616"stroke="currentColor"strokeWidth="1.7223"strokeLinecap="round"strokeLinejoin="round"/>
  </svg>
  ))
  return (
    <div className='bg-gradient-to-r from-[#000000] via-[#304419] to-[#000000] py-13 md:py-20 px-4 sm:px-6 lg:px-8 md:mt-0 border-t-[1px] border-[#385e0c]'>
      <div className='max-w-5xl mx-auto flex items-center justify-center gap-9 flex-wrap md:flex-nowrap'>
        
        {/* Image Section */}
        <div className=''>
          <Image src={image} alt="Download Guide" width={1000} height={1000} quality={76} priority className='w-full max-w-sm mx-auto md:mx-0 rounded-lg shadow-lg' />
        </div>


        {/* Text Section */}
        <div className=' text-center md:text-left max-w-full md:max-w-2xl'>
          <h2 className='text-white text-3xl sm:text-4xl font-bold mb-6'>
            {title}
            <span className='text-[#B4FE5D]'>guide</span>
          </h2>
          <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base'>
            {description}
          </p>
          <a 
            href={buttonUrl} 
            className='cursor-pointer bg-transparent backdrop-blur-sm border border-white/80 flex items-center justify-center gap-[10px] mx-auto md:mx-0 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold hover:bg-[#B5FF5F] hover:text-[#154617] hover:border-[#B5FF5F] transition-all duration-300 text-sm sm:text-base w-fit shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(181,255,95,0.3)]'>
            {buttonLable} {rightArrow}
          </a>
        </div>


      </div>
    </div>
  );
};

export default memo(DownloadGuids);