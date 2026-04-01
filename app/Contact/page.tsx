"use client";

import { memo } from 'react';
import dynamic from "next/dynamic";
import Hero from "../components/HomePageCom/Hero";
import Contactform from '../components/Contactform/Contactform';

const Page = () => {
  return (
    <>
        <Hero
          videoUrl=""
          poster="/contact-banner.png" 
          getImage="/new-conatct-part.webp" 
          subheading="" 
          heading="Contact Us" 
          subheading2="" 
          description="To learn more about how Lending ticktock can help you find the right loan for your needs, fill out the form below and we’ll get in touch with you." 
          badge="Advice and Guidance" 
          checkEligibility="" 
          checkEligibilityUrl=""
          apply=""
          applyUrl="/Contact"
          overlaycolor="rgb(0 0 0 / 82%)"
        />
        <Contactform 
          title="Too busy to call? Send us a message instead."
          subheading="Please let us know what is on your mind. Have a question for us? Ask away."
          description="If you choose to provide your information, it will be used to offer or provide you with our services and/or the services of our associates. We may also ask you for feedback. We may not be able to assist you if you do not provide your information. We may need to disclose your information to other organisations providing services to us, that may be overseas. If you would prefer not to receive marketing material you can always unsubscribe. We include a simple unsubscribe feature on all electronic marketing materials that we send. Our Privacy Policy (which is available on this website) contains information about how you can access your personal information and request corrections or lodge a complaint. Information about who we are and how to contact us is available on this website."
        />
    </>
  );
};

export default memo(Page);