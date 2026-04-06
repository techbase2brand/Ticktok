"use client";

import { memo } from 'react';
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../components/HomePageCom/Hero"));
const Contactform = dynamic(() => import("../components/Contactform/Contactform"));


const Page = () => {
  return (
    <>
        <Hero
          videoUrl=""
          poster="/contact-banner.png" 
          getImage="" 
          subheading="" 
          heading="Contact Us" 
          subheading2="" 
          description="To learn more about how Lending ticktock can help you find the right loan for your needs, fill out the form below and we’ll get in touch with you." 
          badge="Advice and Guidance" 
          checkEligibility="" 
          checkEligibilityUrl=""
          apply=""
          applyUrl="/Contact"
          overlaycolor="rgb(0 0 0 / 69%)"
        />
        <Contactform 
          title="Too busy to call? Send us a message instead."
          subheading=""
          description=""
        />
    </>
  );
};

export default memo(Page);