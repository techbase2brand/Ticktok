import WeDoHardWork from '@/app/components/HomeLoansCom/WeDoHardWork';
import Banner from '@/app/inner-pages-component/banner';
import Disclaimer from '@/app/inner-pages-component/Disclaimer';
import InnerNeedHomeLoan from '@/app/inner-pages-component/InnerNeedHomeLoan';
import { memo } from 'react';

const Page = () => {
  return (
    <div>
      <Banner
            badgeTitle="fuel your business growth"
            title="Unsecured Business Loans"
            description="A faster way to access finance for everyday expenses."
            imageUrl="/unsecured-business-loans.webp"
        />
         <WeDoHardWork
            flexReverse={false}
            image= "/what- involved.webp"
            title="What’s  involved?"
            description="Unsecured business loans are a relatively new option for businesses that need to get access to some extra funds. The obvious benefit of this type of finance is the speed in which access is granted to the finance, with a simplified application process. This may allow you to quickly take care of cash flow, cover urgent expenses, or make the most of an opportunity."
            subtitle=""
            description2="In recent years, a number of agile, financial technology  fintech lenders have entered the finance market in Australia. These more non-traditional lenders can turn around approvals and deposit cash into your account in as little as twenty four hours. Because they are unsecured the application is simpler and the loan amounts are often smaller – usually anywhere from dollar5,000 to dollar250,000. It also means there is greater risk to the lender so the interest rates may be relatively higher and the loan terms a lot shorter, with principal and interest repayments generally on a weekly basis but sometimes even daily."
            whyUseBtn=""
            badeTitle=""
        />
        <InnerNeedHomeLoan
            heading ="We are here to help."
            description="Let me help you make sense of business lending and find a finance option that’s right for your business objectives."
            buttonText="Speak to us today"
            buttonTextUrl="/Contact"
        />
      <Disclaimer
        disclaimerTitle="DISCLAIMER"
        description="Please note we do not provide tax, legal or accounting advice. Any information provided is of a general nature only and does not take into account the objectives, financial situation or needs of any particular person and is not intended to provide, and should not be relied on for, tax, legal or accounting advice. You should consult your own tax, legal and accounting advisors before engaging in or considering the appropriateness of any transaction. "
      />
    </div>
  );
};

export default memo(Page);