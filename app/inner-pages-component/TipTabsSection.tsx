"use client";
import { memo } from 'react';
import { useState } from "react";
import WeDoHardWork from "../components/HomeLoansCom/WeDoHardWork";
import Sixtipsforhomebuyers from "../home-loans/buying-a-home/Sixtipsforhomebuyers";
import ResearchAndHaving from "./ResearchAndHaving";
import Feelingoverwhelmed from "./Feelingoverwhelmed";
import Disclaimer from "./Disclaimer";
import InnerNeedHomeLoan from "./InnerNeedHomeLoan";
import WhatAssets from './WhatAssets';
import HumanverificationForm from './HumanverificationForm';
import WhatNeedSteps from './WhatNeedSteps';

const badgeSvg = (
    <svg width={19} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_31_188)">
            <path d="M7.84164 12.2315C7.77119 11.9584 7.62885 11.7091 7.42942 11.5097C7.22999 11.3103 6.98077 11.1679 6.70768 11.0975L1.86642 9.8491C1.78382 9.82566 1.71112 9.77591 1.65936 9.70741C1.6076 9.63891 1.57959 9.55539 1.57959 9.46954C1.57959 9.38368 1.6076 9.30016 1.65936 9.23166C1.71112 9.16316 1.78382 9.11341 1.86642 9.08997L6.70768 7.84079C6.98067 7.7704 7.22983 7.62818 7.42925 7.4289C7.62867 7.22962 7.77107 6.98056 7.84164 6.70761L9.09003 1.86635C9.11324 1.78343 9.16293 1.71037 9.23154 1.65833C9.30014 1.60629 9.38389 1.57812 9.46999 1.57812C9.5561 1.57812 9.63985 1.60629 9.70845 1.65833C9.77705 1.71037 9.82675 1.78343 9.84996 1.86635L11.0976 6.70761C11.168 6.9807 11.3104 7.22993 11.5098 7.42936C11.7092 7.62878 11.9584 7.77113 12.2315 7.84158L17.0728 9.08918C17.156 9.11214 17.2295 9.16179 17.2818 9.23049C17.3341 9.2992 17.3624 9.38317 17.3624 9.46954C17.3624 9.5559 17.3341 9.63987 17.2818 9.70858C17.2295 9.77729 17.156 9.82693 17.0728 9.84989L12.2315 11.0975C11.9584 11.1679 11.7092 11.3103 11.5098 11.5097C11.3104 11.7091 11.168 11.9584 11.0976 12.2315L9.84917 17.0727C9.82596 17.1556 9.77627 17.2287 9.70766 17.2807C9.63906 17.3328 9.55531 17.3609 9.46921 17.3609C9.3831 17.3609 9.29935 17.3328 9.23075 17.2807C9.16215 17.2287 9.11245 17.1556 9.08924 17.0727L7.84164 12.2315Z" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.783 2.36752V5.52385" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.3609 3.9458H14.2046" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.15674 13.4155V14.9942" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.94641 14.2046H2.36768" stroke="#B5FF5F" strokeWidth="1.57829" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_31_188">
                <rect width="18.9395" height="18.9395" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const rightArrow = ((
    <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.30566 10.334H16.3616" stroke="currentColor" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3335 4.30566L16.3615 10.3336L10.3335 16.3616" stroke="currentColor" strokeWidth="1.7223" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
))

const tabs = [
    { id: "company" as const, label: "Why use a broker?" },
    { id: "services" as const, label: "First Home Buyer Guide" },
    { id: "solutions" as const, label: "Looking to Refinance Your Home" },
    { id: "news" as const, label: "Investing in Property Guide" },
    { id: "investing" as const, label: "Business Finance Guide" },
    { id: "different" as const, label: "Explaining the Loan Process" },
    { id: "typical" as const, label: "Checklist of Loan Documents" },
];

type TabId = typeof tabs[number]["id"];

