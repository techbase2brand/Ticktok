'use client';

import { memo } from 'react';

type TicktockBrandsProps = {
  title: string;
};

const logos: string[] = [
  '/image 80.png',
  '/image 83.png',
  '/sdsf 1.png',
  '/image 81.png',
  '/image 67.png',
  '/image 76.png',
  '/image 82.png',
  '/image 78.png',
  '/image 85.png',
  '/image 86.png',
  '/AFG-Commercial-powered-by-Thinktank 1.png',
  '/sfS 1.png',
  '/image 63.png',
  '/image 69.png',
  '/image 45.png',
  '/image 64.png',
  '/image 73.png',
  '/image 58.png',
  '/image 91.png',
  '/image 72.png',
  '/image 94.png',
  '/image 54.png',
  '/image 90.png',
  '/image 56.png',
  '/image 70.png',
  '/image 44.png',
  '/fghgfh 1.png',
  '/image 57.png',
  '/image 52.png',
  '/image 71.png',
  '/image 77.png',
  '/hvghvbj 1.png',
  '/fhcgbvgng 1.png',
  '/image_43-removebg-preview 1.png',
  '/image_24-removebg-preview 1.png',
  '/image_11-removebg-preview 1.png',
  '/Rectangle_86-removebg-preview 1.png',
  '/image_79-removebg-preview 1.png',
  '/image_17-removebg-preview 1.png',
  '/image 88.png',
  '/image 59.png',
  '/image 92.png',
  '/image_25-removebg-preview 1.png',
  '/image_28-removebg-preview 1.png',
  '/image_36-removebg-preview 1.png',
  '/image_48-removebg-preview 1.png',
  '/Rectangle_88-removebg-preview 1.png',
  '/Rectangle_84-removebg-preview 1.png',
  '/image_39-removebg-preview 1.png',
  '/image_20-removebg-preview 1.png',
  '/image_49-removebg-preview 1.png',
  '/image_50-removebg-preview 1.png',
  '/image_47-removebg-preview 1.png',
  '/image_22-removebg-preview 1.png',
  '/image_21-removebg-preview 1.png',
  '/image_19-removebg-preview 1.png',
  '/image_13-removebg-preview 1.png',
  '/image_40-removebg-preview 1.png',
  '/image_62-removebg-preview 1.png',
  '/image_65-removebg-preview 1.png',
  '/image_60-removebg-preview 1.png',
  '/image_18-removebg-preview 1.png',
  '/image_14-removebg-preview 1.png',
  '/image_89-removebg-preview 1.png',
  '/Rectangle_112-removebg-preview 1.png',
  '/image_68-removebg-preview 1.png',
  '/image_29-removebg-preview 1.png',
  '/image_15-removebg-preview 1.png',
  '/image_12-removebg-preview 1.png',
  '/image_30-removebg-preview 1.png',
  '/image_37-removebg-preview 1.png',
  '/image_32-removebg-preview 1.png',
  '/Rectangle_99-removebg-preview 1.png',
  '/image_42-removebg-preview 1.png',
  '/image_16-removebg-preview 1.png',
  '/image_9-removebg-preview 1.png',
  '/image_23-removebg-preview 1.png',
  '/image_40-removebg-preview 1.png',
  '/image_35-removebg-preview 1.png',
  '/image_87-removebg-preview 1.png',
  '/Rectangle_87-removebg-preview 1.png',
  '/image_75-removebg-preview 1.png',
  '/Rectangle_83-removebg-preview 1.png',
  '/Rectangle_90-removebg-preview 1.png',
  '/image_51-removebg-preview 1.png',
  '/image_34-removebg-preview 1.png',
  '/image_55-removebg-preview 1.png',
  '/image_38-removebg-preview 1.png',
  '/image_93-removebg-preview 1.png',
  '/Rectangle_85-removebg-preview 1.png',
  '/image_53-removebg-preview 1.png',
  '/Rise-High-75-lenders-1_2-removebg-preview 1.png',
  '/Rise-High-75-lenders-1_3-removebg-preview 1.png',
  '/Rise-High-75-lenders-1_4-removebg-preview 1.png',
  '/Rise-High-75-lenders-1_5-removebg-preview 1.png',
  '/image 84.png',
];

const TicktockBrands = ({ title }: TicktockBrandsProps) => {
  // Function to highlight specific words in title
  const renderTitle = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      // You can customize which words get highlighted
      // Example: Highlight the 3rd word or any word containing specific text
      const isHighlighted = 
        index === 2 || // Highlight 3rd word (index 2)
        word.toLowerCase() === 'trusted' ||
        word.toLowerCase() === 'partners' ||
        word.toLowerCase() === 'excellence';
      
      return (
        <span
          key={index}
          className={isHighlighted ? 'text-[#B4FE5D]' : 'text-white'}
        >
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <div className="bg-gradient-to-r from-black via-[#0b110c] to-[#0b110c] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight">
          {renderTitle(title)}
        </h2>

       {/* Optional: Show total brands count */}
        <div className="mt-5 text-white ">
          Trusted by 70+ leading brands
        </div>

        {/* Logo Grid with Animation */}
        <div className="mt-10 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-6 items-center">
          {logos.map((logo, index) => (
            <div 
              key={`${logo}-${index}`} 
              className="flex justify-center items-center opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
             <img  height="auto" width="auto" src={logo}
                alt={`Brand logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TicktockBrands.displayName = 'TicktockBrands';

export default memo(TicktockBrands);