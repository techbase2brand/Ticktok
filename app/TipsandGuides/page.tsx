import { memo } from 'react';
import Hero from '../components/HomePageCom/Hero';
import dynamic from "next/dynamic";
const NeedHomeLoan = dynamic(() => import('../components/HomeLoansCom/NeedHomeLoan'));
const WeDoHardWork = dynamic(() => import('../components/HomeLoansCom/WeDoHardWork'));

const Page = () => {
  return (
    <>
      <Hero 
        videoUrl=""
        poster="/our-tip-banner.webp" 
        getImage="/custom-our-guide.webp" 
        subheading="" 
        heading="Our Guides" 
        subheading2="" 
        description="Our goal is to make the home loan journey easier for you. With our dedicated team and extensive resources, you can navigate the process with confidence and make informed decisions." 
        badge="Advice and Guidance" 
        checkEligibility="" 
        checkEligibilityUrl=""
        applyUrl="/Contact"
        apply=""
        overlaycolor="rgb(0 0 0 / 75%)"
      />

      <WeDoHardWork 
        flexReverse={false}
        image= "/new-look-buy.webp"
        title="Looking to buy your first home?"
        description="Buying your first home is exciting, but it can feel overwhelming. From saving a deposit to finding the right loan, we’re here to help guide you every step of the way."
        subtitle=""
        description2=""
        badeTitle=""
        whyUseBtn="Secure Your First Home"
         whyUseBtnUrl=""
      />

      <WeDoHardWork 
        flexReverse={true}
        image= "/new-use-broker.webp"
        title="Why use a broker?"
        description="Having the right people to help you is key when it comes to property finance. Although it always pays to do your homework on the property market before you dive in, when the time comes to finance your decision, we’ll be thrilled to help."
        subtitle=""
        description2=""
        badeTitle=""
        whyUseBtn="Get Trusted Advice"
         whyUseBtnUrl=""
      />

      <WeDoHardWork 
        flexReverse={false}
        badeTitle=""
        image= "/new-home-loan-still.webp"
        title="Is your home loan still right for you?"
        description="As time marches on, situations change. Have you started a new job? Welcomed a new family member? Perhaps you’re looking for a better interest rate or finally ready to kick off that renovation project. Whatever the reason, it’s the perfect time to review your options."
        subtitle=""
        description2=""
        whyUseBtn="Reassess Your Home Loan"
         whyUseBtnUrl=""
      />

      <WeDoHardWork 
        flexReverse={true}
        image= "/new-explore-option.webp"
        title="Looking to invest in property?"
        description="Whether you’re starting up, sustaining success, or wanting to make the most of new opportunities, the right finance can help fund what you’re looking for."
        subtitle=""
        description2=""
        badeTitle=""
        whyUseBtn="Explore Your Options"
         whyUseBtnUrl=""
      />


      <NeedHomeLoan 
        image= "/new-not-sure.webp"
        heading ="Not sure where to start?"
        description="Our team is here to help every step of the way."
        buttonText="Speak to us today"
        buttonTextUrl="/Contact"
      />
    </>
  );
};

export default memo(Page);