const StepsData = [
    {
        id: 1, badge: "Step 1", title: "Arrange a pre approved loan", content: "If you haven’t started your property search or are still looking, a pre-approved loan can be useful. It gives you a clear picture of what your spending limits are and gives you peace of mind that if you find a property you’re really interested in you can move quickly to make an offer."
    },
    {
        id: 2, badge: "Step 2", title: "Find your property", content: "Make sure you do plenty of homework when you’re on the hunt for a new property. Research property prices in the area, potential capital growth and existing and planned infrastructure, such as roads, public transport, schools and shops. If you’re unfamiliar with property values in the area, consider a full valuation carried out by a registered valuer before making a final decision."
    },
    {
        id: 3, badge: "Step 3", title: "Appoint a conveyancer", content: "You will need a conveyancer, solicitor or settlement agent to act for you to complete the sale. They’ll be able to: Check all rates and taxes have been paid, Check land use or building approvals for the property Order any relevant searches They may also help sort out any inspections. On settlement day, the conveyancer will check the correct amount of money has been transferred from your lender to the seller and all fees – such as Stamp Duty – are paid, so you can take legal ownership of the property."
    },
    {
        id: 4, badge: "Step 4", title: "Make an offer and sign a Contract of Sale", content: "When purchasing property, whether at auction or through an offer, you’ll sign a Contract of Sale outlining the price and terms. This could include conditions like lender approval, building, and pest inspections. The settlement period, typically six weeks (shorter in some states like Queensland, finalises ownership. Note: Even with a pre-approved loan, your lender requires a property valuation before granting full approval; unsatisfactory valuations may affect loan approval."
    },
    {
        id: 5, badge: "Step 5", title: "Pay a deposit", content: "A deposit is required once a Contract of Sale has been signed by both parties. You won’t yet have access to your home loan, so your deposit will need to come from savings or elsewhere. You may also be able to arrange a deposit bond until settlement."
    },
    {
        id: 6, badge: "Step 6", title: "Cooling off period", content: "If you didn’t buy your property at auction, you may have a cooling-off period when you can cancel the contract, although there may be a small penalty. Cooling-off periods don’t necessarily apply in every state, so check with your relevant state authority to find out what your rights may be."
    },
    {
        id: 7, badge: "Step 7", title: "Unconditional contracts", content: "Be very cautious about signing an unconditional contract or bidding at an auction especially if you’re not certain about whether you’ll be able to obtain finance or about buying the home. You should also consider obtaining legal advice before signing a sale contract or bidding at an auction."
    }
]

// Type for tab content
type TabContent = {
    component: React.ReactNode;
};

