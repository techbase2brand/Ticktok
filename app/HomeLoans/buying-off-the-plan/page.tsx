import NeedHomeLoan from '@/app/components/HomeLoansCom/NeedHomeLoan';
import WeDoHardWork from '@/app/components/HomeLoansCom/WeDoHardWork';
import Accordion from '@/app/inner-pages-component/Accordion';
import Hero from '@/app/inner-pages-component/Hero';
import { memo } from 'react';

const Page = () => {
  const AccordionData =[
        {   
            id:1, title:"Time on your side",
            content:"One of the biggest advantages of buying off the plan is time. Unlike traditional property purchases with relatively short windows to round up the total finance, you will have at least 12 months, if not longer, to settle. Savvy buyers will take advantage of this extra time to save their pennies and reduce their borrowings."
        },
        {
            id:2, title:"New home, no hassles",
            content:"If you dream of a new home but have nightmares at the thought of building one, an off-the-plan purchase may be the perfect compromise. Although you will not get to design everything as you would with a custom-built home, most off-the-plan developments allow some customisation of finishes and fixtures. Make sure your contract outlines what you can tailor and that you are clear on any additional costs."
        },
        {
            id:3, title:"First home buyer advantage",
            content:"Various incentives are still being dangled in front of first home buyers, which may add to the appeal of buying off the plan. Concessions vary across Australia, so visit your State or Territory website (or simply talk to a mortgage broker) for the latest information on grants and exemptions. You can also research your eligibility for stamp duty concessions on new properties using our Stamp Duty Calculator."
        },
        {
            id:4, title:"Investment incentive",
            content:"Off-the-plan apartments are often pitched heavily at investors due to the tax benefits that come with depreciation on new properties and rental guarantees. Tax savings will depend on your individual circumstances, but generally the newer the property, the higher the depreciation allowance for the building and fixtures. Investors may also be offered attractive rental guarantees for a limited period. Make sure you do your homework on rental returns on similar properties in the area before accepting the developer’s terms. Be wary of over-inflated rental guarantees. Builders will sometimes promise a high-rent yield to lure investors, build the cost into the property price and then subsidise any gap themselves for a short period. When the rental guarantee expires, you may find the actual market rent falls well short of what you originally pocketed. If investing, make sure you have the option to manage the property yourself or with your chosen property manager from the time you take possession."
        },
        {
            id:5, title:"Beware a boom",
            content:"Many buyers get swept up on a wave of rising property prices when they hand over their deposit in exchange for a floor plan. Historically, property is a consistent long-term performer, but property prices can plateau and even wane at the mercy of economic factors.Buyers also need to be wary of over-supply, which may devalue their property. Make sure you consider the bigger picture when buying off the plan. Research how many other developments are planned in the area and whether any increase in apartment numbers is justified by new or improved infrastructure, such as transport corridors, business precincts, universities or hospitals."
        },
        {
            id:6, title:"Be discerning about the developer",
            content:"Make sure you purchase from a reputable builder and take the time to research their previous projects. Do they use quality contractors? Do they deliver projects on time? Make a point of visiting some of their projects, so you can assess the finished product first-hand."
        },
        {
            id:7, title:"Top tips",
            content:"Investments like this are big decisions, so investing in the right professionals to have onside before you commit is money well spent. Ensure you get professional legal advice on any contract before you sign it and that you speak with your financial advisor or tax professional to make sure you’ve got the right advice from day one.  Make sure your deposit will be refunded if the project doesn’t go ahead by a certain date. Make sure the contract contains as much detail as possible about the finished product. Be clear on what finishes and fixtures you can customise. Find out if you can on-sell during construction in case your circumstances change. Ask if you can inspect the site during construction."
        }
    ] 
  return (
    <>
      <Hero
        badge="Buy early move later"
        title="Buying off the plan: a new build without the stress of building"
        description="Buying off the plan can offer attractive incentives for both investors and owner occupiers. It’s an opportunity to secure a property before construction is complete, often with potential financial and lifestyle benefits."
      />
      <WeDoHardWork
        flexReverse={false}
        image= "/concept-is-simple.webp"
        title="The concept is simple"
        description="Buyers put down a deposit usually 10 per cent) for a house or apartment based on site plans. These commitments to buy help developers fund construction, with full payment due only on completion. The lure for buyers, is a potential capital gain if values rise during this period, but that can be a big if’."
        subtitle=""
        description2=""
        whyUseBtn=""
        badeTitle=""
      />
      <WeDoHardWork
        flexReverse={true}
        image= "/buying-off-tsx.webp"
        title="Buying off the plan can be a win to win for buyers and developers"
        description="Having buyers lined up helps developers secure finance. And on the flipside, buyers who commit early can lock in a property at current market rates, without the need to settle until construction is finished, which can be months or even years later. The hope is that the property may be worth more by the time it is completed, and payment due. Most contracts only require a 10 per cent deposit, also allowing buyers additional time to save the 20 per cent needed to avoid Lenders Mortgage Insurance on settlement."
        subtitle=""
        description2=""
        whyUseBtn=""
        badeTitle=""
      />
      <WeDoHardWork
        flexReverse={false}
        image= "/when-buying-off.webp"
        title="When buying off the plan, a developer should providebuyers with a contract"
        description="It outlines the details of the purchase, the completion date and the deadline for when a decision must be made as to whether the development will go ahead. That decision usually hinges on whether sufficient finance has been secured. If the developer pulls the pin or passes the decision deadline, buyers should be entitled to a refund of their deposit under a `sunset clause’, although this can depend on the conditions of the sale contract. It pays to read contract terms carefully and, if required, seek financial or legal advice."
        subtitle=""
        description2=""
        whyUseBtn=""
        badeTitle=""
      />
      <Accordion
        mainheading='Common questions for off the plan home buyers'
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