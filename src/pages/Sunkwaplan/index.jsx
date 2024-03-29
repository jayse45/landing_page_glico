import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text, HowItWorks } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import SunkwaplanCategoriescard from "components/SunkwaplanCategoriescard";
import { LastSection } from "components/LastSection";

// import { handleSectionNavigation } from "utils";

const SunkwaplanPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex gap-[188px] items-center justify-center px-20 md:px-5 py-5 w-full" />
        <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-start md:px-10 px-20 sm:px-5 py-3 w-full">
        {/* <Button
          className="common-pointer cursor-pointer flex items-center justify-start w-full ml-10 md:min-w-full"
          onClick={() => navigate("/")}
          leftIcon={
            <Img
              className="h-5 mt-px mr-2.5"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-gray-700 font-medium text-[15px] text-left">
            Back
          </div>
        </Button> */}
        </div>
        <div className="items-center justify-start w-full">
          <div className="h-[620px] sm:px-0 md:px-5 relative w-full">
            <Img
              className="h-[620px] m-auto object-cover w-full object-top"
              src="images/img_rectangle1.png"
              alt="rectangleOne"
            />
            <div className="absolute flex flex-col bg-gradient1 gap-7 h-full inset-[0] items-start justify-center p-[59px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[141px] mt-2.5 w-[538px] sm:w-full">
                <Text
                  className="leading-[52.00px] max-w-[538px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 tracking-[-1.00px]"
                  size="txtMontserratBold44"
                >
                  Bringing Quality Healthcare to Your Loved Ones in Ghana
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[442px] md:max-w-full text-[16px] text-white-A700"
                  size="txtMontserratMedium15WhiteA700"
                >
                  The GLICO Sunkwa Health Plan is a special package designed to
                  help Ghanaians living abroad purchase a health insurance plan
                  for their dependants and relatives residing in Ghana.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-800 h-[518px] sm:h-[900px] sm:p-[] pl-[78px] md:px-5 relative w-full">
 main
          <div className="absolute h-[518px] sm:hidden inset-y-[0] my-auto right-[0] w-[22%]">
            <div className="absolute flex sm:hidden inset-y-[0] left-[0] my-auto w-[82%]">
              <Img
                className="h-[518px] sm:hidden my-auto"
                src="images/img_vector1.svg"
                alt="vectorOne"
              />
              <Img
                className="h-[518px] sm:hidden ml-[-61.24px] my-auto z-[0]"
                src="images/img_vector2.svg"
                alt="vectorTwo"
              />
            </div>
            <Img
              className="absolute h-[518px] sm:hidden inset-y-[0] my-auto object-cover right-[0]"
              src="images/img_vector3.png"
              alt="vectorThree"
            />
          </div>

          <div className="absolute flex flex-col gap-6 sm:gap-6 inset-x-[0] items-center justify-start max-w-[846px] mx-auto sm:relative top-[13%] sm:top-[4%] w-full">
 main
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-full"
              size="txtMontserratBold32WhiteA700"
            >
              Why Choose GLICO Sunkwa Health Plan?
            </Text>
            <Text
              className="leading-[24.00px] max-w-[846px] md:max-w-full text-[15px] text-center text-white-A700"
              size="txtMontserratRegular15WhiteA700"
            >
              <>
                Choose GLICO Sunkwa Health Plan for tailored coverage at every
                life stage, user-friendly online management, specialized care
                for seniors, the trusted legacy of GLICO, and comprehensive
                in-patient and out-patient services, all backed by dedicated
                customer support. Your family&#39;s well-being deserves nothing
                less.
              </>
            </Text>
          </div>
          <List

            className="absolute bottom-[13%] sm:flex-col flex-row gap-[11px] grid md:grid-cols-2 grid-cols-4 h-[198px] inset-x-[0] justify-start max-w-[1284px] mx-auto sm:relative w-full sm:bottom-0 sm:h-[300px] sm:mt-16"
 main
            orientation="horizontal"
          >
            <div className="bg-indigo-600 flex flex-1 flex-col h-full items-start justify-start p-5 rounded-[16px] w-full">
              <div className="flex flex-col gap-[22px] h-full items-start justify-start w-full">
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_atomsvgrepocom.svg"
                  alt="atomsvgrepocom"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700 w-full"
                    size="txtMontserratSemiBold18WhiteA700"
                  >
                    Comprehensive Coverage
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[272px] md:max-w-full text-[15px] text-white-A700"
                    size="txtMontserratRegular15WhiteA700"
                  >
                    Every age group gets coverage tailored to their specific
                    needs.
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-indigo-600 flex flex-1 flex-col h-full items-start justify-start p-5 rounded-[16px] w-full">
              <div className="flex flex-col gap-[22px] h-full items-start justify-between w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_icons8customersupport1.svg"
                  alt="icons8customers"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700 w-full"
                    size="txtMontserratSemiBold18WhiteA700"
                  >
                    24/7 Support
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[272px] md:max-w-full text-[15px] text-white-A700"
                    size="txtMontserratRegular15WhiteA700"
                  >
                    Always at your disposal for support and concerns both here
                    and back home
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-indigo-600 flex flex-1 flex-col h-full items-start justify-start p-5 rounded-[16px] w-full">
              <div className="flex flex-col gap-[22px] h-full items-start justify-between w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_settings_white_a700.svg"
                  alt="settings"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700 w-full"
                    size="txtMontserratSemiBold18WhiteA700"
                  >
                    Flexibility
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[272px] md:max-w-full text-[15px] text-white-A700"
                    size="txtMontserratRegular15WhiteA700"
                  >
                    Mix and match plans for different family members, ensuring
                    everyone receives optimal care.
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-indigo-600 flex flex-1 flex-col h-full items-start justify-start p-5 rounded-[16px] w-full">
              <div className="flex flex-col gap-[22px] h-full items-start justify-between w-full">
                <Img
                  className="h-7 w-[30px]"
                  src="images/img_layer1.svg"
                  alt="layerOne"
                />
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-lg text-white-A700 w-full"
                    size="txtMontserratSemiBold18WhiteA700"
                  >
                    Peace of Mind
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[272px] md:max-w-full text-[15px] text-white-A700"
                    size="txtMontserratRegular15WhiteA700"
                  >
                    From the energetic young ones to the wise elders, you can
                    rest easy knowing everyone is protected.
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div

          className="common-pointer bg-white-A700 flex flex-col items-center justify-start p-[67px] md:px-10 sm:px-5 w-full sm:pt-[35px]"
 main
          id="block1"
        >
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1292px] mb-[3px] mt-[19px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col gap-[52px] items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[168px] rounded-[16px] text-center text-xs"
                  color="red_50"
                  size="xs"
                  variant="fill"
                >
                  Sunkwa Plan Packages
                </Button>
                <div className="flex flex-col gap-6 items-start justify-start w-[522px] sm:w-full">
                  <Text
                    className="leading-[36.00px] max-w-[522px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[-1.00px]"
                    size="txtMontserratBold32"
                  >
                    Secure Health Coverage for Every Generation!
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[522px] md:max-w-full text-[15px] text-gray-700"
                    size="txtMontserratRegular15Gray700"
                  >
                    You have the power to purchase health plans for everyone,
                    across all age ranges! Our health coverage is tailored to
                    meet the diverse needs of every individual, making health
                    protection accessible to all.
                  </Text>
                </div>
              </div>
              <SunkwaplanCategoriescard
                className="flex flex-col gap-[19px] items-start justify-start w-auto sm:w-full bg-white-A700 h-[350px]"
                onClick={() => navigate("/aboveone")}
              />


            </div>

            <div className="md:h-[534px] h-[589px] relative w-[48%] md:w-full sm:hidden">
 main
              <Img
                className="absolute sm:h-3/4 h-[534px] inset-y-[0] left-[6%] my-auto object-cover rounded-[32px] w-[77%] sm:w-[90%]"
                src="images/img_rectangle12.png"
                alt="rectangleTwelve"
              />
              <Img
                className="absolute bottom-[0] h-[183px] object-cover right-[0] rounded-[20px] w-[183px]"
                src="images/img_rectangle13.png"
                alt="rectangleThirteen"
              />
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-32 items-center justify-start left-[0] p-8 sm:px-5 rounded-[20px] top-[0] w-32"
                style={{ backgroundImage: "url('images/img_group373.svg')" }}
              >
                <Img
                  className="h-[62px] w-[62px]"
                  src="images/img_television.svg"
                  alt="television"
                />
              </div>
            </div>
          </div>
        </div>
        <HowItWorks/>
        <LastSection/>
        <Footer className="bg-indigo-800 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SunkwaplanPage;
