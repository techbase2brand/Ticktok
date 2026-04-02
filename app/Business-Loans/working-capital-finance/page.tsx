import Banner from '@/app/inner-pages-component/banner';
import Disclaimer from '@/app/inner-pages-component/Disclaimer';
import DownloadGuids from '@/app/inner-pages-component/DownloadGuids';
import InnerNeedHomeLoan from '@/app/inner-pages-component/InnerNeedHomeLoan';
import { memo } from 'react';

const Page = () => {
  return (
    <div>
      <Banner
          badgeTitle="Download our free guide"
          title="Working Capital Finance"
          description="Working Capital Finance is a business loan that can help you take care of your immediate and day to day costs. Like the name suggests, having this type of financing means you have the capital to cover vital operating costs like paying suppliers, covering wages, or adding inventory to make the most of busier business periods.Importantly, it also means you can have funds at hand when you need them to create growth and make the most of any opportunities when they happen."
          imageUrl="/working-capital-finance.webp"
      />
      <DownloadGuids 
        title="Using working capital to grow and transform your business"
        description="Working capital is the money your business has in its pocket."
        buttonLable="Download the guide"
        buttonUrl="https://marketingcdn.afgonline.com.au/website-assets/Smartonline/Your%20Guide%20to%20Working%20Capital.pdf"
        image="/download-guide.webp"
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