import { memo } from 'react';

const Disclaimer = ({ disclaimerTitle, description }) => {
  return (
    <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-10 md:pt-[60px] px-4 sm:px-6 lg:px-8'>
      <div className="max-w-[1440px] mx-auto">
        {disclaimerTitle && <h2 className='flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular  w-fit  border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl'>{disclaimerTitle}</h2>}
        {description && <p className='text-[16px] md:text-[20px] text-white italic'>{description}</p>}
      </div>
    </div>
  );
};

export default memo(Disclaimer);