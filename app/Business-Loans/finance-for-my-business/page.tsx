import Banner from '@/app/inner-pages-component/banner';
import InnerNeedHomeLoan from '@/app/inner-pages-component/InnerNeedHomeLoan';
import { memo } from 'react';

const Page = () => {
  return (
    <div>
        <Banner
            badgeTitle="Fuel your business growth"
            title="Finance for my business"
            description="Before you start to decide on finance products and options, it’s a great idea to pin down exactly why you need finance and what type of business you are. This helps you to create clear objectives that can help paint a clear picture to lenders about why finance for your business makes sense."
            imageUrl="/finance-for-my-business.webp"
        />
        <InnerNeedHomeLoan
            heading ="Let’s talk business."
            description="Whatever your finance need or business type, we’re here to talk you through the options.Let’s help move your business towards your goals."
            buttonText="Speak to us today"
            buttonTextUrl="/Contact"
        />
    </div>
  );
};

export default memo(Page);