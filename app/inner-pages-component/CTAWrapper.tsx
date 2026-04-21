"use client";

import { usePathname } from "next/navigation";
import LightningFastApproval from "../components/HomePageCom/LightningFastApproval";


export default function CTAWrapper() {
  const pathname = usePathname();

  return (
    <LightningFastApproval
      applyBtn="Apply Now"
      subheading="Looking for the Right Loan?"
      heading={pathname === "/" ? "Home. Business. Car." : ""}
      badge="Hassle-Free Loan Approval"
      description="Get funded with the right loan solution tailored to your goals. No confusion. No hidden charges. Just smart financing."
    />
  );
}