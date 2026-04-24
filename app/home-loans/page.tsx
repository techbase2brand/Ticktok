import { memo } from 'react';
import dynamic from "next/dynamic";
import Hero from "../components/HomePageCom/Hero";
import TabsSection from '../inner-pages-component/TabsSection';
const NeedHomeLoan = dynamic(() => import("../components/HomeLoansCom/NeedHomeLoan"));
const WeDoHardWork = dynamic(() => import("../components/HomeLoansCom/WeDoHardWork"));
const SupportForEvery = dynamic(() => import("../components/HomeLoansCom/SupportForEvery"));

export const metadata = {
  title: "Home Loans Adelaide | Best Mortgage Rates",
  description:
    "Find the best home loan deals in Adelaide. TickTock Loans helps you compare rates, get approvals fast and secure your dream home.",
};


const Page = () => {
  return (
    <>
        <Hero
          videoUrl=""
          poster="/latest-home-loan.png" 
          getImage="/new-home-loan.png" 
          subheading="Buying a property " 
          heading="" 
          subheading2="is a time to be excited." 
          description="Don’t waste time searching for a home loan. As your mortgage broker, we’ll take care of it, doing the legwork to find the right loan that fits your needs." 
          badge="Find the right home loan" 
          checkEligibility="Get Started Today" 
          checkEligibilityUrl="/Contact"
          applyUrl="/Contact"
          apply=""
          overlaycolor=""
        />
        <TabsSection />
        <WeDoHardWork 
          image="/new-we-do-hard-work-loan.png"
          title="We do Hard work"
          description="We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans and quickly narrow them down to the ones that suit your needs. Then we choose together."
          subtitle="And we help with the whole process."
          description2="We don’t stop at just finding the right loan. We help with the whole process. That includes completing the paperwork, managing the application, and following it through to approval. You’ll have clear guidance and support every step of the way, so things feel straightforward and under control."
          whyUseBtn=""
          badeTitle=""
          whyUseBtnUrl=""
        />
        <SupportForEvery
          title= "What types of finance can Lending Boys SA help you with?"
          badge="Support for every stage of your property journey"
        />
        <NeedHomeLoan 
          image= "/need-homne-loan.png"
          heading ="Need a Home Loan?"
          description="Whatever your circumstances, we will find the deal that’s right for you. 'Send through a quick enquiry and we will be in touch."
          buttonText="Speak to us today"
          buttonTextUrl="/Contact"
        />
       
    </>
  );
};

export default memo(Page);