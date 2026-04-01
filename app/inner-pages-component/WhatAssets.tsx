import { memo } from 'react';

type WhatAssetsProps = {
  data: any[];
};

const WhatAssets = ({ data }: WhatAssetsProps) => {

  if (!data || data.length === 0) return null;

  return (
    <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c]  pt-10 md:pt-[60px] px-4 sm:px-6 lg:px-8'>
      <div className='max-w-[1440px] mx-auto'>

        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 md:gap-5 gap-3'>
          {data.map((item) => (
            <div key={item.id} className='cursor-pointer p-6 rounded-2xl border border-[#9EF01A]/20 hover:border-[#B4FE5D]/40 transition-all duration-300 bg-gradient-to-b from-transparent to-[#9EF01A]/9 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#B4FE5D]/10'>
              
              <div className='icon md:0 mx-auto flex md:justify-normal justify-center'>{item.icon}</div>

              <h2 className='text-white md:text-left text-center  md:text-[20px] pt-3 font-medium'>
                {item.title}
              </h2>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default memo(WhatAssets);