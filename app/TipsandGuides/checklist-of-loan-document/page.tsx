import { memo } from 'react';
import Banner from '@/app/inner-pages-component/banner';
import MeetingYourBroker from '@/app/inner-pages-component/MeetingYourBroker';
import Accordion from '@/app/inner-pages-component/Accordion';
import InnerNeedHomeLoan from '@/app/inner-pages-component/InnerNeedHomeLoan';

const Page = () => {
  const AccordionData =[
        {   
            id:1, title:"Personal identification​",
            content:"A current Passport or Birth Certificate​. Drivers Licence – please note if these documents are in your maiden name, you will also need to provide a copy of your Marriage Certificate. Other documents that will be useful: Medicare card, Credit card, ATM/Debit card, Council Rates Notice, Pensioner Concession card, Health Care card, Tertiary Student ID card."
        },
        {
            id:2, title:"Additional documents for refinancing​",
            content:"Documentation on your existing loan including the date the loan commenced, loan period and any financial penalty payable if you exit the loan early. Statements for the last six months for any existing home loans and personal loans. The most recent Council Rates Notice and building insurance policy on the property or properties being offered as security. Credit cards:If you have credit card debt, statements for the last six months. If you don’t owe anything on your credit card, the most recent statement."
        },
        {
            id:3, title:"Income details",
            content:"Full time / part time: The two most recent payslips from your employer. Ideally these will show the company name, number of payslips and year-to-date income figure. The most recent Group Certificate from your employer. If self-employed: The last two year’s personal and business tax returns and ATO assessments. Other income details. You may also need: Rental income statements or bank accounts showing rental income for any investment properties. Proof of share dividends or interest earned. Centrelink letter confirming family tax benefits. Centrelink letter confirming permanent government pensions. Private pension group certificate or statement."
       },
        {
            id:4, title:"Additional documents if you already own a home​",
            content:"Statements for the last six months for any existing home loans or personal loans. Your most recent credit card statement. Copy of the Contract of Sale for the property you’re buying. Statements for the last six months to show your savings and investment history. This could include share certificates, savings account statements, and term deposit statements. Statements for the last six months to show your savings and investment history. This could include share certificates, savings account statements, and term deposit statements. If other funds are being used for the purchase, evidence showing where the funds are held  If other funds are being given to you, which are not already in your bank account, you will need a Statutory Declaration from the person giving you the money."
        },
        {
            id:5, title:"Additional documents for first home buyers",
            content:"If other funds are being used for the purchase, evidence showing where the funds are held. Statements for the last six months to show your savings and investment history. This could include share certificates, savings account statements, and term deposit statements. If other funds are being used for the purchase, evidence showing where the funds are held.  If other funds are being given to you, which are not already in your bank account, you will need a Statutory Declaration from the person giving you the money. Your most recent credit card statement. Copy of the Contract of Sale for the property being purchased."
        },
        {
            id:6, title:"Additional documents for investors​",
            content:"If you already have investment properties: Evidence of income such as rental statements. A copy of the tenancy lease A Council Rates Notice. A letter from a property manager indicating likely rent for the new property. Statements for the last six months to show your savings and investment history. This could include share certificates, savings account statements, and term deposit statements. If other funds are being used for the purchase, evidence showing where the funds are held. If other funds are being given to you, which are not already in your bank account, you will need a Statutory Declaration from the person giving you the money. Your most recent credit card statement. Copy of the Contract of Sale for the property being purchased."
        },
        {
            id:7, title:"Additional documents for construction loans​",
            content:"A copy of a valid fixed price tender from your builder, including all specifications. A copy of Council approved plans. Statements for the last six months to show your savings and investment history. This could include share certificates, savings account statements, and term deposit statements. If other funds are being used for the purchase, evidence showing where the funds are held. If other funds are being given to you, which are not already in your bank account, you will need a Statutory Declaration from the person giving you the money. Your most recent credit card statement. Copy of the Contract of Sale for the property being purchased."
        }
    ] 
  return (
    <>
        <Banner 
            badgeTitle="Checklist of loan documents"
            title="Get organised with our suggested document checklist"
            description="Lenders typically require similar documents when assessing loan applications. Having these ready can streamline the process and help you get approved faster."
            imageUrl="/checklist-ofloan.webp"
        />

        <MeetingYourBroker 
          flexReverse={true}
          badgeTitle="meeting your broker"
          title="What documents should I bring?"
          description="To keep the process moving forward, bring the documents listed below to your meeting with your broker. This is a general checklist – some may not apply to you and we can help you figure out which ones you need."
          buttonText="Chat with us today"
          buttonLink="/contact-us"
          imageUrl="/what-document-shuold.webp"
        />

        <Accordion
          mainheading=''
          items={AccordionData}
        />

        <InnerNeedHomeLoan
          heading ="Not sure which documents you need?"
          description="Bringing the right documents can help speed up your loan application. If you’re unsure what you need, we’ve got you covered."
          buttonText="Chat with us today"
          buttonTextUrl="/Contact"
        />
    </>
  );
};

export default memo(Page);