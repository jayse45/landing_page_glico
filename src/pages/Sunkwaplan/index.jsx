import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";
import SunkwaplanCategoriescard from "components/SunkwaplanCategoriescard";

import { handleSectionNavigation } from "utils";

const SunkwaplanPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex gap-[188px] sm:gap-[18px] items-center justify-center px-20 md:px-5 py-5 w-full" />
        <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-start md:px-10 px-20 sm:px-5 py-3 w-full">
          <Img
            className="h-5 w-5"
            src="images/img_arrowdown.svg"
            alt="arrowdown"
          />
          <Text
            className="text-[15px] text-gray-700 w-auto"
            size="txtMontserratMedium15Gray700"
          >
            Back
          </Text>
        </div>

        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <div className="h-[481px] sm:px-0 md:px-5 relative w-full">
 main
            <Img
              className="h-[481px] m-auto object-cover w-full"
              src="images/img_rectangle1_481x1440_1.png"
              alt="rectangleOne"
            />
            <div className="absolute bg-gradient1  flex flex-col sm:gap-[26px] h-full inset-[0] items-start justify-center m-auto p-[102px] sm:p-[54px] md:px-10 w-full">
              <div className="flex flex-col items-start justify-start mb-[52px] md:ml-[0] ml-[98px] w-[556px] sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px] w-full"
                      size="txtMontserratBold32WhiteA700"
                    >
                      Bringing Quality{" "}
                    </Text>
                    <div className="flex flex-col items-center justify-start w-[74%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px] w-[407px]"
                          size="txtMontserratBold32WhiteA700"
                        >
                          Hospital Accommodation
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[36.00px] max-w-[556px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-1.00px]"
                      size="txtMontserratBold32WhiteA700"
                    >
                      for your family back home, as if you were there
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] max-w-[556px] md:max-w-full text-[15px] text-white-A700"
                    size="txtMontserratMedium15WhiteA700"
                  >
                    Sunkwa Health Plan offers your loved ones a tailored
                    package, 24/7 support and access to the best health care
                    services back home.
                  </Text>
                </div>
              </div>

              <Button
                onClick={() => {
                  handleSectionNavigation("block1");
                }}
                className="cursor-pointer min-w-[133px] md:ml-[0] ml-[143px] text-[15px] text-center"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Purchase Plan
              </Button>
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
                className="h-[518px] sm:hidden ml-[-61.24px] my-auto z-[1]"
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
                className="flex flex-col gap-[19px] items-start justify-start w-auto sm:w-full"
                onClick={() => navigate("/above")}
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
        <div className="bg-gray-50_01 flex flex-col items-center justify-end p-14 md:px-10 sm:px-5 w-full sm:pt-[36px]">
          <div className="flex flex-col gap-7 items-center justify-start max-w-[1204px] mx-auto w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-800 w-full"
              size="txtMontserratBold32"
            >
              How it Works
            </Text>
            <div className="flex flex-col items-start justify-center w-full">
              <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >

                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full sm:items-start">
 main
                    <Text
                      className="leading-[24.00px] text-[15px] text-black-900 sm:w-full"
                      size="txtMontserratRegular15"
                    >
                      <span className="text-indigo-800 font-montserrat text-left font-semibold">
                        <>
                        Select Your Age-Specific Package
                          <br />
                        </>
                      </span>
                      <span className="text-gray-700 font-montserrat text-left font-normal">
                      <>
                          Under 60 Years
                          <br />
                          60 Years and Above
                        </>
                      </span>
                    </Text>
                  </div>

                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full sm:items-start">
 main
                    <Text
                      className="leading-[24.00px] text-[15px] text-black-900"
                      size="txtMontserratRegular15"
                    >
                      <span className="text-indigo-800 font-montserrat text-left font-semibold">
                        <>
                          Choose Your Plan
                          <br />
                        </>
                      </span>
                      <span className="text-gray-700 font-montserrat text-left font-normal">
                        Select a plan that fits the healthcare needs of your
                        family.
                      </span>
                    </Text>
                  </div>

                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full sm:items-start">
 main
                    <Text
                      className="leading-[24.00px] text-[15px] text-black-900"
                      size="txtMontserratRegular15"
                    >
                      <span className="text-indigo-800 font-montserrat text-left font-semibold">
                        Provide Details
                      </span>
                      <span className="text-indigo-800 font-montserrat text-left font-normal">
                        <>
                          {" "}
                          <br />
                        </>
                      </span>
                      <span className="text-gray-700 font-montserrat text-left font-normal">
                        Fill in the necessary information about your dependents
                        in Ghana.
                      </span>
                    </Text>
                  </div>
                </List>

                <div className="flex md:flex-col flex-row gap-[25px] items-center justify-center w-[66%] md:w-full sm:items-start">
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full">
 main
                    <Text
                      className="leading-[24.00px] text-[15px] text-black-900"
                      size="txtMontserratRegular15"
                    >
                      <span className="text-indigo-800 font-montserrat text-left font-semibold">
                        <>
                          Make Payment
                          <br />
                        </>
                      </span>
                      <span className="text-gray-700 font-montserrat text-left font-normal">
                        Securely make your payment online using our convenient
                        payment options.
                      </span>
                    </Text>
                  </div>

                </div>
                <div className="flex md:flex-col flex-row gap-[25px] items-center justify-center w-[66%] md:w-full sm:items-start">
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full">
                    <Text
                      className="leading-[24.00px] text-[15px] text-black-900"
                      size="txtMontserratRegular15Black900"
                    >
                      <span className="text-indigo-800 font-montserrat text-left font-semibold">
                        <>
                          Instant Confirmation
                          <br />
                        </>
                      </span>
                      <span className="text-gray-700 font-montserrat text-left font-normal">
                        Receive instant confirmation and policy details via email.
                      </span>
                    </Text>
                  </div>
 main
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[336px] md:px-5 relative w-full sm:px-0">
            <Img

              className="h-[336px] m-auto object-cover w-full sm:object-[25%]"
 main
              src="images/img_rectangle2.png"
              alt="rectangleTwo"
            />
            <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[67px] md:px-10 sm:px-5 w-full">
              <Text
                className="md:ml-[0] ml-[122px] mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratSemiBold32"
              >
                Need more information?
              </Text>
              <Text
                className="leading-[24.00px] md:ml-[0] ml-[122px] mt-4 text-[15px] text-white-A700 w-[33%] sm:w-full"
                size="txtMontserratRegular15WhiteA700"
              >
                Get in touch with our team know about all that Sunkwa has for
                you
              </Text>
              <div className="flex flex-row gap-[27px] items-end justify-start md:ml-[0] ml-[123px] mt-[15px] w-auto">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtMontserratSemiBold22"
                >
                  030 274 6500
                </Text>
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtMontserratSemiBold22"
                >
                  030 225 5742
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[123px] mt-[18px] text-[15px] text-white-A700"
                size="txtMontserratMedium15WhiteA700"
              >
                Contact Customer Experience Center for more info.
              </Text>
            </div>
          </div>
        </div>
        <Footer1 className="bg-indigo-800 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SunkwaplanPage;
