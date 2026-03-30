import { memo } from 'react';

const WhatYouNeedBread = ({ title }) => {
    // If no title is passed, don't render anything
    if (!title) return null;

    return (
        <div className='bg-[#0D2611] py-10'>
            <div className='max-w-[1440px] mx-auto'>
                {title && (<h2 className='text-white text-center text-4xl md:text-[40px] font-bold pb-[15px]'>{title.split(' ').map((word, index) => (
                    <span
                        key={index}
                        className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                        {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                    </span>
                ))}</h2>)}
            </div>
        </div>
    );
};

export default memo(WhatYouNeedBread);