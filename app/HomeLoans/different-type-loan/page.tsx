import Hero from '@/app/inner-pages-component/Hero';
import { memo } from 'react';

const Page = () => {
  return (
    <>
        <Hero
            badge="What's easier to find?"
            title="A new home or the right loan?"
            description="There are hundreds of loan options out there. Different types, lenders and new products launching all the time. We’ll help you make sense of it all and guide you to a loan that actually suits your needs."
        />
    </>
  );
};

export default memo(Page);