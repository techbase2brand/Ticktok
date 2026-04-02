import { memo } from 'react';
import Hero from '../../inner-pages-component/Hero';
import  NeedHomeLoan from '../../components/HomeLoansCom/NeedHomeLoan';
import  WeDoHardWork from '../../components/HomeLoansCom/WeDoHardWork'
import  Accordion from '../../inner-pages-component/Accordion'
import  DownloadGuids from '../../inner-pages-component/DownloadGuids'
const Page = () => {
    const AccordionData =[
        {   
            id:1, title:"How much money can I borrow?",
            content:"We’re all unique when it comes to our finances and borrowing needs. Contact us today, we can help with calculations based on your circumstances."
        },
        {
            id:2, title:"How do I choose a loan that’s right for me?",
            content:"Our guides to loan types and loan features will help you learn about the main options available. There are hundreds of different home loans available, so talk to us today."
        },
        {
            id:3, title:"How much do I need for a deposit?",
            content:"Usually between 5% – 10% of the value of a property. Speak with us to discuss your options for a deposit."
        },
        {
            id:4, title:"How much will regular repayments be?",
            content:"Use our Repayment Calculator to get a quick estimate. With so many loan options available, including some with lower introductory rates, it’s worth having a chat. Get in touch today and we’ll help you explore the latest deals and find a loan structure that suits your needs."
        },
        {
            id:5, title:"How often do I make home loan repayments — weekly, fortnightly or monthly?",
            content:"Most lenders offer flexible repayment options to suit your pay cycle. If you aim to make weekly or fortnightly repayments, instead of monthly, you will make more payments in a year, which can potentially shave dollars and time off your loan."
        },
        {
            id:6, title:"What is the First Home Owner Grant  and can I get one?",
            content:"This is a grant available to Australian citizens or permanent residents who wish to buy or build their first home, which will be their principal place of residence within 12 months of settlement. Contact us directly to find out more about eligibility requirements in your state and how much grant money you could receive."
        },
        {
            id:7, title:"What fees/costs should I budget for?",
            content:" There are a number of fees and costs involved when buying a property. To help avoid any surprises, the list below sets out many of the usual costs: Stamp duty — This is the big one. All other costs are relatively small by comparison. Stamp duty rates vary between state and territory governments and also depend on the value of the property you buy. You may also have to pay stamp duty on the mortgage itself. To estimate your possible stamp duty charge, visit our Stamp Duty Calculator. Legal/conveyancing fees — Generally around $1,000 – $1,500, these fees cover all the legal requirements around your property purchase, including title searches. Building inspection — This should be carried out by a qualified expert, such as a structural engineer, before you purchase the property. Your Contract of Sale should be subject to the building inspection, so if there are any structural problems you have the option to withdraw from the purchase without any significant financial penalties. A building inspection and report can cost up to $1,000, depending on the size of the property. Your conveyancer will usually arrange this inspection, and you will usually pay for it as part of their total invoice at settlement (in addition to the conveyancing fees). Pest inspection — Also to be carried out before purchase to ensure the property is free of problems, such as white ants. Your Contract of Sale should be subject to the pest inspection, so if any unwanted crawlies are found you may have the option to withdraw from the purchase without any significant financial penalties. Allow up to $500 depending on the size of the property. Your real estate agent or conveyancer may arrange this inspection, and you will usually pay for it as part of their total invoice at settlement (in addition to the conveyancing fees). Lender costs — Most lenders charge establishment fees to help cover the costs of their own valuation as well as administration fees. We will let you know what your lender charges but allow about $600 to $800. Moving costs — Don’t forget to factor in the cost of a removalist if you plan on using one. Mortgage Insurance costs — If you borrow more than 80% of the purchase price of the property, you’ll also need to pay Lender Mortgage Insurance. You may also consider whether to take out Mortgage Protection Insurance.Ongoing costs — If you buy a strata title, regular strata fees are payable. You will need to include council and water rates along with regular loan repayments. It is important to also consider building insurance and contents insurance. Your lender will probably require a minimum sum insured for the building to cover the loan."
        }
    ] 
  return (
    <>
        <Hero 
            badge="Get started"
            title="Becoming a first home buyer"
            description="Buying your first home is an exciting, but big step to take and one that comes with many questions and decisions. The first big question is how much you can borrow and what your likely repayments will be."
        />
        <DownloadGuids 
            title="Download our guide to "
            description="Feeling lost in the maze of home buying? Take the first step towards your dream home by downloading our guide. Get essential knowledge and discover how a broker can assist you on this exciting journey."
            buttonLable="Download the guide"
            buttonUrl="/"
            image="/download-guide.webp"
        />
        <WeDoHardWork 
            flexReverse={true}
            image= "/here-to-help.webp"
            title="How we can help"
            description="We’ll do the legwork for you. We can compare home loans across a variety of products available from Australia’s leading lenders."
            subtitle=""
            badeTitle=""
            description2="And because you’re a first home buyer, you may be eligible for a first home buyer grant. The grant is for Australian citizens or permanent residents buying or building their first home, to be their primary residence within 12 months of settlement. Contact us to learn about eligibility and grant amounts in your state. We’ll communicate with the lender, allowing you to focus on finding your dream home. With us by your side, we’ll guide you through the entire home loan process, from application to approval."
            whyUseBtn=""
            whyUseBtnUrl=""
        />
        <Accordion
            mainheading='A general first home buyer FAQ guide'
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