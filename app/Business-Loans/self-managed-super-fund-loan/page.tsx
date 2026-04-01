import WeDoHardWork from '@/app/components/HomeLoansCom/WeDoHardWork';
import Banner from '@/app/inner-pages-component/banner';
import Disclaimer from '@/app/inner-pages-component/Disclaimer';
import InnerNeedHomeLoan from '@/app/inner-pages-component/InnerNeedHomeLoan';
import { memo } from 'react';

const Page = () => {
  return (
    <div>
      <Banner
        badgeTitle="Invest in commercial property"
        title="Self Managed Super Fund Loan"
        description="Have you considered using the funds in your Self Managed Super Fund  SMSF  to invest in property?"
        imageUrl="/self-managed-super-fund-loan.webp"
      />
      <WeDoHardWork
        flexReverse={false}
        badeTitle="TIPS and TRICKS"
        image= "/how-dose-it-work.webp"
        title="How does it work?"
        description="The savings you’ve built up in your Superannuation Fund can be used to purchase property. Using your SMSF funds as a deposit, some lenders will approve loans starting at just dollar 100,000 to purchase property, and the income generated from the rental can help meet your repayments."
        subtitle=""
        description2="With commercial property, it may be possible for your SMSF to purchase a property that will be occupied by your business, as long as the rent is at market rates. Essentially this type of finance is a Term Loan with features such as flexible terms up to 30 years, the choice of principal and interest or interest only repayment, and the options of fixed or variable rates, or a combination of both. There are many rules and regulations governing your SMSF so it’s important you get the advice of a financial professional, like your accountant or financial planner to assist you to make the right choices."
        whyUseBtn=""
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