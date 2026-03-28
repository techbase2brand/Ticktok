import { memo } from 'react';

const Sixtipsforhomebuyers = ({title, items , description}) => {
 
  return (
     <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-10 md:pt-[60px] px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1440px] mx-auto'>
                {title &&(<h2 className='text-3xl sm:text-4xl md:text-[45px] max-w-5xl mx-auto font-bold text-center pb-2 md:pb-4 leading-tight'>{title.split(' ').map((word, index) => (
                            <span key={index} className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                                {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                            </span>
                        ))}</h2>)}
                {description && (<p className='text-center text-[16px] md:text-[20px] text-[#9D9E9D] pb-4'>{description}</p>)}
                {/* 3 Column Grid - Mobile: 1 col, Desktop: 3 cols */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-7 mt-7'>
                    {items.map((item) => (
                        <div 
                            key={item.id} 
                            data-aos="fade-up" 
                            data-aos-duration="500"
                          className='cursor-pointer p-6 rounded-2xl border border-[#9EF01A]/20 hover:border-[#B4FE5D]/40 transition-all duration-300 bg-gradient-to-b from-transparent to-[#9EF01A]/9 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#B4FE5D]/10'>
                            {/* Icon */}
                            <div className='mb-6 flex justify-center md:justify-start'>
                                <div className='inline-block'>
                                    {item.icon}
                                </div>
                            </div>
                            
                            {/* Title */}
                            <h3 className='text-white text-xl sm:text-2xl font-regular mb-4 text-center md:text-left'>
                                {item.title}
                            </h3>
                            
                            {/* Description */}
                            <p className='text-gray-300 text-sm sm:text-base leading-relaxed text-center md:text-left'>
                                {item.description}
                            </p>
                        </div>
                    ))}     
                </div>  
               
            </div>
        </div>
  );
};

export default memo(Sixtipsforhomebuyers);