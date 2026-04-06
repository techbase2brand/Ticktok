import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/HomePageCom/Hero"));
const WhyTiktock = dynamic(() => import("./components/HomePageCom/WhyTiktock"));
const HowItWork = dynamic(() => import("./components/HomePageCom/HowItWork"));
const FinaceYourDream = dynamic(() => import("./components/HomePageCom/FinaceYourDream"));

const LovedbyThousands = dynamic(() => import("./components/HomePageCom/LovedbyThousands"));
export default function Home() {
  return (
   <>
    <Hero 
     videoUrl="/0_Couple_Home_1920x1010.mp4"
      poster="/banner.webp" 
      getImage="" 
      subheading="Mortgage Broker in" 
      heading="Adelaide" 
      subheading2="" 
      description="Trusted and loved by Aussies!!" 
      badge="Award Winning !!" 
      checkEligibility="Contact Us" 
      checkEligibilityUrl="/Contact"
      apply="Speak  To Us"
      applyUrl="/Contact"
      overlaycolor="rgb(0 0 0 / 41%)"
    />
    <WhyTiktock 
      title="Why TickTock?"  
      description=""
      descriiption2="At TickTock Loans, we believe getting the right home loan shouldn't be complicated, stressful, or time consuming. We do the hard work so you don't have to."/>
    {/* <HowItWork 
      title="How It Works" 
      description="Get funded in 3 simple steps" 
      applicationBtn="Contact Us" 
    /> */}
    <FinaceYourDream 
      title="Finance Your Dreams with the Right Loan" 
      getStartBtn="Get Started Today"
    />
    <LovedbyThousands 
      title="Loved by Thousands" 
      description="See what our customers say"
    />
    
   </>
  );
}