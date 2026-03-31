import Banner from '@/app/inner-pages-component/banner';
import { memo } from 'react';

const Page = () => {
  return (
    <div>
        <Banner
            badgeTitle="Asset and Equipment Finance"
            title="Asset and Equipment Finance"
            description="It’s a common question for small business owners; how do you get your hands on the equipment you need to grow, while still keeping the all important cash flow and working capital at healthy levels?"
            imageUrl="/asset-&-equipment-finance.webp"
        />
    </div>
  );
};

export default memo(Page);