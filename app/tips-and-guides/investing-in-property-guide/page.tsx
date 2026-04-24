"use client";
import { memo } from 'react';
import dynamic from "next/dynamic";
// Dynamic imports with SSR enabled (SEO friendly)
const Banner = dynamic(() => import('@/app/inner-pages-component/banner'));
const HumanverificationForm = dynamic(() => import('@/app/inner-pages-component/HumanverificationForm'));


const Page = () => {
  return (
    <>
      <Banner 
        badgeTitle="Download our free guide"
        title="Looking to invest in property?"
        description="Enter your details to receive a straightforward guide that outlines how a broker can assist you on your path to successful property investment."
        imageUrl="/looking-toinvest.png"
        />

        <HumanverificationForm
          description="If you choose to provide your information, it will be used to offer or provide you with our services and/or the services of our associates. We may also ask you for feedback. We may not be able to assist you if you do not provide your information. We may need to disclose your information to other organisations providing services to us, that may be overseas. If you would prefer not to receive marketing material you can always unsubscribe. We include a simple unsubscribe feature on all electronic marketing materials that we send. Our Privacy Policy (which is available on this website) contains information about how you can access your personal information and request corrections or lodge a complaint. Information about who we are and how to contact us is available on this website."
        />
    </>

  );
};

export default memo(Page);