const tabContent: Record<Exclude<TabId, "company">, TabContent> = {
    services: {
        component: (
            <>
                <div className="header-inner py-10 md:py-20">
                    <p className="flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl">
                        {badgeSvg}Download our free guide
                    </p>
                    <h2 className="text-3xl text-white sm:text-4xl md:text-[55px] max-w-5xl mx-auto font-bold text-center py-3 md:py-5 leading-tight">
                        Looking <span className="text-[#B5FF5F]">to</span> buy your first home?
                    </h2>
                    <p className="text-center text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                        Fill in your details for a simple, clear guide on how a broker can help get you a home loan.
                    </p>
                </div>
                <HumanverificationForm
                    description="If you choose to provide your information, it will be used to offer or provide you with our services and/or the services of our associates. We may also ask you for feedback. We may not be able to assist you if you do not provide your information. We may need to disclose your information to other organisations providing services to us, that may be overseas. If you would prefer not to receive marketing material you can always unsubscribe. We include a simple unsubscribe feature on all electronic marketing materials that we send. Our Privacy Policy (which is available on this website) contains information about how you can access your personal information and request corrections or lodge a complaint. Information about who we are and how to contact us is available on this website."
                />
            </>
        ),
    },
    solutions: {
        component: (
            <>
                <div className="header-inner py-10 md:py-20">
                    <p className="flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl">
                        {badgeSvg}Download our free guide
                    </p>
                    <h2 className="text-3xl text-white sm:text-4xl md:text-[55px] max-w-5xl mx-auto font-bold text-center py-3 md:py-5 leading-tight">
                        Is <span className="text-[#B5FF5F]">your</span> home loan still right for you?
                    </h2>
                    <p className="text-center text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                        Go through the guide in your own time and contact us for more information or to make an appointment at a time that suits you.
                    </p>
                </div>
                <HumanverificationForm
                    description="If you choose to provide your information, it will be used to offer or provide you with our services and/or the services of our associates. We may also ask you for feedback. We may not be able to assist you if you do not provide your information. We may need to disclose your information to other organisations providing services to us, that may be overseas. If you would prefer not to receive marketing material you can always unsubscribe. We include a simple unsubscribe feature on all electronic marketing materials that we send. Our Privacy Policy (which is available on this website) contains information about how you can access your personal information and request corrections or lodge a complaint. Information about who we are and how to contact us is available on this website."
                />
            </>
        ),
    },
    news: {
        component: (
            <>
                <div className="header-inner py-10 md:py-20">
                    <p className="flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl">
                        {badgeSvg}Download our free guide
                    </p>
                    <h2 className="text-3xl text-white sm:text-4xl md:text-[55px] max-w-5xl mx-auto font-bold text-center py-3 md:py-5 leading-tight">
                        Looking <span className="text-[#B5FF5F]">to</span> invest in property?
                    </h2>
                    <p className="text-center text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                        Enter your details to receive a straightforward guide that outlines how a broker can assist you on your path to successful property investment.
                    </p>
                </div>
                <HumanverificationForm
                    description="If you choose to provide your information, it will be used to offer or provide you with our services and/or the services of our associates. We may also ask you for feedback. We may not be able to assist you if you do not provide your information. We may need to disclose your information to other organisations providing services to us, that may be overseas. If you would prefer not to receive marketing material you can always unsubscribe. We include a simple unsubscribe feature on all electronic marketing materials that we send. Our Privacy Policy (which is available on this website) contains information about how you can access your personal information and request corrections or lodge a complaint. Information about who we are and how to contact us is available on this website."
                />
            </>
        ),
    },
    investing: {
        component: (
            <>
                <div className="header-inner py-10 md:py-20">
                    <p className="flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl">
                        {badgeSvg}Download our free guide
                    </p>
                    <h2 className="text-3xl text-white sm:text-4xl md:text-[55px] max-w-5xl mx-auto font-bold text-center py-3 md:py-5 leading-tight">
                        Looking <span className="text-[#B5FF5F]">for</span> the right business finance?
                    </h2>
                    <p className="text-center text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                        Simply tell us your name and email address to receive your guide on how a mortgage broker can help you.
                    </p>
                </div>
                <HumanverificationForm
                    description="If you choose to provide your information, it will be used to offer or provide you with our services and/or the services of our associates. We may also ask you for feedback. We may not be able to assist you if you do not provide your information. We may need to disclose your information to other organisations providing services to us, that may be overseas. If you would prefer not to receive marketing material you can always unsubscribe. We include a simple unsubscribe feature on all electronic marketing materials that we send. Our Privacy Policy (which is available on this website) contains information about how you can access your personal information and request corrections or lodge a complaint. Information about who we are and how to contact us is available on this website."
                />
            </>
        ),
    },
    different: {
        component: (
            <>
                <div className="header-inner py-10 md:py-20">
                    <p className="flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl">
                        {badgeSvg}Download our free guide
                    </p>
                    <h2 className="text-3xl text-white sm:text-4xl md:text-[55px] max-w-5xl mx-auto font-bold text-center py-3 md:py-5 leading-tight">
                        Got <span className="text-[#B5FF5F]">some</span> questions about the loan process?
                    </h2>
                    <p className="text-center text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                        Sometimes the best way to get an understanding of home loans, how it all works and how to choose the right one, is to speak to a broker in person.
                    </p>
                </div>

                <div className='bg-gradient-to-r from-[#1c290e] to-[#0D2611] rounded-2xl py-10'>
                    <h2 className='text-white text-center text-3xl md:text-[40px] font-bold pb-[15px]'>What do you need finance for?</h2>
                </div>

                <div className='mx-[-16px] sm:mx-[-24px] lg:mx-[-32px]'>
                    <WhatNeedSteps
                        items={StepsData}
                    />
                </div>
            </>
        ),
    },
    typical: {
        component: (
            <>
                <div className="header-inner py-10 md:py-20">
                    <p className="flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl">
                        {badgeSvg}Checklist of loan documents
                    </p>
                    <h2 className="text-3xl text-white sm:text-4xl max-w-5xl mx-auto md:text-[55px] font-bold text-center py-3 md:py-5 leading-tight">
                        Get <span className="text-[#B5FF5F]">organised</span> with our suggested document checklist
                    </h2>
                    <p className="text-center text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                        Lenders typically require similar documents when assessing loan applications. Having these ready can streamline the process and help you get approved faster.
                    </p>
                </div>

                <div className='bg-gradient-to-r from-[#1c290e] to-[#0D2611] rounded-2xl py-[50px] px-4 sm:px-6 lg:px-8 first-rich-text'>
                    <p className='text-[#B5FF5F] bg-[#384329] text-sm font-bold mb-4 px-4 py-2 rounded-3xl w-fit mx-auto'>
                        meeting your broker
                    </p>
                    <h2 className='text-white text-2xl sm:text-3xl md:text-[45px] max-w-5xl mx-auto font-bold text-center pb-2 md:pb-4 leading-tight'>
                        What <span className='text-[#B5FF5F]'>documents should</span> I bring?
                    </h2>
                    <p className='text-white text-base sm:text-base md:text-lg  text-center px-2 sm:px-0 drop-shadow-md'>
                        To keep the process moving forward, bring the documents listed below to your meeting with your broker. This is a general checklist – some may not apply to you and we can help you figure out which ones you need.
                    </p>
                </div>
            </>
        ),
    },
};

