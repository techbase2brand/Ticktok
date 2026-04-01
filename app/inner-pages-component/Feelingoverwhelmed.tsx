import { memo } from 'react';
import Link from 'next/link';

const Feelingoverwhelmed = ({ title, description, buttonName, buttonUrl }) => {
  return (
    <div className="bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto px-4 text-center bg-gradient-to-r from-[#0D2611] to-[#294B11] rounded-2xl p-10">
        
        <h2 className="text-2xl sm:text-3xl md:text-[45px] font-bold text-center pb-2 md:pb-4 leading-tight">
            {title.split(' ').map((word, index) => (
                <span key={index} className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                    {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                </span>
            ))}
        </h2>

        <p className="text-white/70 text-sm md:text-[19px] text-center mb-4 md:mb-[20px]">
          {description}
        </p>

        <Link href={buttonUrl}>
          <button className="cursor-pointer  bg-transparent border border-[#B5FF5F] text-[#B5FF5F] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-[#B5FF5F] hover:text-[#154617] hover:border-[#B5FF5F] transition-all duration-300 flex items-center mx-auto gap-2 text-sm">
            {buttonName} <span>→</span>
          </button>
        </Link>

      </div>
    </div>
  );
};

export default memo(Feelingoverwhelmed);