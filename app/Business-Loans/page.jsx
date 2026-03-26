import { memo } from 'react';
import dynamic from "next/dynamic";
import Hero from '../components/HomePageCom/Hero';
const LightningFastApproval = dynamic(() => import('../components/HomePageCom/LightningFastApproval'));
const NeedHomeLoan = dynamic(() => import('../components/HomeLoansCom/NeedHomeLoan'));
const WeDoHardWork = dynamic(() => import('../components/HomeLoansCom/WeDoHardWork'));

const Page = () => {
  return (
    <>
      <Hero 
        videoUrl=""
        poster="/business-loan-banner.jpg" 
        getImage="/business-loan-right.webp" 
        subheading="There are many different" 
        heading="types of loans" 
        subheading2="to choose from." 
        description="One of the biggest opportunities many small businesses struggle with is finding the right business finance to fuel their growth plans." 
        badge="Fuel your business growth" 
        checkEligibility="Discuss option today" 
        checkEligibilityUrl="/Contact"
        applyUrl="/Contact"
        apply=""
        overlaycolor="rgb(0 0 0 / 82%)"
      />

      <WeDoHardWork 
        flexReverse={false}
        image= "/find-the-right.webp"
        title="Find the right finance."
        description="Aligning the right loan to your needs, both short and long-term, isn’t easy. There are many different sorts of loans, with multiple products for each type offered by most lenders. It takes an experienced professional to navigate business finance, and that’s where we come in."
        subtitle=""
        description2="As a finance broker who offers business finance, my role is to ensure you have the right finance solution and that it works well for you, your business and what you’re looking to achieve long term. Brokers can bring choice and competition to the table and I take the pressure off, allowing you to do what you do best – growing your business."
        whyUseBtn=""
     />
      <WeDoHardWork 
        flexReverse={true}
        image= "/house-on-your.webp"
        title="Don’t bet your house on your business."
        description="Small business owners already put a lot on the line, often you don’t have to put your home on it too. Securing an overdraft or line-of-credit from your bank and using your home as security to finance your business is not the ideal scenario given the risk that this brings."
        subtitle=""
        description2="There’s a lot at risk here, and a lot of added pressure. You don’t want to be in a position where you have to consider refinancing or selling your home just because one of your biggest clients hasn’t paid their bill. Chances are it’s also not the right type of loan for what you need. A good example is the purchase of an asset like some machinery.With an overdraft you could be paying back the loan years after the machinery has long since been replaced and stopped generating any income."
       whyUseBtn=""
     />

      <NeedHomeLoan 
        image= "/image-serious-businessman-black-trendy-suit-looking-through-magnifying-glass-looking-emplo 1.webp"
        heading ="Looking for the right business finance?"
        description="Discover the ideal loan option to support your business growth and success. Explore our range of business finance solutions tailored to your specific needs."
        buttonText="Download the guide"
        buttonTextUrl=""
      />

      <LightningFastApproval
        applyBtn="Apply Now" 
        subheading="Looking for the Right Loan?" 
        heading="Home. Business. Car." 
        badge="Lightning Fast Approval" 
        description="Get funded with the right loan solution tailored to your goals. No confusion. No hidden charges. Just smart financing."
      />
    </>
  );
};

export default memo(Page);