import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NeedHomeLoan = ({ heading, description, buttonText, image, buttonTextUrl = "/Contact" }) => {
  const hasContent = heading?.trim() || description?.trim() || buttonText?.trim();

  if (!hasContent) {
    return null;
  }

  return (
    <div className='need_home_loan w-full bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] py-10 md:py-[80px] px-0'>
      
      <div
        className='bg-gradient-to-r from-[#1c290e] via-[#1c290e] to-[#0b110c] rounded-l-2xl overflow-hidden'
        style={{ marginLeft: 'max(1rem, calc((100vw - 1440px) / 2))' }}>
        <div className='flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-14 py-10 md:py-12 gap-6 md:gap-0'>

          {(heading || description || buttonText) && (
            <div className='w-full md:w-1/2 flex flex-col items-start gap-4 md:gap-5'>
              {heading && (
                <h2 className='text-white text-2xl sm:text-3xl md:text-[42px] lg:text-[48px] font-bold leading-tight'>
                  {heading.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className={
                        index === 2 || index === 3
                          ? 'text-[#B4FE5D]'
                          : 'text-[#fff]'
                      }
                    >
                      {word}
                      {index < heading.split(' ').length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </h2>
              )}

              {description && (
                <p className='text-white/70 text-sm sm:text-base max-w-md mb-1 md:mb-[10px]'>
                  {description}
                </p>
              )}

              {buttonText && (
                <Link 
                  href={buttonTextUrl} 
                  title={buttonText} 
                  aria-label={buttonText} 
                  className='cursor-pointer bg-transparent border border-[#B5FF5F] text-[#B5FF5F] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-[#B5FF5F] hover:text-[#154617] hover:border-[#B5FF5F] transition-all duration-300 flex items-center gap-2 text-sm'>
                  {buttonText} <span>→</span>
                </Link>
              )}
            </div>
          )}

          <div className='w-full max-h-[400px] md:w-1/2 flex justify-center md:justify-end'>
            <Image
              src={image || "/living-room.webp"}
              alt="Home Loan"
              width={1000}
              height={1000}
              className='object-contain drop-shadow-2xl w-full max-w-[320px] sm:max-w-[400px] md:max-w-full'
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default memo(NeedHomeLoan);