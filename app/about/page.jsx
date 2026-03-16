import { memo } from 'react';
import dynamic from "next/dynamic";
import Hero from '../components/HomePageCom/Hero';
const WeDoHardWork = dynamic(() => import('../components/HomeLoansCom/WeDoHardWork'));
const LightningFastApproval = dynamic(() => import('../components/HomePageCom/LightningFastApproval'));
const NeedHomeLoan = dynamic(() => import('../components/HomeLoansCom/NeedHomeLoan'));
const AboutSupport = dynamic(() => import('../components/AboutCom/AboutSupport'));

const Page = () => {
  return (
   <>
    <Hero 
      videoUrl=""
      poster="/about-banner.jpg" 
      getImage="/about-right.png" 
      subheading="" 
      heading="Who we are" 
      subheading2="At ticktock, our mission is to find the right loan for you." 
      description="We’ll guide you through the options, advocate at every step, and negotiate the right loan to fit your needs. From start to finish, we handle the details so you can focus on what matters most and enjoy a seamless journey to securing your loan." 
      badge="About ticktock" 
      checkEligibility="Booking a meeting" 
      apply=""
    />

    <WeDoHardWork 
      flexReverse={false}
      image= "/about-part.png"
      title="Why use a mortgage broker?"
      description="Whether you’re buying your first home, refinancing, or investing, finding the right loan can be challenging without the right support and expertise."
      subtitle=""
      description2="That’s where ticktock comes in. While banks offer a limited selection, mortgage brokers have access to a large network of Australia’s lenders, giving you choice beyond a single bank.We take the time to understand your needs and search through a wide range of loans to find your perfect fit. We’re by your side every step of the way, so you can feel confident we’re securing the right loan without the legwork."
      whyUseBtn="Why use a broker guide"
    />

    <AboutSupport 
    />

    <NeedHomeLoan 
      image= "/need-home-loan.png"
      heading ="Need a Home Loan?"
      description="Whatever your circumstances, we will find the deal that’s right for you. 'Send through a quick enquiry and we will be in touch."
      buttonText="Speak to us today"
    />


    <LightningFastApproval
      applyBtn="Apply Now" 
      subheading="Looking for the Right Loan?" 
      heading="Home. Business. Car." 
      badge="Lightning Fast Approval" 
      description="Get funded with the right loan solution tailored to your goals.  No confusion. No hidden charges. Just smart financing."
    />
   </>
  );
};

export default memo(Page);