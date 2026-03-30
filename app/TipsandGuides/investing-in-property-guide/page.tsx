import Banner from '@/app/inner-pages-component/banner';
import { memo } from 'react';

const Page = () => {
  return (
    <Banner 
        badgeTitle="Download our free guide"
        title="Looking to invest in property?"
        description="Enter your details to receive a straightforward guide that outlines how a broker can assist you on your path to successful property investment."
        imageUrl="/looking-toinvest.webp"
    />
  );
};

export default memo(Page);