import Sixtipsforhomebuyers from '@/app/HomeLoans/buying-a-home/Sixtipsforhomebuyers';
import Banner from '@/app/inner-pages-component/banner';
import Disclaimer from '@/app/inner-pages-component/Disclaimer';
import InnerNeedHomeLoan from '@/app/inner-pages-component/InnerNeedHomeLoan';
import RichText from '@/app/inner-pages-component/RichText';
import { memo } from 'react';

const Page = () => {
    const storeAboutSupport = [
        {
            id: 1,
            icon: (
              <svg width={67}  height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2090_2)">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.9102 8.14502H48.3789C50.9674 8.15 53.4484 9.18048 55.2787 11.0108C57.1091 12.8411 58.1395 15.3222 58.1445 17.9106V48.3794C58.1395 50.9679 57.1091 53.4489 55.2787 55.2792C53.4484 57.1096 50.9674 58.14 48.3789 58.145H17.9102C15.3217 58.14 12.8407 57.1096 11.0103 55.2792C9.17999 53.4489 8.14951 50.9679 8.14453 48.3794V17.9106C8.14951 15.3222 9.17999 12.8411 11.0103 11.0108C12.8407 9.18048 15.3217 8.15 17.9102 8.14502ZM18.4961 45.9625C18.4962 46.4481 18.6892 46.9137 19.0325 47.2571C19.3759 47.6004 19.8416 47.7934 20.3271 47.7935H29.9104C30.1525 47.796 30.3926 47.7504 30.617 47.6595C30.8413 47.5686 31.0454 47.4342 31.2175 47.2639C31.3895 47.0936 31.5261 46.8909 31.6193 46.6675C31.7125 46.4441 31.7605 46.2045 31.7605 45.9624C31.7605 45.7203 31.7125 45.4807 31.6193 45.2573C31.5261 45.0339 31.3895 44.8312 31.2175 44.6609C31.0454 44.4906 30.8413 44.3562 30.617 44.2653C30.3926 44.1744 30.1525 44.1288 29.9104 44.1313H24.7479L31.5643 37.3149C31.9077 36.9715 32.1007 36.5057 32.1008 36.02C32.1008 35.5343 31.9079 35.0685 31.5645 34.725C31.3945 34.555 31.1926 34.4201 30.9704 34.328C30.7482 34.236 30.5101 34.1886 30.2696 34.1885C29.7839 34.1885 29.3181 34.3814 28.9746 34.7248L22.1582 41.5422V36.3791C22.1532 35.8968 21.9581 35.4358 21.6153 35.0965C21.2724 34.7572 20.8095 34.5669 20.3271 34.5669C19.8448 34.5669 19.3819 34.7572 19.039 35.0965C18.6962 35.4358 18.5011 35.8968 18.4961 36.3791V45.9625ZM47.793 20.3277C47.7929 19.8421 47.5999 19.3764 47.2566 19.0331C46.9132 18.6897 46.4475 18.4967 45.9619 18.4966H36.3786C36.1366 18.4941 35.8964 18.5396 35.6721 18.6305C35.4477 18.7214 35.2436 18.8559 35.0716 19.0261C34.8995 19.1964 34.763 19.3991 34.6698 19.6225C34.5765 19.8459 34.5286 20.0856 34.5286 20.3276C34.5286 20.5697 34.5765 20.8094 34.6698 21.0328C34.763 21.2561 34.8995 21.4588 35.0716 21.6291C35.2436 21.7994 35.4477 21.9339 35.6721 22.0248C35.8964 22.1157 36.1366 22.1612 36.3786 22.1587H41.5417L34.7243 28.9751C34.3808 29.3186 34.1879 29.7844 34.1879 30.2702C34.1879 30.7559 34.3808 31.2218 34.7243 31.5652C35.0678 31.9087 35.5336 32.1017 36.0194 32.1017C36.5051 32.1017 36.971 31.9087 37.3145 31.5652L44.1309 24.7479V29.911C44.1358 30.3934 44.331 30.8543 44.6738 31.1936C45.0166 31.5329 45.4795 31.7233 45.9619 31.7233C46.4443 31.7233 46.9072 31.5329 47.25 31.1936C47.5929 30.8543 47.788 30.3934 47.793 29.911V20.3277Z"fill="#B5FF5F"/></g>
                <defs><clipPath id="clip0_2090_2"> <rect width={50} height={50} fill="white" transform="translate(8.14453 8.14502)"/></clipPath></defs>
              </svg>
            ),
            title: "You want to expand",
            description: "It’s not all about bigger premises, a new property or a revamp, it can be for new equipment or staff, maybe a marketing campaign to drive more sales, or diversifying your offering."
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <path fillRule="evenodd" clipRule="evenodd" d="M51.9132 22.4137C51.894 23.2072 51.2366 23.8359 50.4431 23.8186C49.6496 23.7995 49.021 23.142 49.0382 22.3485L49.1168 18.887L45.6572 18.8085C44.8637 18.7893 44.235 18.1319 44.2523 17.3384C44.2715 16.5449 44.9289 15.9162 45.7224 15.9335L50.6214 16.0465C51.4149 16.0638 52.0436 16.7212 52.0244 17.5147L51.9132 22.4137Z" fill="#B5FF5F"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M21.3136 28.0584V51.3287C21.3136 52.6665 20.2307 53.7494 18.8928 53.7494H14.9618C13.6239 53.7494 12.541 52.6665 12.541 51.3287V28.0584C12.541 26.7225 13.6239 25.6377 14.9618 25.6377H18.8928C20.2307 25.6377 21.3136 26.7225 21.3136 28.0584Z" fill="#B5FF5F"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M42.9366 39.8534V51.3284C42.9366 51.9705 42.6817 52.5858 42.2275 53.04C41.7732 53.4943 41.158 53.7492 40.5159 53.7492H36.5848C35.9427 53.7492 35.3275 53.4943 34.8732 53.04C34.419 52.5858 34.1641 51.9705 34.1641 51.3284V39.8534C34.1641 39.2113 34.419 38.596 34.8732 38.1418C35.3275 37.6875 35.9427 37.4326 36.5848 37.4326H40.5159C41.158 37.4326 41.7732 37.6875 42.2275 38.1418C42.6817 38.596 42.9366 39.2113 42.9366 39.8534Z" fill="#B5FF5F"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M32.1261 33.9559V51.3286C32.1261 52.6664 31.0432 53.7493 29.7053 53.7493H25.7743C24.4364 53.7493 23.3535 52.6664 23.3535 51.3286V33.9559C23.3535 33.3138 23.6084 32.6986 24.0627 32.2443C24.5169 31.7901 25.1322 31.5352 25.7743 31.5352H29.7053C31.0432 31.5352 32.1261 32.62 32.1261 33.9559Z" fill="#B5FF5F"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M53.7491 33.9559V51.3286C53.7491 52.6664 52.6662 53.7493 51.3284 53.7493H47.3973C46.0595 53.7493 44.9766 52.6664 44.9766 51.3286V33.9559C44.9766 33.3138 45.2315 32.6986 45.6857 32.2443C46.14 31.7901 46.7552 31.5352 47.3973 31.5352H51.3284C52.6662 31.5352 53.7491 32.62 53.7491 33.9559Z"fill="#B5FF5F"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8415 15.1284C14.2051 14.6531 14.0767 13.7504 14.554 13.1159C15.0293 12.4815 15.9301 12.3531 16.5665 12.8284L27.9764 21.3864H33.3948C33.8375 21.3864 34.2535 21.5895 34.5256 21.9364L38.909 27.5159L49.0674 16.9148C49.6155 16.3417 50.526 16.3225 51.099 16.8726C51.6721 17.4208 51.6913 18.3312 51.1431 18.9043L39.8386 30.6994C39.5511 31.0004 39.1467 31.1614 38.7308 31.1403C38.3149 31.1211 37.9277 30.9199 37.6709 30.5921L32.6971 24.2614H27.4972C27.1867 24.2614 26.8839 24.1617 26.6347 23.9739L14.8415 15.1284Z" fill="#B5FF5F"/>
              </svg>
            ),
            title: "Putting stock on the floor",
            description: "If you’re about to have a busy period, you need enough inventory, so you’ll need to buy it before you can sell it and generate the income. The right finance will ensure you’re ready."
        },
        {
            id: 3,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2091_4)">
                <path d="M46.1445 33.1333C46.1445 25.9536 40.3242 20.1333 33.1445 20.1333C25.9649 20.1333 20.1445 25.9536 20.1445 33.1333C20.1445 40.313 25.9649 46.1333 33.1445 46.1333C40.3209 46.1254 46.1365 40.3097 46.1445 33.1333ZM32.0612 39.6333V38.7593C31.4399 38.5577 30.8559 38.2555 30.3325 37.865C29.8595 37.4984 29.7733 36.8177 30.14 36.3446C30.5068 35.8715 31.1873 35.7854 31.6604 36.1521C31.6847 36.1701 33.3436 37.418 34.1106 36.5033C34.3769 36.266 34.4945 35.9035 34.4184 35.555C34.1003 34.865 33.4948 34.3499 32.7628 34.1466C31.3632 33.7145 30.2532 32.6415 29.7741 31.2574C29.5268 30.2293 29.807 29.1454 30.5216 28.3661C30.9175 27.8802 31.4561 27.5311 32.0612 27.3683V26.6333C32.0612 26.035 32.5462 25.5499 33.1445 25.5499C33.7428 25.5499 34.2279 26.035 34.2279 26.6333V27.4892C34.8507 27.6953 35.4349 28.0035 35.9566 28.4012C36.429 28.7688 36.514 29.4496 36.1465 29.922C35.779 30.3944 35.0981 30.4794 34.6257 30.1119C34.612 30.1011 32.9521 28.8461 32.1787 29.7628C31.9124 30.0002 31.7948 30.3627 31.8708 30.7112C32.1889 31.4012 32.7944 31.9163 33.5265 32.1196C34.926 32.5517 36.036 33.6247 36.5152 35.0088C36.7625 36.0369 36.4823 37.1207 35.7677 37.9001C35.3711 38.3834 34.8324 38.7292 34.2279 38.8886V39.6333C34.2279 40.2316 33.7428 40.7167 33.1445 40.7167C32.5462 40.7167 32.0612 40.2316 32.0612 39.6333Z" fill="#B5FF5F" />
                <path d="M58.9286 16.2331L52.4286 7.56644C52.0355 7.08778 51.3287 7.01851 50.85 7.41166C50.7936 7.45808 50.7417 7.50987 50.6952 7.56644L44.1952 16.2331C43.8362 16.7117 43.9332 17.3908 44.4119 17.7497C44.5994 17.8904 44.8275 17.9663 45.0619 17.9663H48.3119V33.133C48.3024 41.5055 41.5177 48.2904 33.1453 48.2998H25.5619C24.9636 48.2998 24.4785 48.7849 24.4785 49.3832V53.7165C24.4785 54.3148 24.9636 54.7999 25.5619 54.7999H33.1453C45.1059 54.7864 54.7984 45.0938 54.8119 33.1333V17.9664H58.0619C58.6602 17.9664 59.1452 17.4814 59.1452 16.8831C59.1452 16.6487 59.0692 16.4207 58.9286 16.2331Z" fill="#B5FF5F"/>
                <path d="M21.2279 48.2997H17.9779V33.1329C17.9873 24.7605 24.7721 17.9758 33.1445 17.9663H40.7279C41.3262 17.9663 41.8113 17.4812 41.8113 16.8829V12.5497C41.8113 11.9514 41.3262 11.4663 40.7279 11.4663H33.1445C21.1839 11.4798 11.4914 21.1724 11.4779 33.1329V48.2996H8.2279C7.62959 48.2997 7.14453 48.7846 7.14453 49.3829C7.14453 49.6173 7.2206 49.8455 7.36116 50.0329L13.8612 58.6996C14.2202 59.1782 14.8992 59.2752 15.3778 58.9162C15.46 58.8547 15.5329 58.7816 15.5944 58.6996L22.0944 50.0329C22.4535 49.5543 22.3564 48.8752 21.8778 48.5163C21.6903 48.3756 21.4623 48.2997 21.2279 48.2997Z" fill="#B5FF5F" /> </g><defs>
                <clipPath id="clip0_2091_4"> <rect width={52} height={52} fill="white" transform="translate(7.14453 7.14502)" /></clipPath></defs>
            </svg>
            ),
            title: "Keeping up cash flow",
            description: "It’s more than simply a cash injection, you might get finance for equipment or inventory to preserve the funds you already have in the bank. You can even get finance based on the invoices you’ve already sent to clients."
        },
        {
            id: 4,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="66.29" height="66.29" rx={16} fill="#1D4115" />
                <g clipPath="url(#clip0_2092_5)"> <path fillRule="evenodd" clipRule="evenodd" d="M56.1007 33.3688C56.1007 39.3199 53.7327 44.9149 49.4329 49.1233C45.1323 53.3325 39.4156 55.6505 33.3359 55.6505C32.5755 55.6505 31.959 55.0471 31.959 54.3029C31.959 53.5586 32.5755 52.9552 33.3359 52.9552C38.68 52.9552 43.7051 50.9175 47.4856 47.2174C55.2877 39.5812 55.2877 27.1564 47.4856 19.5202C39.6827 11.8834 26.9865 11.8835 19.1837 19.5202C19.1239 19.5788 19.065 19.6383 19.0059 19.6977H20.7444C21.5049 19.6977 22.1214 20.301 22.1214 21.0453C22.1214 21.7896 21.5049 22.393 20.7444 22.393H15.6782C14.9177 22.393 14.3012 21.7896 14.3012 21.0453V16.0868C14.3012 15.3426 14.9177 14.7392 15.6782 14.7392C16.4386 14.7392 17.0551 15.3426 17.0551 16.0868V17.7952C17.1154 17.7348 17.1754 17.674 17.2363 17.6144C21.5363 13.4061 27.2534 11.0884 33.3347 11.0884C39.4161 11.0884 45.1331 13.406 49.433 17.6144C53.7328 21.8227 56.1008 27.4177 56.1008 33.3688H56.1007ZM19.0188 33.3688C19.0188 25.6423 25.4415 19.3563 33.3359 19.3563C41.2304 19.3563 47.653 25.6423 47.653 33.3688C47.653 41.0954 41.2305 47.3813 33.3359 47.3813C25.4414 47.3813 19.0188 41.0954 19.0188 33.3688ZM31.959 33.3688C31.959 33.8502 32.2213 34.2951 32.6473 34.5358L37.3102 37.1716C37.5271 37.2943 37.7639 37.3525 37.9976 37.3525C38.4734 37.3525 38.9362 37.1108 39.1912 36.6787C39.5715 36.0341 39.3461 35.2099 38.6875 34.8377L34.7129 32.591V26.2584C34.7129 25.5141 34.0964 24.9107 33.3359 24.9107C32.5755 24.9107 31.959 25.5141 31.959 26.2584V33.3689V33.3688ZM13.3233 33.3688C13.3233 32.6277 12.7066 32.0216 11.9468 32.0216C11.187 32.0216 10.5703 32.6277 10.5703 33.3688C10.5703 34.1099 11.1896 34.716 11.9468 34.716C12.704 34.716 13.3233 34.1099 13.3233 33.3688ZM28.1552 52.2859C27.4214 52.0949 26.6668 52.5202 26.4691 53.2409C26.2739 53.9591 26.7085 54.6976 27.4422 54.8912C28.1786 55.0822 28.9332 54.6568 29.1283 53.9361C29.3261 53.2179 28.8916 52.4794 28.1552 52.2859ZM23.3309 50.33C22.67 49.9581 21.8295 50.1798 21.4496 50.824C21.0697 51.4684 21.2935 52.2935 21.9518 52.6653C22.6102 53.0371 23.4533 52.8155 23.8331 52.1712C24.2131 51.5269 23.9893 50.7017 23.3309 50.33ZM17.2369 47.2179C16.7009 47.7451 16.7009 48.5982 17.2369 49.1228C17.7755 49.65 18.6472 49.65 19.1858 49.1228C19.7218 48.5982 19.7218 47.7451 19.1858 47.2179C18.6472 46.6907 17.7754 46.6907 17.2369 47.2179ZM14.1248 42.6694C13.4664 43.0412 13.24 43.8638 13.62 44.5082C13.9998 45.1525 14.843 45.3741 15.5013 45.0022C16.1596 44.6305 16.386 43.8052 16.0061 43.161C15.6262 42.5166 14.7831 42.2951 14.1248 42.6694ZM14.0051 38.4368C13.8099 37.7186 13.0553 37.2934 12.319 37.4844C11.5851 37.6779 11.148 38.4165 11.3457 39.1346C11.5435 39.8554 12.2981 40.2807 13.0318 40.0897C13.7657 39.8961 14.2029 39.1575 14.0051 38.4368ZM12.319 29.2533C13.0553 29.4444 13.8099 29.019 14.0051 28.3009C14.2028 27.5802 13.7657 26.8417 13.0319 26.6481C12.2981 26.4571 11.5435 26.8824 11.3458 27.6031C11.1481 28.3213 11.5852 29.0598 12.319 29.2533H12.319Z"fill="#B5FF5F"/></g>
                <defs> <clipPath id="clip0_2092_5"><rect width={47} height={46} fill="white"transform="translate(9.83594 10.3696)"/></clipPath></defs>
              </svg>
            ),
            title: "Time to refinance",
            description: "Your business and its needs change, and so do the finance products the lenders are offering. So it can never hurt to consider finding a more suitable loan, or a better deal."
        },
        {
            id:5,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67"fill="none"xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /><g clipPath="url(#clip0_2092_6)">
                  <path d="M51.0845 29.235C50.6245 27.165 49.7045 25.095 48.5545 23.255L50.8545 18.425L47.6345 15.205L42.8045 17.505C40.9645 16.355 39.1245 15.665 37.0545 15.205L35.4445 10.145H30.8445L29.0045 15.205C26.9345 15.665 25.0945 16.585 23.2545 17.735L18.4245 15.435L15.2045 18.425L17.5045 23.255C16.3545 25.095 15.6645 26.935 15.2045 29.005L10.1445 30.845V35.445L15.2045 37.285C15.6645 39.355 16.5845 41.425 17.5045 43.035L15.2045 47.865L18.4245 51.085L23.2545 48.785C25.0945 49.935 26.9345 50.855 29.0045 51.315L30.8445 56.145H35.4445L37.2845 51.085C37.9745 50.855 38.8945 50.625 39.5845 50.395L35.9045 46.715C27.1645 48.325 19.3445 41.885 19.3445 33.145C19.3445 25.555 25.5545 19.345 33.1445 19.345C41.6545 19.345 48.0945 26.935 46.7145 34.985L50.6245 38.895C50.8545 38.205 51.0845 37.745 51.0845 37.055L56.1445 35.445V30.845L51.0845 29.235Z"fill="#B5FF5F"/>
                  <path d="M55.2253 50.1649L41.6553 36.5949C44.8753 29.4649 38.2053 21.8749 30.8453 23.9449L34.9853 28.0849C36.8253 29.9249 36.8253 32.9149 34.9853 34.5249C33.3753 36.3649 30.1553 36.3649 28.5453 34.5249L24.4053 30.6149C22.3353 37.0549 29.0053 44.4149 36.5953 41.4249L50.1653 54.9949C51.5453 56.3749 53.6153 56.3749 54.9953 54.9949C56.3753 53.8449 56.3753 51.5449 55.2253 50.1649Z"fill="#B5FF5F"/></g><defs>
                  <clipPath id="clip0_2092_6"> <rect width={46}height={46} fill="white" transform="translate(10.1445 10.145)"/></clipPath></defs>
              </svg>

            ),
            title: "Brand new equipment",
            description: "Equipment or vehicle loans can help preserve cash flow while also helping to generate new income with a new asset. There are also possible tax benefits, and lenders often consider the asset as the collateral, so you don’t need to secure it against any personal property."
        }
    ];
    const bussinessStore = [
        {
            id: 1,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2093_7)">
                <path d="M51.5236 53.4489V20.3925H47.2427V53.4489H44.5466V10.145L21.7353 16.5408V25.703H31.4797V53.4489H28.7837V28.399H17.4608V53.4489H11.9336V56.145H54.3547V53.4489H51.5236ZM36.6061 38.0796V32.6569H39.3022V38.0796H36.6061ZM39.3022 42.5606V47.9834H36.6061V42.5606H39.3022ZM36.6061 28.1759V22.7531H39.3022V28.1759H36.6061ZM21.7742 32.6569H24.4702V38.0796H21.7742V32.6569ZM21.7742 42.5606H24.4702V47.9834H21.7742V42.5606Z" fill="#B5FF5F"/></g><defs>
                <clipPath id="clip0_2093_7"> <rect width={46} height={46} fill="white" transform="translate(10.1445 10.145)" /></clipPath></defs>
            </svg>

            ),
            title: "Business Structures",
            description: "The most common business structures are Sole Traders, Partnerships and Companies."
        },
        {
            id: 2,
            icon: (
              <svg width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="66.29" height="66.29" rx={16} fill="#1D4115" /> <g clipPath="url(#clip0_2093_8)">
                  <path d="M50.6445 20.8951H41.8946V19.145C41.8946 17.2148 40.3249 15.645 38.3945 15.645H27.8945C25.9643 15.645 24.3945 17.2147 24.3945 19.145V20.895H15.6446C13.7142 20.8951 12.1445 22.4648 12.1445 24.395V29.645C12.1445 31.5754 13.7142 33.1451 15.6446 33.1451H29.6446V32.27C29.6446 31.7864 30.036 31.395 30.5196 31.395H35.7696C36.2533 31.395 36.6446 31.7864 36.6446 32.27V33.1451H50.6447C52.5749 33.1451 54.1445 31.5754 54.1445 29.645V24.395C54.1445 22.4648 52.5749 20.8951 50.6445 20.8951ZM38.3945 20.8951H27.8945V19.145H38.3945V20.8951Z" fill="#B5FF5F"/>
                  <path d="M53.6592 34.0895C53.361 33.9417 53.0046 33.9759 52.7414 34.1758C52.1193 34.6466 51.3947 34.8953 50.6444 34.8953H36.6446V37.5203C36.6446 38.0039 36.2532 38.3953 35.7695 38.3953H30.5195C30.0359 38.3953 29.6445 38.0039 29.6445 37.5203V34.8953H15.6446C14.8943 34.8953 14.1697 34.6466 13.5476 34.1758C13.2835 33.9741 12.9281 33.9399 12.6298 34.0895C12.3325 34.2374 12.1445 34.5406 12.1445 34.8731V47.1453C12.1445 49.0756 13.7142 50.6454 15.6446 50.6454H50.6446C52.5749 50.6454 54.1446 49.0757 54.1446 47.1453V34.8731C54.1445 34.5406 53.9565 34.2374 53.6592 34.0895Z"fill="#B5FF5F"/>
                  </g><defs><clipPath id="clip0_2093_8"><rect width={42} height={42} fill="white"transform="translate(12.1445 12.145)"/></clipPath></defs>
              </svg>

            ),
            title: "Business Types",
            description: "There are all types of business but most fall into these general groups: Small to Medium Enterprises SME, Franchise, Online Business, Family Business, Independent Contractor and Importer/Exporter."
        }
    ];
  return (
    <div>
        <Banner
            badgeTitle="Fuel your business growth"
            title="Finance for my business"
            description="Before you start to decide on finance products and options, it’s a great idea to pin down exactly why you need finance and what type of business you are. This helps you to create clear objectives that can help paint a clear picture to lenders about why finance for your business makes sense."
            imageUrl="/finance-for-my-business.webp"
        />
        <RichText  
          nameClass="first-rich-text"
          title="What do you need finance for?"
          description="Why do you need the finance and what are you looking to fund? There are so many different reasons a business needs finance, and there’s often a different product for every single one. But most of them fall into these general areas."
          buttonText=""     
          buttonlink=""  
        />
        <Sixtipsforhomebuyers 
          title=""
          items={storeAboutSupport}
          description=""
          nameClass="second-six-tips"
          summery=""
          Badge=""
        />
        <RichText 
          nameClass="second-rich-text"
          buttonText=""     
          buttonlink="" 
          title="What type of business are you?"
          description="This is less about what industry you’re in, or how you are different to your competitors, but about how your business is structured – as this can also have an effect on how the lenders assess your applications and the type of finance they can offer you."
        />
        <Sixtipsforhomebuyers 
          title=""
          items={bussinessStore}
          description=""
          nameClass=""
          Badge=""
          summery="The business structure has an impact on your management, governance, tax obligations and exposure of your personal assets – all of which the lenders take into consideration when assessing your application. So not only does it help to speak to us, it’s a good idea to chat to a finance professional like your accountant who can advise you on how your business structure can impact your financial and taxation position when it comes to lending."
        />
        <InnerNeedHomeLoan
            heading ="Let’s talk business."
            description="Whatever your finance need or business type, we’re here to talk you through the options.Let’s help move your business towards your goals."
            buttonText="Speak to us today"
            buttonTextUrl="/Contact"
        />
        <Disclaimer 
          disclaimerTitle="DISCLAIMER"
          description="Please note we do not provide tax, legal or accounting advice. Any information provided is of a general nature only and does not take into account the objectives, financial situation or needs of any particular person and is not intended to provide, and should not be relied on for, tax, legal or accounting advice. You should consult your own tax, legal and accounting advisors before engaging in or considering the appropriateness of any transaction. "
        />
        

    </div>
  );
};

export default memo(Page);