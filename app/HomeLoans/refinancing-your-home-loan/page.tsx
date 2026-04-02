import NeedHomeLoan from '@/app/components/HomeLoansCom/NeedHomeLoan';
import WeDoHardWork from '@/app/components/HomeLoansCom/WeDoHardWork';
import Accordion from '@/app/inner-pages-component/Accordion';
import DownloadGuids from '@/app/inner-pages-component/DownloadGuids';
import Hero from '@/app/inner-pages-component/Hero';
import { memo } from 'react';

const Page = () => {
    const AccordionData =[
        {   
            id:1, title:"Can I get a mortgage with lower repayments than what I'm paying now?",
            content:"It’s always worth checking to see if your current loan still suits your needs — and we’re a great place to start. Whether you can lower your repayments will depend on a few factors, including: The interest rate you’re currently paying. The type of loan you have (such as fixed, variable, interest-only, or line of credit). The features you want in your loan going forward. We can quickly review your situation and explain your options, helping you decide if refinancing or switching loans could save you money."
        },
        {
            id:2, title:"Can I consolidate all my debts into a home loan?",
            content:"This is one of the reasons some people refinance. The advantage is that you pay a much lower interest rate on a mortgage than for most other forms of debt – e.g. credit cards, overdraft facilities, personal loans etc. Providing you have sufficient equity in your property, you may be able to consolidate all your debt on a home loan. If you take this option though it is important to make sure you maintain your repayments of the debt that you consolidate at their current level, or you could easily end up paying more over a longer period of time. Speak with us today to discuss your personal needs."
        },
        {
            id:3, title:"How much money can I borrow?",
            content:"We’re all unique when it comes to our finances and borrowing needs. Get an estimate on how much you may be able to borrow (subject to satisfying legal and lender requirements) with our Borrowing Power Calculator. Chat to us when you’re ready, we can help with calculations based on your circumstances."
        },
        {
            id:4, title:"How do I choose a loan that’s right for me?",
            content:"Our guides to loan types and loan features will help you learn about the main options available. There are hundreds of different home loans available so talk to us today."
        },
        {
            id:5, title:"How often do I make home loan repayments — weekly, fortnightly or monthly?",
            content:"Most lenders offer flexible repayment options to suit your pay cycle. If you aim for weekly or fortnightly repayments, instead of monthly, you will make more payments in a year, which could potentially shave dollars and time off your loan."
        },
        {
            id:6, title:"What fees/costs are involved in switching mortgages?",
            content:"Depending on your loan, penalty fees could apply if you’re paying off your current mortgage early. But these may be offset by repayment savings when you switch home loans. We’ll walk you through any fees that could apply in your circumstances, or use our Mortgage Switching Calculator to get an estimate."
        }
    ]
  return (
    <>
        <Hero
            badge="Refinancing your home loan"
            title="We help you make sense of your choices"
            description="A shift in circumstances may mean it is time to revisit your home finances. For many, the idea of refinancing a mortgage can be daunting. Fees and fixed versus variable interest rates need to be considered."
        />
        <DownloadGuids
            title="Download our guide to refinancing your home loan"
            description="As time goes on, your situations and needs change. Have you started a new job? Welcomed a new family member? Perhaps you’re looking for a better interest rate or finally ready to kick off that renovation project. Whatever the reason, it’s the perfect time to review your options."
            buttonLable="Download the guide"
            buttonUrl="https://marketingcdn.afgonline.com.au/website-assets/Smartonline/Your%20Guide%20to%20Working%20Capital.pdf"
            image="/download-guide.webp"
        />
        <WeDoHardWork
            flexReverse={true}
            image= "/changing-circumstances.webp"
            title="Changing circumstances may mean it is time to revisit your home finances"
            description="Refinancing a mortgage can feel overwhelming for many people. This is where our expertise comes in. We can clarify the nuances of fees and the choice between fixed and variable interest rates. Opting for the right refinanced loan could pave the way to quicker mortgage repayment, reduced costs, elimination of unhealthy debt, or the enhancement and increased value of your home, all of which are steps in the right direction."
            subtitle=""
            description2=""
            whyUseBtn=""
            badeTitle=""
        />
        <Accordion
            mainheading='Common questions for those thinking of refinancing'
            items={AccordionData}
        />
        <NeedHomeLoan 
            image= "/living-room.webp"
            heading ="Need a Home Loan?"
            description="Whatever your circumstances, we will find the deal that’s right for you. 'Send through a quick enquiry and we will be in touch."
            buttonText="Speak to us today"
            buttonTextUrl="/Contact"
        />
    </>
  );
};

export default memo(Page);