const TipTabsSection = () => {
    const [active, setActive] = useState<TabId>("company");

    return (
        <div className="bg-gradient-to-r from-[#000000] via-[#19240d] to-[#090a09] pt-12 md:pt-16 flex justify-center px-4 sm:px-6">
            <div className="max-w-[1440px] w-full mx-auto">
                {/* Tabs */}
                <div className="flex items-end justify-center gap-2 flex-wrap">
                    {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActive(tab.id)} aria-selected={active === tab.id} role="tab"
                            className={`px-3 md:px-4 py-2 md:py-3 text-[10px] md:text-xs cursor-pointer font-semibold capitalize rounded-2xl transition-all ${active === tab.id ? "bg-[#B5FF5F] text-black" : "bg-gray-200 text-black hover:bg-gray-300"
                                }`}>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Box */}
                <div>
                    {/* Company Tab */}
                    {active === "company" ? (
                        <>
                            <div className="header-inner py-10 md:py-20">
                                <p className="flex items-center justify-center gap-[7px] text-[#B5FF5F] bg-[#20360e] text-xs sm:text-sm font-regular w-fit mx-auto border py-2 px-4 sm:py-[10px] sm:px-[20px] rounded-3xl">
                                    {badgeSvg}Download our free guide
                                </p>
                                <h2 className="text-3xl text-white sm:text-4xl md:text-[55px] font-bold text-center py-3 md:py-5 leading-tight">
                                    Why <span className="text-[#B5FF5F]">use</span> a broker?
                                </h2>
                                <p className="text-center text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
                                    Simply tell us your name and email address to receive your guide on how a mortgage broker can help you.
                                </p>
                            </div>

                            <HumanverificationForm
                                description="If you choose to provide your information, it will be used to offer or provide you with our services and/or the services of our associates. We may also ask you for feedback. We may not be able to assist you if you do not provide your information. We may need to disclose your information to other organisations providing services to us, that may be overseas. If you would prefer not to receive marketing material you can always unsubscribe. We include a simple unsubscribe feature on all electronic marketing materials that we send. Our Privacy Policy (which is available on this website) contains information about how you can access your personal information and request corrections or lodge a complaint. Information about who we are and how to contact us is available on this website."
                            />
                        </>
                    ) : (
                        // Other Tabs Content
                        <div className="py-0">

                            <div className="mt-0">
                                {tabContent[active as Exclude<TabId, "company">].component}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(TipTabsSection);