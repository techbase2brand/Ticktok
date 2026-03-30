import Banner from '@/app/inner-pages-component/banner';
import { memo } from 'react';

const Page = () => {
  return (
    <Banner 
        badgeTitle="Download our free guide"
        title="Looking for the right business finance?"
        description="Simply tell us your name and email address to receive your guide on how a mortgage broker can help you."
        imageUrl="/business-finance.webp"
    />
  );
};

export default memo(Page);