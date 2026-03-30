import { memo } from 'react';

const WhatNeedSteps = ({ items }) => {
  // Hide component if no data
  if (!items || items.length === 0) return null;

  return (
    <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-10 md:pt-[60px] px-4 sm:px-6 lg:px-8'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-7'>
            {items.map((step) => (
            <div key={step.id} className='cursor-pointer p-6 rounded-2xl border border-[#9EF01A]/20 hover:border-[#B4FE5D]/40 transition-all duration-300 bg-gradient-to-b from-transparent to-[#9EF01A]/9 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#B4FE5D]/10'>
                {/* Badge */}
                {step.badge && (
                <h2 className='text-[#B5FF5F] text-2xl sm:text-3xl font-semibold mb-4 text-center md:text-left'>
                    {step.badge}
                </h2>
                )}

                {/* Title */}
                {step.title && (
                <h3 className='text-white text-xl sm:text-2xl font-regular mb-4 text-center md:text-left mt-2'>
                    {step.title}
                </h3>
                )}

                {/* Content */}
                {step.content && (
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed text-center md:text-left'>
                    {step.content}
                </p>
                )}
            </div>
            ))}

        </div>
        </div>
        </div>
    );
};

export default memo(WhatNeedSteps);