import { memo } from 'react';

const RichText = ({ title, description, buttonText, buttonlink, nameClass }) => {
  // agar dono nahi aaye toh component hi render na ho
  if (!title && !description) return null;

  return (
   <>
    <div className={`bg-gradient-to-r from-[#1c290e] to-[#0D2611] py-[50px] px-4 sm:px-6 lg:px-8 ${nameClass || ''}`}>
        <div className='mx-auto max-w-[1440px]'>
           <div className='content max-w-5xl mx-auto'>
             {title && <h2 className='text-white text-2xl sm:text-3xl md:text-[45px] max-w-5xl mx-auto font-bold text-center pb-2 md:pb-4 leading-tight'>
             {title.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                                {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                        </span>
                ))}
            </h2>}
            {description && <p className='text-white text-base sm:text-base md:text-lg  text-center px-2 sm:px-0 drop-shadow-md'>{description}</p>}
            {buttonText && buttonlink && (
                <div className="text-center mt-6">
                    <a href={buttonlink} className="cursor-pointer  bg-transparent border border-[#B5FF5F] text-[#B5FF5F] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-[#B5FF5F] hover:text-[#154617] hover:border-[#B5FF5F] w-fit transition-all duration-300 flex items-center mx-auto gap-2 text-sm">
                    {buttonText} <span>→</span>
                    </a>
                </div>
            )}          
           </div>
        </div>
    </div>
   </>
  );
};

export default memo(RichText);