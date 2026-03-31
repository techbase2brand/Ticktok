import WeDoHardWork from '@/app/components/HomeLoansCom/WeDoHardWork';
import Banner from '@/app/inner-pages-component/banner';
import InnerNeedHomeLoan from '@/app/inner-pages-component/InnerNeedHomeLoan';
import { memo } from 'react';

const Page = () => {
  return (
    <div>
        <Banner
            badgeTitle="Grow your business"
            title="Term Loans"
            description="Terms loans are commonly used to buy commercial real estate or to buy an existing business or franchise."
            imageUrl="/term-loan.webp"
        />
       <WeDoHardWork
          flexReverse={false}
          badeTitle=""
          image= "/term-loan-work.webp"
          title=""
          description="If you’re familiar with home loans, you’ll understand the principles of how a term loan works. Generally speaking, this type of loan can be used for two purposes – business or property."
          subtitle=""
          description2="Business purposes includes buying a trading business or franchise, a new business start-up or the expansion of an existing business. The types of commercial property purchased encompass a very broad spectrum. The types of real estate include established, vacant or to be developed land; owner occupied or investment; and zoned from retail, industrial, office, warehouse, and factory units, to specialised property such as aged care facilities, or hotels and taverns."
          whyUseBtn=""
        />
        <InnerNeedHomeLoan
          heading ="We are here to help."
          description="Let me help you make sense of business lending and find a finance option that’s right for your business objectives."
          buttonText="Speak to us today"
          buttonTextUrl="/Contact"
        />
    </div>
  );
};

export default memo(Page);