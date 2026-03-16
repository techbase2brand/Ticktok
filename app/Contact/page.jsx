"use client";

import { memo } from 'react';
import dynamic from "next/dynamic";
import Hero from "../components/HomePageCom/Hero";
const LightningFastApproval = dynamic(() => import("../components/HomePageCom/LightningFastApproval"));
const NeedHomeLoan = dynamic(() => import("../components/HomeLoansCom/NeedHomeLoan"));
const Page = () => {
  return (
    <>
        <Hero
          videoUrl=""
          poster="/contact-banner.png" 
          getImage="/conatct-part.png" 
          subheading="" 
          heading="Contact Us" 
          subheading2="" 
          description="To learn more about how Lending ticktock can help you find the right loan for your needs, fill out the form below and we’ll get in touch with you." 
          badge="Advice and Guidance" 
          checkEligibility="" 
          checkEligibilityUrl=""
          apply=""
          applyUrl="/Contact"
        />
       
        <NeedHomeLoan 
          image= "/living-room.webp"
          heading ="Need a Home Loan?"
          description="Whatever your circumstances, we will find the deal that’s right for you. 'Send through a quick enquiry and we will be in touch."
          buttonText="Speak to us today"
          buttonTextUrl="/Contact"
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