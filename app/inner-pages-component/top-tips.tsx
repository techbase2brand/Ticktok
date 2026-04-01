import Image from 'next/image';
import { memo } from 'react';

const TopTips = ({ title, description, imageUrl, data }) => {
    return (
        <>
            <div className="top-tips bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] py-10 md:py-[60px] px-4 sm:px-6 lg:px-8">
                <div className='max-w-[1440px] mx-auto'>
                    <h2 className='text-white text-3xl sm:text-4xl md:text-[45px] font-bold pb-2 leading-tight'>{title}</h2>
                    <p className='text-white/90 text-base sm:text-base md:text-lg mb-6 md:mb-6 px-2 sm:px-0 py-2'>{description}</p>

                    <div className='banner-wrapper flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 lg:gap-15 items-center'>
                        <Image className='w-full h-full' src={imageUrl} alt="top tips" quality={75} priority width={1000} height={600} />
                        <div className='grid'>
                            {data?.map((item) => (
                                <div
                                    key={item.id} className="icon-box border-b border-[#BEF083] flex  items-center gap-4 py-4 md:py-5">
                                    <div className="w-[50px] h-[50px] flex-shrink-0 [&>svg]:w-full [&>svg]:h-full">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-white text-[14px] md:text-[19px] font-medium leading-[1.4]">
                                        {item.title}
                                    </h3>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(TopTips);