import { memo } from 'react';
import Hero from '../../inner-pages-component/Hero';
import  NeedHomeLoan from '../../components/HomeLoansCom/NeedHomeLoan';
import  WeDoHardWork from '../../components/HomeLoansCom/WeDoHardWork'
import  Accordion from '../../inner-pages-component/Accordion'
import  DownloadGuids from '../../inner-pages-component/DownloadGuids'
const Page = () => {
    const AccordionData =[
        {   
            id:1, title:"How much money can I borrow?",
            content:"We’re all unique when it comes to our finances and borrowing needs. Contact us today, we can help with calculations based on your circumstances."
        },
        {
            id:2, title:"How do I choose a loan that’s right for me?",
            content:"Choosing the right loan depends on your needs, budget, and repayment ability. Compare interest rates, check loan terms, and make sure the monthly payments fit comfortably within your finances. We can help you find the best option based on your situation."
        },
        {
            id:3, title:"How much do I need for a deposit?",
            content:"The amount you need for a deposit depends on the type of loan and lender requirements. Typically, a higher deposit can help you secure better interest rates and lower monthly payments. Get in touch with us to understand what works best for your situation."
        },
        {
            id:4, title:"How much will regular repayments be?",
            content:"Your monthly repayments depend on the loan amount, interest rate, and repayment term. We can help calculate your estimated payments so you know what fits comfortably in your budget."
        },
        {
            id:5, title:"How often do I make home loan repayments — weekly, fortnightly or monthly?",
            content:"Most lenders offer flexible repayment options including weekly, fortnightly, or monthly schedules. Choose the one that best suits your cash flow and helps you manage repayments comfortably."
        },
        {
            id:6, title:"What is the First Home Owner Grant  and can I get one?",
            content:"The First Home Owner Grant is a government incentive to help first-time buyers with their purchase. Eligibility depends on your location and property type. We can guide you through the criteria and application process."
        }
    ] 
  return (
    <>
        <Hero 
            badge="Get started"
            title="Becoming a first home buyer"
            description="Buying your first home is an exciting, but big step to take and one that comes with many questions and decisions. The first big question is how much you can borrow and what your likely repayments will be."
        />
        <DownloadGuids 
            title="Download our guide to "
            description="Feeling lost in the maze of home buying? Take the first step towards your dream home by downloading our guide. Get essential knowledge and discover how a broker can assist you on this exciting journey."
            buttonLable="Download the guide"
            buttonUrl="/"
            image="/download-guide.webp"
        />
        <WeDoHardWork 
            flexReverse={true}
            image= "/here-to-help.webp"
            title="How we can help"
            description="We’ll do the legwork for you. We can compare home loans across a variety of products available from Australia’s leading lenders."
            subtitle=""
            description2="And because you’re a first home buyer, you may be eligible for a first home buyer grant. The grant is for Australian citizens or permanent residents buying or building their first home, to be their primary residence within 12 months of settlement. Contact us to learn about eligibility and grant amounts in your state. We’ll communicate with the lender, allowing you to focus on finding your dream home. With us by your side, we’ll guide you through the entire home loan process, from application to approval."
            whyUseBtn=""
        />
        <Accordion
            mainheading='A general first home buyer FAQ guide'
            items={AccordionData}
        />
         <NeedHomeLoan 
              image= "/living-room.webp"
              heading ="Need a Home Loan?"
              description="Whatever your circumstances, we will find the deal that’s right for you. 'Send through a quick enquiry and we will be in touch."
              buttonText="Speak to us today"
              buttonTextUrl="/Contact"
        />
    </>
  );
};

export default memo(Page);