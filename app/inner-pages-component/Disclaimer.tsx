import { memo } from 'react';

const Disclaimer = ({ disclaimerTitle, description }) => {

  const disclaimerIcon = (
    <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.97612 12.8261C1.78946 12.8267 1.60644 12.7744 1.44834 12.6751C1.29023 12.5759 1.16353 12.4338 1.08296 12.2654C1.00238 12.097 0.971239 11.9093 0.993144 11.7239C1.01505 11.5385 1.0891 11.3631 1.20671 11.2182L10.9724 1.15659C11.0456 1.07203 11.1454 1.0149 11.2555 0.994552C11.3655 0.974208 11.4791 0.991869 11.5778 1.04463C11.6764 1.0974 11.7542 1.18214 11.7983 1.28493C11.8425 1.38773 11.8504 1.50248 11.8207 1.61035L9.92675 7.54866C9.8709 7.69813 9.85215 7.85891 9.87209 8.01722C9.89204 8.17553 9.95009 8.32664 10.0413 8.45758C10.1324 8.58853 10.254 8.6954 10.3956 8.76903C10.5371 8.84266 10.6944 8.88086 10.854 8.88034H17.759C17.9457 8.8797 18.1287 8.93205 18.2868 9.03129C18.4449 9.13053 18.5716 9.27259 18.6522 9.44097C18.7327 9.60935 18.7639 9.79714 18.742 9.98252C18.7201 10.1679 18.646 10.3433 18.5284 10.4882L8.76276 20.5498C8.68951 20.6344 8.58968 20.6915 8.47968 20.7118C8.36967 20.7322 8.25601 20.7145 8.15736 20.6618C8.05871 20.609 7.98093 20.5243 7.93679 20.4215C7.89265 20.3187 7.88476 20.2039 7.91443 20.0961L9.80838 14.1577C9.86423 14.0083 9.88298 13.8475 9.86304 13.6892C9.84309 13.5309 9.78504 13.3798 9.69386 13.2488C9.60269 13.1179 9.48111 13.011 9.33955 12.9374C9.198 12.8637 9.04069 12.8255 8.88113 12.8261H1.97612Z" stroke="#B5FF5F" strokeWidth="1.97286" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  if (!disclaimerTitle && !description) return null;

  return (
    <div className='bg-gradient-to-r from-[#000000] via-[#0b110c] to-[#0b110c] pt-10 md:pt-[60px] px-4 sm:px-6 lg:px-8'>
      <div className="max-w-[1440px] mx-auto">

        {disclaimerTitle && (
          <h2 className='flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#111806] text-xs sm:text-sm font-regular w-fit border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl'>
            {disclaimerIcon}
            {disclaimerTitle}
          </h2>
        )}

        {description && (
          <p className='text-[16px] md:text-[20px] text-[#a2a9a3] italic pt-[15px]'>
            {description}
          </p>
        )}

      </div>
    </div>
  );
};

export default memo(Disclaimer);