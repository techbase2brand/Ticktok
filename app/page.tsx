import Hero from "./components/HomePageCom/Hero"
import WhyTiktock from "./components/HomePageCom/WhyTiktock";
import HowItWork from "./components/HomePageCom/HowItWork";
import FinaceYourDream from "./components/HomePageCom/FinaceYourDream";
import LightningFastApproval from "./components/HomePageCom/LightningFastApproval";
import LovedbyThousands from "./components/HomePageCom/LovedbyThousands";
export default function Home() {
  return (
   <>
    <Hero subheading="Money in" heading="Minutes" description="Fast. Secure. Instant Loans." badge="Instant Loan Approval" checkEligibility="Check Eligibility" apply="Apply Now"/>
    <WhyTiktock title="Why TickTock?"  description="Everything you need, nothing you don't"/>
    <HowItWork title="How It Works" description="Get funded in 3 simple steps" applicationBtn="Start Your Application" />
    <FinaceYourDream title="Finance Your Dreams with the Right Loan" getStartBtn="Get Started Today" />
    <LovedbyThousands title="Loved by Thousands" description="See what our customers say"/>
    <LightningFastApproval applyBtn="Apply Now" subheading="Looking for the Right Loan?" heading="Home. Business. Car." badge="Lightning Fast Approval" description="Get funded with the right loan solution tailored to your goals.  No confusion. No hidden charges. Just smart financing."/>
   </>
  );
}