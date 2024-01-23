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
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-montserrat h-[1024px] items-center justify-end mx-auto p-5 w-full"
        style={{ backgroundImage: "url('images/img_desktopthree.png')", backgroundRepeat:"no-repeat" }}
      >
        <div className="flex flex-col items-start justify-start max-w-[1263px] lg-mt-[33px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-2.5 items-start justify-between max-w-[1263px] w-full">
            <Img
              className="h-[18px] md:h-auto object-cover w-[180px]"
              src="images/img_glicohealthcarelogo300x301.png"
              alt="glicohealthcare"
            />
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_icons8facebook2_indigo_800.svg"
                  alt="icons8facebookTwo"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_icons8instagramnew_indigo_800.svg"
                  alt="icons8instagram"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_icons8twitter1_indigo_800.svg"
                  alt="icons8twitterOne"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_icons8linkedin2filled_indigo_800.svg"
                  alt="icons8linkedinTwo"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-11 items-start justify-center max-w-[630px] md:ml-[0] ml-[3px] mt-[209px] w-full">
            <div className="flex flex-col gap-5 items-start justify-center w-full">
              <div className="flex flex-col gap-3 items-start justify-center w-full">
                <Text
                  className="text-lg text-red-700 w-full"
                  size="txtMontserratBold18"
                >
                  Asomdwe aba fie
                </Text>
                <Text
                  className="max-w-[630px] md:max-w-full sm:text-[38px] md:text-[44px] text-[52px] text-indigo-800"
                  size="txtMontserratBold52"
                >
                  We are going live at 5pm
                </Text>
              </div>
              <Text
                className="max-w-[630px] md:max-w-full text-blue_gray-700 text-lg"
                size="txtMontserratMedium18"
              >
                <>
                  Your family abroad can now cover your medical needs <br />
                  .....as if they were here
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-11 items-start justify-center w-auto sm:w-full">
              <List
                className="sm:flex-col flex-row gap-[25px] grid grid-cols-4 h-[120px] justify-start w-[555px] sm:w-full"
                orientation="horizontal"
              >
                <div className="bg-indigo-800_16 flex flex-col gap-[5px] h-full items-center justify-center rounded-[12px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-indigo-800 w-auto"
                    size="txtMontserratBold40"
                  >
                    {String(timeLeft.days).padStart(2, '0')}
                  </Text>
                  <Text
                    className="text-[15px] text-blue_gray-500 text-center w-auto"
                    size="txtMontserratMedium15Bluegray500"
                  >
                    DAYS
                  </Text>
                </div>
                <div className="bg-indigo-800_16 flex flex-col gap-[5px] h-full items-center justify-center rounded-[12px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-indigo-800 w-auto"
                    size="txtMontserratBold40"
                  >
                    {String(timeLeft.hours).padStart(2, '0')}
                  </Text>
                  <Text
                    className="text-[15px] text-blue_gray-500 text-center w-auto"
                    size="txtMontserratMedium15Bluegray500"
                  >
                    HOURS
                  </Text>
                </div>
                <div className="bg-indigo-800_16 flex flex-col gap-[5px] h-full items-center justify-center rounded-[12px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-indigo-800 w-auto"
                    size="txtMontserratBold40"
                  >
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </Text>
                  <Text
                    className="text-[15px] text-blue_gray-500 text-center w-auto"
                    size="txtMontserratMedium15Bluegray500"
                  >
                    MINUTES
                  </Text>
                </div>
                <div className="bg-indigo-800_16 flex flex-col gap-[5px] h-full items-center justify-center rounded-[12px] w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-indigo-800 w-auto"
                    size="txtMontserratBold40"
                  >
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </Text>
                  <Text
                    className="text-[15px] text-blue_gray-500 text-center w-auto"
                    size="txtMontserratMedium15Bluegray500"
                  >
                    SECONDS
                  </Text>
                </div>
              </List>
              <Text
                className="text-blue_gray-700 text-center text-lg w-auto"
                size="txtMontserratBold18Bluegray700"
              >
                To Launch
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[3px] mt-[244px] text-base text-blue_gray-500"
            size="txtMontserratBold16"
          >
            Sunkwa wɔ hɔ aa, efie yɛ dɛ!
          </Text>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
