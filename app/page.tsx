import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/HomePageCom/Hero"));
const WhyTiktock = dynamic(() => import("./components/HomePageCom/WhyTiktock"));
const HowItWork = dynamic(() => import("./components/HomePageCom/HowItWork"));
const FinaceYourDream = dynamic(() => import("./components/HomePageCom/FinaceYourDream"));
const LightningFastApproval = dynamic(() => import("./components/HomePageCom/LightningFastApproval"));
const LovedbyThousands = dynamic(() => import("./components/HomePageCom/LovedbyThousands"));
export default function Home() {
  return (
   <>
    <Hero 
     videoUrl="/0_Couple_Home_1920x1010.mp4"
      poster="/banner.webp" 
      getImage="/loan-ammount.webp" 
      subheading="Money in" 
      heading="Minutes" 
      subheading2="" 
      description="Fast. Secure. Instant Loans." 
      badge="Instant Loan Approval" 
      checkEligibility="" 
      checkEligibilityUrl=""
      apply="Apply Now"
      applyUrl="/Contact"
      overlaycolor="rgb(0 0 0 / 41%)"
    />
    <WhyTiktock 
      title="Why TickTock?"  
      description="Everything you need, nothing you don't"
    />
    <HowItWork 
      title="How It Works" 
      description="Get funded in 3 simple steps" 
      applicationBtn="Start Your Application" 
    />
    <FinaceYourDream 
      title="Finance Your Dreams with the Right Loan" 
      getStartBtn="Get Started Today"
    />
    <LovedbyThousands 
      title="Loved by Thousands" 
      description="See what our customers say"
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
}