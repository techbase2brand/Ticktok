import { memo } from 'react';
import Banner from '@/app/inner-pages-component/banner';
import MeetingYourBroker from '@/app/inner-pages-component/MeetingYourBroker';

const Page = () => {
  return (
    <>
        <Banner 
            badgeTitle="Checklist of loan documents"
            title="Get organised with our suggested document checklist"
            description="Lenders typically require similar documents when assessing loan applications. Having these ready can streamline the process and help you get approved faster."
            imageUrl="/checklist-ofloan.webp"
        />
        <MeetingYourBroker 
            flexReverse={true}
            badgeTitle="meeting your broker"
            title="What documents should I bring?"
            description="To keep the process moving forward, bring the documents listed below to your meeting with your broker. This is a general checklist – some may not apply to you and we can help you figure out which ones you need."
            buttonText="Chat with us today"
            buttonLink="/contact-us"
            imageUrl="/what-document-shuold.webp"
        />
    </>
  );
};

export default memo(Page);