import { useEffect, useState, React } from "react";

import { Img, List, Text } from "components";
import { calculateTimeLeft } from '../../utils';

const DesktopThreePage = () => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    }, [timeLeft]);
  
  return (
    <>
      <div
        className="coming-soon bg-cover bg-no-repeat bg-white-A700 flex flex-col font-montserrat h-screen items-center justify-start  mx-auto p-5 w-full sm:p-0"
        
      >
        <div className="flex flex-row gap-x-[60vw] items-start  max-w-[1163px] w-full sm-mt-[-330px]">
            

            <Img
            className="h-[18px] md:h-auto object-cover w-[180px]"
            src="images/img_glicohealthcarelogo300x301.png"
            alt="glicohealthcare"
            />

        <div className="flex flex-col items-center justify-end w-auto">
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
          <a href="https://web.facebook.com/GLICOHealthcare/?_rdc=1&_rdr">

            <Img
                className="h-5 w-5"
                src="images/img_icons8facebook2_indigo_800.svg"
                alt="icons8facebookTwo"
                />
          
          </a>

          <a href="https://instagram.com/glicohealth">
            <Img
                className="h-5 w-5"
                src="images/img_icons8instagramnew_indigo_800.svg"
                alt="icons8instagram"
                />
          </a>
            
          <a href="https://twitter.com/glicohealth">

            <Img
                className="h-5 w-5"
                src="images/img_icons8twitter1_indigo_800.svg"
                alt="icons8twitterOne"
                />
          </a>
        
          <a href="https://twitter.com/glicohealth">

          <Img
              className="h-5 w-5"
              src="images/img_icons8linkedin2filled_indigo_800.svg"
              alt="icons8linkedinTwo"
            />


          </a>
          </div>
        </div>
      </div>
        <div className="flex flex-col items-start justify-start sm:justify-end max-w-[auto] lg-mt-[0] mx-auto md:px-5 w-full sm:h-full  sm:bg-gradient2">
          
          <div className="flex flex-col gap-5 items-start justify-center max-w-[630px] md:ml-[0] ml-[43px] mt-[10vh] w-full">
            <div className="flex flex-col gap-5 items-start justify-center w-full">
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-lg text-red-700 w-full sm:text-white-A700 sm:font-bold"
                  size="txtMontserratBold18"
                >
                  
                </Text>
                <Text
                  className="max-w-[630px] md:max-w-full sm:text-[23px] md:text-[44px] text-[52px] text-indigo-800 sm:text-white-A700 sm:font-bold"
                  size="txtMontserratBold52"
                >
                 <strong> GLICO SUNKWA is finally here</strong>
                </Text>
              </div>
              <Text
                className="max-w-[630px] md:max-w-full text-blue_gray-700 text-lg sm:text-xs"
                size="txtMontserratMedium18"
              >
                <>
                  Your family abroad can now cover your medical needs <br />
                  .....as if they were here
                </>
              </Text>
            </div>
            
          </div>
          <Text
            className="md:ml-[0] ml-[43px]  text-base text-blue_gray-500 sm:text-xs"
            size="txtMontserratBold16"
          >
            Abusua apɔ mu din nti!
          </Text>

          <div className="md:ml-[0] ml-[43px] mt-[54px] text-base text-blue_gray-500 ">
                <Text
                  className="max-w-[630px] md:max-w-full sm:text-[18px] md:text-[24px] text-[32px] text-indigo-800 sm:text-white-A700 sm:font-bold"
                  size="txtMontserratBold52"
                >
                 <strong> Need more information?</strong>
                </Text>
                
              <Text
                  className="max-w-[630px] md:max-w-full sm:text-[12px] md:text-[14px] text-[22px] text-[#e61c23] sm:text-white-A700 sm:font-bold"
                  size="txtMontserratBold52"
                >
                 <span className="pr-4"><strong> 030 274 6500</strong></span> <span><strong> 030 225 5742</strong></span>
                </Text>
                        <Text
                    className="md:ml-[0]  mt-[24px] text-base text-blue_gray-500  sm:text-xs"
                    size="txtMontserratBold16">
                    Contact Customer Experience Center For More Info.
                </Text>
        </div>
        </div>

        
      </div>
    </>
  );
};

export default DesktopThreePage;
