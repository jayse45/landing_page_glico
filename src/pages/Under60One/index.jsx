import React from "react";

import { useNavigate } from "react-router-dom";

import { BackButton, Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { LastSection } from "components/LastSection";
import Tabs from "components/Tabs";

const Under60OnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full overflow-x-hidden">
        <Header className="bg-white-A700 flex gap-[188px] items-center justify-center px-20 md:px-5 py-5 w-full" />
        <BackButton onClick={() => navigate("/under60seven")} />
        <div className="bg-white-A700 flex flex-col items-end justify-start md:pl-10 pl-[103px] w-full sm:pl-4">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[62px] items-center justify-end w-full sm:flex-col-reverse">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[42%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[-1.00px]"
                size="txtMontserratBold32"
              >
                Enhanced Plus
              </Text>
              <Text
                className="leading-[24.00px] mt-[27px] text-[15px] text-gray-700 w-full"
                size="txtMontserratRegular15Gray700"
              >
                The Enhanced Plus Package for the under-60 crowd is the ultimate health coverage solution. 
                Providing comprehensive protection that's still easy on your wallet. It's the smart choice 
                for those who want a little extra peace of mind, blending top-notch coverage with affordability 
                – because staying healthy shouldn't be a luxury.
              </Text>
              <Text
                className="mt-14 text-[15px] text-indigo-800"
                size="txtMontserratSemiBold15Indigo800"
              >
                Key Features
              </Text>
              <List
                className="sm:flex-col flex-row gap-[9px] grid sm:grid-cols-1 grid-cols-2 justify-start mt-[25px] w-[555px] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-center justify-start p-1 w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="flex-1 text-[15px] text-gray-700 w-auto"
                      size="txtMontserratRegular15Gray700"
                    >
                      Essential Coverage{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="flex-1 text-[15px] text-gray-700 w-auto"
                      size="txtMontserratRegular15Gray700"
                    >
                      Affordable Premiums
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="flex-1 text-[15px] text-gray-700 w-auto"
                      size="txtMontserratRegular15Gray700"
                    >
                      Network Access
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="flex-1 text-[15px] text-gray-700 w-auto"
                      size="txtMontserratRegular15Gray700"
                    >
                      Versatility
                    </Text>
                  </div>
                </div>
              </List>
              <Button
                className="cursor-pointer font-medium min-w-[134px] mt-[46px] text-[15px] text-center transition duration-300 ease-in-out hover:bg-indigo-800 hover:text-white-A700 sm:mb-4"
                shape="round"
                color="blue_gray_101"
                size="sm"
                variant="outline"
                onClick={() => navigate("/payments")}
              >
                Purchase Plan
              </Button>
            </div>
            <Img
              className="md:flex-1 h-[563px] sm:h-auto object-cover w-[54%] md:w-full object-top"
              src="images/img_rectangle28_563x720.png"
              alt="rectangleTwentyEight"
            />
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-end py-[33px] w-full">
          <Text
            className="mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-800 tracking-[-1.00px]"
            size="txtMontserratBold32"
          >
            Benefits
          </Text>
          <Tabs out_benefit={"6,000"} eye_amount={"1,000"} type={"Enhanced Plus"} dental_amount={"1,000"} in_benefit={"50,000"} cancer_amount={"40,000"}/>
        </div>
        <LastSection/>
        <Footer className="bg-indigo-800 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Under60OnePage;
