import { memo } from 'react';
type HeroProps = {
  badge: string;
  title: string;
  description: string;
};      
const Hero = ({ badge, title, description }: HeroProps) => {
        const badgeSvg = (
        <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_31_188)">
                <path d="M7.84164 12.2315C7.77119 11.9584 7.62885 11.7091 7.42942 11.5097C7.22999 11.3103 6.98077 11.1679 6.70768 11.0975L1.86642 9.8491C1.78382 9.82566 1.71112 9.77591 1.65936 9.70741C1.6076 9.63891 1.57959 9.55539 1.57959 9.46954C1.57959 9.38368 1.6076 9.30016 1.65936 9.23166C1.71112 9.16316 1.78382 9.11341 1.86642 9.08997L6.70768 7.84079C6.98067 7.7704 7.22983 7.62818 7.42925 7.4289C7.62867 7.22962 7.77107 6.98056 7.84164 6.70761L9.09003 1.86635C9.11324 1.78343 9.16293 1.71037 9.23154 1.65833C9.30014 1.60629 9.38389 1.57812 9.46999 1.57812C9.5561 1.57812 9.63985 1.60629 9.70845 1.65833C9.77705 1.71037 9.82675 1.78343 9.84996 1.86635L11.0976 6.70761C11.168 6.9807 11.3104 7.22993 11.5098 7.42936C11.7092 7.62878 11.9584 7.77113 12.2315 7.84158L17.0728 9.08918C17.156 9.11214 17.2295 9.16179 17.2818 9.23049C17.3341 9.2992 17.3624 9.38317 17.3624 9.46954C17.3624 9.5559 17.3341 9.63987 17.2818 9.70858C17.2295 9.77729 17.156 9.82693 17.0728 9.84989L12.2315 11.0975C11.9584 11.1679 11.7092 11.3103 11.5098 11.5097C11.3104 11.7091 11.168 11.9584 11.0976 12.2315L9.84917 17.0727C9.82596 17.1556 9.77627 17.2287 9.70766 17.2807C9.63906 17.3328 9.55531 17.3609 9.46921 17.3609C9.3831 17.3609 9.29935 17.3328 9.23075 17.2807C9.16215 17.2287 9.11245 17.1556 9.08924 17.0727L7.84164 12.2315Z" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.783 2.36752V5.52385" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.3609 3.9458H14.2046" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.15674 13.4155V14.9942" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.94641 14.2046H2.36768" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_31_188">
                    <rect width="18.9395" height="18.9395" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    return (
        <>
            <div className="inner-banner bg-gradient-to-r from-[#000000] via-[#304419] to-[#000000] py-17 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className='max-w-[1440px] mx-auto'>
                    {/* Show only if badge exists */}
                    {badge && (
                        <p className='flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular  w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl'>
                            {badgeSvg} {badge}
                        </p>
                    )}

                    {/* Show only if title exists */}
                    {title && <h2 className='text-3xl sm:text-4xl md:text-[55px] font-bold text-center py-3 md:py-5 leading-tight'>
                        {title.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={index === 1 ? 'text-[#B4FE5D]' : 'text-[#fff]'}>
                                {word}{index < title.split(' ').length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </h2>}

                    {/* Show only if description exists */}
                    {description && <p className='text-center text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl mx-auto'>{description}</p>}
                </div>
            </div>
        </>
    );
};

export default memo(Hero);