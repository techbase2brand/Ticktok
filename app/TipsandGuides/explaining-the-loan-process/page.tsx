import Banner from '@/app/inner-pages-component/banner';
import InnerNeedHomeLoan from '@/app/inner-pages-component/InnerNeedHomeLoan';
import MeetingYourBroker from '@/app/inner-pages-component/MeetingYourBroker';
import WhatNeedSteps from '@/app/inner-pages-component/WhatNeedSteps';
import WhatYouNeedBread from '@/app/inner-pages-component/WhatYouNeedBread';
import { title } from 'process';
import { memo } from 'react';

const Page = () => {
    const StepsData = [
        {
            id:1, badge:"Step 1", title:"Arrange a pre approved loan", content:"If you haven’t started your property search or are still looking, a pre-approved loan can be useful. It gives you a clear picture of what your spending limits are and gives you peace of mind that if you find a property you’re really interested in you can move quickly to make an offer."
        },
        {
            id:2, badge:"Step 2", title:"Find your property", content:"Make sure you do plenty of homework when you’re on the hunt for a new property. Research property prices in the area, potential capital growth and existing and planned infrastructure, such as roads, public transport, schools and shops. If you’re unfamiliar with property values in the area, consider a full valuation carried out by a registered valuer before making a final decision."
        },
        {
            id:3, badge:"Step 3", title:"Appoint a conveyancer", content:"You will need a conveyancer, solicitor or settlement agent to act for you to complete the sale. They’ll be able to: Check all rates and taxes have been paid, Check land use or building approvals for the property Order any relevant searches They may also help sort out any inspections. On settlement day, the conveyancer will check the correct amount of money has been transferred from your lender to the seller and all fees – such as Stamp Duty – are paid, so you can take legal ownership of the property."
        },
        {
            id:4, badge:"Step 4", title:"Make an offer and sign a Contract of Sale", content:"When purchasing property, whether at auction or through an offer, you’ll sign a Contract of Sale outlining the price and terms. This could include conditions like lender approval, building, and pest inspections. The settlement period, typically six weeks (shorter in some states like Queensland, finalises ownership. Note: Even with a pre-approved loan, your lender requires a property valuation before granting full approval; unsatisfactory valuations may affect loan approval."
        },
        {
            id:5, badge:"Step 5", title:"Pay a deposit", content:"A deposit is required once a Contract of Sale has been signed by both parties. You won’t yet have access to your home loan, so your deposit will need to come from savings or elsewhere. You may also be able to arrange a deposit bond until settlement."
        },
        {
            id:6, badge:"Step 6", title:"Cooling off period", content:"If you didn’t buy your property at auction, you may have a cooling-off period when you can cancel the contract, although there may be a small penalty. Cooling-off periods don’t necessarily apply in every state, so check with your relevant state authority to find out what your rights may be."
        },
        {
            id:7, badge:"Step 7", title:"Unconditional contracts", content:"Be very cautious about signing an unconditional contract or bidding at an auction especially if you’re not certain about whether you’ll be able to obtain finance or about buying the home. You should also consider obtaining legal advice before signing a sale contract or bidding at an auction."
        }
    ]
  return (
    <>
        <Banner 
            badgeTitle="Download our free guide"
            title="Got some questions about the loan process?"
            description="Sometimes the best way to get an understanding of home loans, how it all works and how to choose the right one, is to speak to a broker in person."
            imageUrl="/got-some-question.webp"
        />
        <MeetingYourBroker
            badgeTitle=""
            title="Understanding your needs"
            description="When you sit down with us, it’s your opportunity to share your needs and financial goals. Ask questions about loans, applications, approvals, and what follows.We’ll meet you at your preferred time and location – home, office, or café, during the day, night, or weekend."
            buttonText=""
            buttonLink=""
            imageUrl="/understanding-your.webp"
        />
        <WhatYouNeedBread 
            title="What do you need finance for?"
        />
        <WhatNeedSteps
            items={StepsData}
        />
        <InnerNeedHomeLoan
            heading ="Need a home loan?"
            description="Whatever your circumstances, we will find the deal that’s right for you. Send through a quick enquiry and we will be in touch."
            buttonText="Speak to us today"
            buttonTextUrl="/Contact"
        />
    </>
  );
};

export default memo(Page);