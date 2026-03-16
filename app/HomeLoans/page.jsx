"use client";

import { memo } from 'react';
import dynamic from "next/dynamic";
import Hero from "../components/HomePageCom/Hero";
const LightningFastApproval = dynamic(() => import("../components/HomePageCom/LightningFastApproval"));
const NeedHomeLoan = dynamic(() => import("../components/HomeLoansCom/NeedHomeLoan"));
const WeDoHardWork = dynamic(() => import("../components/HomeLoansCom/WeDoHardWork"));
const SupportForEvery = dynamic(() => import("../components/HomeLoansCom/SupportForEvery"));
const Page = () => {
  return (
    <>
        <Hero
          videoUrl=""
          poster="/banner-loan.jpg" 
          getImage="/3d-house-model-with-modern-architecture 1.png" 
          subheading="Buying a" 
          heading="property " 
          subheading2="is a time to be excited." 
          description="Don’t waste time searching for a home loan. As your mortgage broker, we’ll take care of it, doing the legwork to find the right loan that fits your needs." 
          badge="Find the right home loan" 
          checkEligibility="Get Started Today" 
          apply=""
        />
        <WeDoHardWork 
          image="/homeloan-hard-work.png"
          title="We do Hard work"
          description="We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans and quickly narrow them down to the ones that suit your needs. Then we choose together."
          subtitle="And we help with the whole process."
          description2="We don’t stop at just finding the right loan. We help with the whole process. That includes completing the paperwork, managing the application, and following it through to approval. You’ll have clear guidance and support every step of the way, so things feel straightforward and under control."
          whyUseBtn=""
        />
        <SupportForEvery
          title= "What types of finance can Lending Boys SA help you with?"
          badge="Support for every stage of your property journey"
        />
        <NeedHomeLoan 
          image= "/living-room.png"
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