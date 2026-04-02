import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
type WeDoHardWorkProps = {
  title?: string;
  description?: string;
  subtitle?: string;
  description2?: string;
  image?: string;
  whyUseBtn?: string;
  whyUseBtnUrl?: string;
  badeTitle?: string;
  flexReverse?: boolean;
};
const WeDoHardWork = ({
  title,
  description,
  subtitle,
  description2,
  image,
  badeTitle,
  whyUseBtnUrl,
  whyUseBtn,
  flexReverse = false
}: WeDoHardWorkProps) => {
    // Helper function to check if string has content
    const hasContent = (value?: string) => {
    return value?.trim() !== "";
    };

    // Check if any content exists (including image)
    const hasAnyContent = () => {
        return hasContent(title) || 
               hasContent(description) || 
               hasContent(subtitle) || 
               hasContent(badeTitle) ||
               hasContent(description2) ||
               hasContent(whyUseBtn) ||
               image; 
    };

  
    if (!hasAnyContent()) {
        return null;
    }

    // Determine grid direction classes based on flexReverse prop
    const gridDirectionClass = flexReverse 
        ? 'md:grid-cols-2'  // Normal grid, we'll handle order with individual classes
        : 'md:grid-cols-2';

    return (
        <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-10 md:pt-[80px] px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1440px] mx-auto'>
                <div className={`flex flex-col md:grid ${gridDirectionClass} gap-8 md:gap-12 lg:gap-20 items-center`}>


                        
                    {/* Content - Show only if there's any text content */}
                    {(hasContent(title) || hasContent(description) || hasContent(badeTitle) || hasContent(subtitle) || hasContent(description2)) && (
                        <div className={`content w-full ${flexReverse ? 'md:order-1' : 'md:order-2'}`}>
                            {hasContent(badeTitle) && (
                                <p className='flex items-center justify-start md:justify-start gap-[10px] text-[#B5FF5F] bg-[#384329] text-xs sm:text-sm font-bold mb-4 md:mb-2 w-fit  md:mx-0 border border-[#B5FF5F]/20 py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl shadow-[0_4px_15px_rgba(181,255,95,0.15)]'>
                                    {badeTitle}
                                </p>
                            )}
                            {/* Title - Show only if title exists */}
                            {hasContent(title) && (
                                <h2
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    className='text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-left leading-tight mb-3 md:mb-4'>
                                    {title!.split(' ').map((word, index) => (
                                        <span
                                            key={index}
                                            className={
                                                index === 2 || index === 3
                                                    ? 'text-[#B4FE5D]'
                                                    : 'text-white'
                                            }
                                        >
                                            {word}
                                           {index < title!.split(' ').length - 1 ? ' ' : ''}
                                        </span>
                                    ))}
                                </h2>
                            )}
                            
                            {/* Description - Show only if description exists */}
                            {hasContent(description) && (
                                <p
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    className='text-left text-gray-300 text-sm sm:text-base md:text-lg mb-0 md:mb-8 leading-relaxed'>
                                    {description}
                                </p>
                            )}
                            
                            {/* Subtitle - Show only if subtitle exists */}
                            {hasContent(subtitle) && (
                                <h3
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    className='text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-bold text-left leading-tight mb-3 md:mb-4'
                                >
                                  {subtitle!.split(' ').map((word, index, arr) => (
                                        <span
                                            key={index}
                                            className={
                                                index === 1 || index === 2
                                                    ? 'text-[#B4FE5D]'
                                                    : 'text-white'
                                            }
                                        >
                                            {word}
                                            {index < subtitle!.split(' ').length - 1 ? ' ' : ''}
                                        </span>
                                    ))}
                                </h3>
                            )}
                            
                            {/* Description2 - Show only if description2 exists */}
                            {hasContent(description2) && (
                                <p
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    className='text-left text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed'
                                >
                                    {description2}
                                </p>
                            )}

                            {/* Why Use Button - Show only if whyUseBtn exists */}
                            {hasContent(whyUseBtn) && (
                            <Link
                                href={whyUseBtnUrl || "#"}
                                className='mt-8 sm:mt-8 md:mt-8 lg:mt-[40px] bg-[#B4FE5D] text-sm md:text-[16px] flex items-center gap-[3px] w-fit text-[#154617] font-bold py-3 px-6 rounded-full hover:bg-[#fff] hover:text-[#154617] transition-colors duration-300'
                            >
                                {whyUseBtn}
                            </Link>
                            )}
                        </div>
                    )}

                    {/* Image - Show only if image exists */}
                   {image && (
                        <div className={`w-full image-hard rounded-2xl md:rounded-3xl ${flexReverse ? 'md:order-2' : 'md:order-1'}`}>
                            <Image
                                src={image || '/placeholder.png'}
                                alt="Home Loan"
                                width={500}
                                height={500}
                                className='w-full h-auto max-h-[800px] rounded-2xl md:rounded-3xl'
                                priority
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(WeDoHardWork);