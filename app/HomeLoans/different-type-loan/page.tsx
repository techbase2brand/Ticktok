"use client";
import dynamic from "next/dynamic";
import { memo } from 'react';
// Dynamic imports with SSR enabled (SEO friendly)
const Hero = dynamic(() => import('@/app/inner-pages-component/Hero'));
const RichText = dynamic(() => import('@/app/inner-pages-component/RichText'));
const Sixtipsforhomebuyers = dynamic(() => import('../buying-a-home/Sixtipsforhomebuyers'));
const Feelingoverwhelmed = dynamic(() => import('@/app/inner-pages-component/Feelingoverwhelmed'));
const Disclaimer = dynamic(() => import('@/app/inner-pages-component/Disclaimer'));
const InnerNeedHomeLoan = dynamic(() => import('@/app/inner-pages-component/InnerNeedHomeLoan'));
const Page = () => {
    const VariableRate = [
        {
            id: 1,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2105_24)">
                  <path d="M57.708 28.5117V37.6679C57.708 38.3572 57.1379 38.9165 56.4334 38.9165H39.1562V55.8411C39.1562 56.5314 38.5852 57.0897 37.8816 57.0897H28.5346C27.8314 57.0897 27.26 56.5312 27.26 55.8411V38.9165H9.9826C9.27841 38.9165 8.70801 38.3572 8.70801 37.6679V28.5117C8.70801 27.8223 9.27841 27.2632 9.9826 27.2632H27.26V10.3384C27.26 9.64833 27.8312 9.08984 28.5346 9.08984H37.8816C38.5852 9.08984 39.1562 9.64833 39.1562 10.3384V27.2632H56.4334C57.138 27.2632 57.708 27.8223 57.708 28.5117Z"fill="#B5FF5F"/></g>
                <defs><clipPath id="clip0_2105_24"> <rect width={49} height={48} fill="white"transform="translate(8.70801 9.08984)"/></clipPath></defs>
              </svg>
            ),
            title: "Pros",
            description: "If interest rates fall, the size of your minimum repayments will too. Standard variable loans generally allow you to make extra repayments. Even small extra payments can cut the length and cost of your mortgage. Basic variable loans often don’t come with a redraw facility, removing the temptation to spend money you’ve already paid off your loan."
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <g clipPath="url(#clip0_2106_25)"><path d="M54.9637 26.8721H11.3273C10.1225 26.8721 9.14551 27.8082 9.14551 28.963V37.3266C9.14551 38.4814 10.1225 39.4175 11.3273 39.4175H54.9637C56.1686 39.4175 57.1455 38.4814 57.1455 37.3266V28.963C57.1455 27.8082 56.1686 26.8721 54.9637 26.8721Z" fill="#B5FF5F"/></g>
                <defs> <clipPath id="clip0_2106_25"> <rect width={48} height={46} fill="white" transform="translate(9.14551 10.145)"/> </clipPath></defs>
              </svg>
            ),
            title: "Cons",
            description: "If interest rates rise, the size of your repayments will too. Increased loan repayments due to rate rises could impact your household budget, so make sure you take potential interest rate hikes into account when working out how much money to borrow. You need to be disciplined around the redraw facility on a standard variable loan. If you dip into it too often, it will take much longer and cost more to pay off your loan. If you have a basic variable loan, you may not be able to pay it off quicker or get access to money you have already repaid if you ever need it."
        }
    ];

    const FixedRate = [
        {
            id: 1,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2105_24)">
                  <path d="M57.708 28.5117V37.6679C57.708 38.3572 57.1379 38.9165 56.4334 38.9165H39.1562V55.8411C39.1562 56.5314 38.5852 57.0897 37.8816 57.0897H28.5346C27.8314 57.0897 27.26 56.5312 27.26 55.8411V38.9165H9.9826C9.27841 38.9165 8.70801 38.3572 8.70801 37.6679V28.5117C8.70801 27.8223 9.27841 27.2632 9.9826 27.2632H27.26V10.3384C27.26 9.64833 27.8312 9.08984 28.5346 9.08984H37.8816C38.5852 9.08984 39.1562 9.64833 39.1562 10.3384V27.2632H56.4334C57.138 27.2632 57.708 27.8223 57.708 28.5117Z"fill="#B5FF5F"/></g>
                <defs><clipPath id="clip0_2105_24"> <rect width={49} height={48} fill="white"transform="translate(8.70801 9.08984)"/></clipPath></defs>
              </svg>
            ),
            title: "Pros",
            description: "Your regular repayments are unaffected by increases in interest rates.You can manage your household budget better during the fixed period, knowing exactly how much is needed to repay your home loan"
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <g clipPath="url(#clip0_2106_25)"><path d="M54.9637 26.8721H11.3273C10.1225 26.8721 9.14551 27.8082 9.14551 28.963V37.3266C9.14551 38.4814 10.1225 39.4175 11.3273 39.4175H54.9637C56.1686 39.4175 57.1455 38.4814 57.1455 37.3266V28.963C57.1455 27.8082 56.1686 26.8721 54.9637 26.8721Z" fill="#B5FF5F"/></g>
                <defs> <clipPath id="clip0_2106_25"> <rect width={48} height={46} fill="white" transform="translate(9.14551 10.145)"/> </clipPath></defs>
              </svg>
            ),
            title: "Cons",
            description: "If interest rates go down, you don’t benefit from the decrease. Your regular repayments stay the same. You can end up paying more than someone with a variable loan if rates remain higher under your agreed fixed rate for a prolonged period. There is very limited opportunity for additional repayments during the fixed rate period. There may be significant break costs that you must pay if you exit the loan before the end of the fixed rate period."
        }
    ];

     const SplitRate = [
        {
            id: 1,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2105_24)">
                  <path d="M57.708 28.5117V37.6679C57.708 38.3572 57.1379 38.9165 56.4334 38.9165H39.1562V55.8411C39.1562 56.5314 38.5852 57.0897 37.8816 57.0897H28.5346C27.8314 57.0897 27.26 56.5312 27.26 55.8411V38.9165H9.9826C9.27841 38.9165 8.70801 38.3572 8.70801 37.6679V28.5117C8.70801 27.8223 9.27841 27.2632 9.9826 27.2632H27.26V10.3384C27.26 9.64833 27.8312 9.08984 28.5346 9.08984H37.8816C38.5852 9.08984 39.1562 9.64833 39.1562 10.3384V27.2632H56.4334C57.138 27.2632 57.708 27.8223 57.708 28.5117Z"fill="#B5FF5F"/></g>
                <defs><clipPath id="clip0_2105_24"> <rect width={49} height={48} fill="white"transform="translate(8.70801 9.08984)"/></clipPath></defs>
              </svg>
            ),
            title: "Pros",
            description: "Your regular repayments will vary less if interest rates increase, making it easier to budget. If interest rates fall, your regular repayments on the variable portion will too.You can generally repay the variable part of the loan quicker if you wish."
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <g clipPath="url(#clip0_2106_25)"><path d="M54.9637 26.8721H11.3273C10.1225 26.8721 9.14551 27.8082 9.14551 28.963V37.3266C9.14551 38.4814 10.1225 39.4175 11.3273 39.4175H54.9637C56.1686 39.4175 57.1455 38.4814 57.1455 37.3266V28.963C57.1455 27.8082 56.1686 26.8721 54.9637 26.8721Z" fill="#B5FF5F"/></g>
                <defs> <clipPath id="clip0_2106_25"> <rect width={48} height={46} fill="white" transform="translate(9.14551 10.145)"/> </clipPath></defs>
              </svg>
            ),
            title: "Cons",
            description: "If interest rates rise, your regular repayments on the variable portion will too. Your additional repayments of the fixed rate portion will be limited. There may be significant break costs that you must pay if you exit the fixed portion of the loan early."
        }
    ];

    const InterestOnly = [
        {
            id: 1,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2105_24)">
                  <path d="M57.708 28.5117V37.6679C57.708 38.3572 57.1379 38.9165 56.4334 38.9165H39.1562V55.8411C39.1562 56.5314 38.5852 57.0897 37.8816 57.0897H28.5346C27.8314 57.0897 27.26 56.5312 27.26 55.8411V38.9165H9.9826C9.27841 38.9165 8.70801 38.3572 8.70801 37.6679V28.5117C8.70801 27.8223 9.27841 27.2632 9.9826 27.2632H27.26V10.3384C27.26 9.64833 27.8312 9.08984 28.5346 9.08984H37.8816C38.5852 9.08984 39.1562 9.64833 39.1562 10.3384V27.2632H56.4334C57.138 27.2632 57.708 27.8223 57.708 28.5117Z"fill="#B5FF5F"/></g>
                <defs><clipPath id="clip0_2105_24"> <rect width={49} height={48} fill="white"transform="translate(8.70801 9.08984)"/></clipPath></defs>
              </svg>
            ),
            title: "Pros",
            description: "During the interest-only period, your monthly repayments are lower because you’re not paying off the principal. If it is not a fixed rate loan, there may be flexibility to pay off, and possibly redraw, the principal at your convenience during the interest-only period. These loans are especially popular with investors who plan to pay off the principal when the property is sold. This strategy is usually reliant on the property having achieved capital growth before it is sold."
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <g clipPath="url(#clip0_2106_25)"><path d="M54.9637 26.8721H11.3273C10.1225 26.8721 9.14551 27.8082 9.14551 28.963V37.3266C9.14551 38.4814 10.1225 39.4175 11.3273 39.4175H54.9637C56.1686 39.4175 57.1455 38.4814 57.1455 37.3266V28.963C57.1455 27.8082 56.1686 26.8721 54.9637 26.8721Z" fill="#B5FF5F"/></g>
                <defs> <clipPath id="clip0_2106_25"> <rect width={48} height={46} fill="white" transform="translate(9.14551 10.145)"/> </clipPath></defs>
              </svg>
            ),
            title: "Cons",
            description: "The overall cost of the loan is likely to be significantly higher. At the end of the interest-only period you have the same level of debt as when you started. If you’re not able to extend your interest-only period your repayments will increase at the end of the interest-only period. You could face a sudden increase in regular repayments at the end of the interest-only period when the loan changes to principal and interest."
        }
    ];

    const LineCredit = [
        {
            id: 1,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2105_24)">
                  <path d="M57.708 28.5117V37.6679C57.708 38.3572 57.1379 38.9165 56.4334 38.9165H39.1562V55.8411C39.1562 56.5314 38.5852 57.0897 37.8816 57.0897H28.5346C27.8314 57.0897 27.26 56.5312 27.26 55.8411V38.9165H9.9826C9.27841 38.9165 8.70801 38.3572 8.70801 37.6679V28.5117C8.70801 27.8223 9.27841 27.2632 9.9826 27.2632H27.26V10.3384C27.26 9.64833 27.8312 9.08984 28.5346 9.08984H37.8816C38.5852 9.08984 39.1562 9.64833 39.1562 10.3384V27.2632H56.4334C57.138 27.2632 57.708 27.8223 57.708 28.5117Z"fill="#B5FF5F"/></g>
                <defs><clipPath id="clip0_2105_24"> <rect width={49} height={48} fill="white"transform="translate(8.70801 9.08984)"/></clipPath></defs>
              </svg>
            ),
            title: "Pros",
            description: "You can use your income to help reduce interest charges and pay off your mortgage quicker. Provides great flexibility for you to access available funds and to have your salary paid into the line of credit account.Simplifies your banking into one account."
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <g clipPath="url(#clip0_2106_25)"><path d="M54.9637 26.8721H11.3273C10.1225 26.8721 9.14551 27.8082 9.14551 28.963V37.3266C9.14551 38.4814 10.1225 39.4175 11.3273 39.4175H54.9637C56.1686 39.4175 57.1455 38.4814 57.1455 37.3266V28.963C57.1455 27.8082 56.1686 26.8721 54.9637 26.8721Z" fill="#B5FF5F"/></g>
                <defs> <clipPath id="clip0_2106_25"> <rect width={48} height={46} fill="white" transform="translate(9.14551 10.145)"/> </clipPath></defs>
              </svg>
            ),
            title: "Cons",
            description: "Without proper monitoring and discipline, you won’t pay off the principal and will continue to carry or increase your level of debt. Line of credit loans usually carry higher interest rates than a standard variable mortgage."
        }
    ];

    const Introductory = [
        {
            id: 1,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2105_24)">
                  <path d="M57.708 28.5117V37.6679C57.708 38.3572 57.1379 38.9165 56.4334 38.9165H39.1562V55.8411C39.1562 56.5314 38.5852 57.0897 37.8816 57.0897H28.5346C27.8314 57.0897 27.26 56.5312 27.26 55.8411V38.9165H9.9826C9.27841 38.9165 8.70801 38.3572 8.70801 37.6679V28.5117C8.70801 27.8223 9.27841 27.2632 9.9826 27.2632H27.26V10.3384C27.26 9.64833 27.8312 9.08984 28.5346 9.08984H37.8816C38.5852 9.08984 39.1562 9.64833 39.1562 10.3384V27.2632H56.4334C57.138 27.2632 57.708 27.8223 57.708 28.5117Z"fill="#B5FF5F"/></g>
                <defs><clipPath id="clip0_2105_24"> <rect width={49} height={48} fill="white"transform="translate(8.70801 9.08984)"/></clipPath></defs>
              </svg>
            ),
            title: "Pros",
            description: "Lower regular repayments for an initial ‘honeymoon’ period."
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <g clipPath="url(#clip0_2106_25)"><path d="M54.9637 26.8721H11.3273C10.1225 26.8721 9.14551 27.8082 9.14551 28.963V37.3266C9.14551 38.4814 10.1225 39.4175 11.3273 39.4175H54.9637C56.1686 39.4175 57.1455 38.4814 57.1455 37.3266V28.963C57.1455 27.8082 56.1686 26.8721 54.9637 26.8721Z" fill="#B5FF5F"/></g>
                <defs> <clipPath id="clip0_2106_25"> <rect width={48} height={46} fill="white" transform="translate(9.14551 10.145)"/> </clipPath></defs>
              </svg>
            ),
            title: "Cons",
            description: "Loans may have restrictions, such as no redraw facilities, for the entire length of the loan. When the honeymoon rate period ends a homeowner may be locked into an interest rate that is not as competitive as elsewhere. Some banks may charge early termination fees if you decide to switch to a new lender."
        }
    ];

    const LowDoc = [
        {
            id: 1,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2105_24)">
                  <path d="M57.708 28.5117V37.6679C57.708 38.3572 57.1379 38.9165 56.4334 38.9165H39.1562V55.8411C39.1562 56.5314 38.5852 57.0897 37.8816 57.0897H28.5346C27.8314 57.0897 27.26 56.5312 27.26 55.8411V38.9165H9.9826C9.27841 38.9165 8.70801 38.3572 8.70801 37.6679V28.5117C8.70801 27.8223 9.27841 27.2632 9.9826 27.2632H27.26V10.3384C27.26 9.64833 27.8312 9.08984 28.5346 9.08984H37.8816C38.5852 9.08984 39.1562 9.64833 39.1562 10.3384V27.2632H56.4334C57.138 27.2632 57.708 27.8223 57.708 28.5117Z"fill="#B5FF5F"/></g>
                <defs><clipPath id="clip0_2105_24"> <rect width={49} height={48} fill="white"transform="translate(8.70801 9.08984)"/></clipPath></defs>
              </svg>
            ),
            title: "Pros",
            description: "Alternative documentation may be accepted to support your loan application."
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <g clipPath="url(#clip0_2106_25)"><path d="M54.9637 26.8721H11.3273C10.1225 26.8721 9.14551 27.8082 9.14551 28.963V37.3266C9.14551 38.4814 10.1225 39.4175 11.3273 39.4175H54.9637C56.1686 39.4175 57.1455 38.4814 57.1455 37.3266V28.963C57.1455 27.8082 56.1686 26.8721 54.9637 26.8721Z" fill="#B5FF5F"/></g>
                <defs> <clipPath id="clip0_2106_25"> <rect width={48} height={46} fill="white" transform="translate(9.14551 10.145)"/> </clipPath></defs>
              </svg>
            ),
            title: "Cons",
            description: "You will probably pay higher interest than with other home loan types, or may need a larger deposit, or both."
        }
    ];
  return (
    <>
        <Hero
            badge="What's easier to find?"
            title="A new home or the right loan?"
            description="There are hundreds of loan options out there. Different types, lenders and new products launching all the time. We’ll help you make sense of it all and guide you to a loan that actually suits your needs."
        />
        <RichText  
          buttonText=""     
          buttonlink="" 
          nameClass="first-rich-text"
          title="Types of home loans and how they work"
          description="Here’s a quick look at the main types of loans and some of their advantages and disadvantages."
        />
        <Sixtipsforhomebuyers
          title="Variable Rate Loans"
          items={VariableRate}
          description="Interest rates go up or down over the life of the loan depending on the official rate set by the Reserve Bank of Australia, funding costs and the individual decisions of each lender. Your regular repayments generally pay off both the interest and some of the principal."
          nameClass=""
        />
        <Sixtipsforhomebuyers
          title="Fixed Rate Loans"
          items={FixedRate}
          description="The interest rate is fixed for a certain period, usually the first one to five years of the loan. This means your regular repayments stay the same regardless of changes in interest rates. At the end of the fixed period you can decide whether to fix the rate again, at whatever rate lenders are offering, or move to a variable loan."
          nameClass=""
        />

        <Feelingoverwhelmed 
          title="Feeling overwhelmed? We are here to simplify it."
          description="If you're feeling unsure, you're not alone. We'll help you make sense of your options and find a loan that fits."
          buttonName="Let’s have a chat"
          buttonUrl="/Contact"
        />
        <Sixtipsforhomebuyers
          title="Split Rate Loans"
          items={SplitRate}
          description="Your loan amount is split, so one part is variable, and the other is fixed. You decide on the proportion of variable and fixed. You enjoy some of the flexibility of a variable loan along with some of the certainty of a fixed rate loan."
          nameClass=""
        />
        <Sixtipsforhomebuyers
          title="Interest Only"
          items={InterestOnly}
          description="You repay only the interest on the amount borrowed usually for the first one to five years of the loan, although some lenders offer longer terms. At the end of the interest-only period, you begin to pay off both interest and principal."
          nameClass=""
        />
        <Sixtipsforhomebuyers
          title="Line of Credit"
          items={LineCredit}
          description="You can pay into and withdraw from your home loan every month, so long as you keep up the regular required repayments."
          nameClass=""
        />
        <Sixtipsforhomebuyers
          title="Introductory or Honeymoon Loans"
          items={Introductory}
          description="Originally designed for first and home buyers, but now available more widely, introductory loans offer a discounted interest rate for the first 6 to 12 months, before the rate reverts to the usual variable interest rate."
          nameClass=""
        />
        <Sixtipsforhomebuyers
          title="Low Doc Loans"
          items={LowDoc}
          description="Popular with self-employed people, these loans require less documentation or proof of income than most but often carry higher interest rates or require a larger deposit because of the perceived higher lender risk.In most cases, you will be financially better off getting together full documentation for another type of loan. But if this isn’t possible, a low doc loan may be your best opportunity to borrow money."
          nameClass=""
        />
        <InnerNeedHomeLoan
          heading ="Ready to find the perfect loan for your needs?"
          description="Whatever your circumstances, we will find the deal that’s right for you.Send through a quick enquiry and we will be in touch."
          buttonText="Speak to us today"
          buttonTextUrl="/Contact"
        />
        <Disclaimer 
          disclaimerTitle="DISCLAIMER"
          description="Please note we do not provide tax, legal or accounting advice. Any information provided is of a general nature only and does not take into account the objectives, financial situation or needs of any particular person and is not intended to provide, and should not be relied on for, tax, legal or accounting advice. You should consult your own tax, legal and accounting advisors before engaging in or considering the appropriateness of any transaction. "
        />
    </>
  );
};

export default memo(Page);