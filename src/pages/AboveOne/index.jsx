import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const AboveOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex gap-[188px] items-center justify-center px-20 md:px-5 py-5 w-full" />
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center sm:justify-start min-w-[1440px] md:min-w-full"
          onClick={() => navigate("/sunkwaplan")}
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
          <div className="font-medium sm:justify-start text-[15px] text-left">
            Back
          </div>
        </Button>
        <div className="bg-white-A700 md:h-[481px] h-[482px] sm:p-[] sm:pl-[] sm:pr-[] md:px-5 relative w-full">
          <Img
            className="h-[481px] m-auto sm:m-auto object-cover w-full"
            src="images/img_rectangle1_481x1440.png"
            alt="rectangleOne"
          />
          <div className="absolute bg-gradient1  flex flex-col sm:h-auto h-max inset-[0] items-start justify-center m-auto p-[122px] sm:p-[49px] md:px-10 w-full">
            <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[78px] mt-3 w-[538px] sm:w-full">
              <Text
                className="leading-[52.00px] max-w-[538px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 tracking-[-1.00px]"
                size="txtMontserratBold44"
              >
                GLICO Sunkwa 60 Years and Above Health Plan
              </Text>
              <Text
                className="leading-[24.00px] max-w-[538px] md:max-w-full text-[15px] text-white-A700"
                size="txtMontserratMedium15WhiteA700"
              >
                Embrace the golden years with the GLICO Sunkwa Health Plan
                designed exclusively for individuals Over 60 Years. This
                specialized plan offers tailored coverage to address the unique
                health considerations and well-being of seniors.
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 sm:bottom-[] flex flex-col gap-[42px] items-center justify-start p-[61px] md:px-10 sm:px-5 sm:top-[] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-800 tracking-[-1.00px]"
            size="txtMontserratBold32"
          >
            Why you need this
          </Text>
          <div className="gap-5 grid md:grid-cols-2 grid-cols-4 h-[177px] md:h-auto items-start justify-start max-w-7xl mx-auto w-full">
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-3.5 h-full items-center justify-start p-5 rounded-[24px] shadow-bs w-full">
              <Img
                className="h-8 w-8"
                src="images/img_icons8doctorsbag.svg"
                alt="icons8doctorsba"
              />
              <Text
                className="leading-[24.00px] max-w-[265px] md:max-w-full text-center text-indigo-800 text-lg"
                size="txtMontserratSemiBold18"
              >
                Dedicated In-Patient and Out-Patient Services
              </Text>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-3.5 h-full items-center justify-start p-5 rounded-[24px] shadow-bs w-full">
              <Img className="h-8 w-8" src="images/img_user.svg" alt="user" />
              <Text
                className="capitalize leading-[24.00px] max-w-[265px] md:max-w-full text-center text-indigo-800 text-lg"
                size="txtMontserratSemiBold18"
              >
                designed to address the unique health considerations of seniors
              </Text>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-3.5 h-full items-center justify-start p-5 rounded-[24px] shadow-bs w-full">
              <Img
                className="h-8 w-8"
                src="images/img_icons8medicaldoctor.svg"
                alt="icons8medicaldo"
              />
              <Text
                className="leading-[24.00px] max-w-[265px] md:max-w-full text-center text-indigo-800 text-lg"
                size="txtMontserratSemiBold18"
              >
                Enhanced Access to Specialists
              </Text>
            </div>
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col gap-3.5 h-full items-center justify-start p-5 rounded-[24px] shadow-bs w-full">
              <Img
                className="h-9 w-9"
                src="images/img_layer1_indigo_800_1.svg"
                alt="layerOne"
              />
              <Text
                className="leading-[24.00px] max-w-[265px] md:max-w-full text-center text-indigo-800 text-lg"
                size="txtMontserratSemiBold18"
              >
                User-Friendly Online Management
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-end justify-end sm:p-[] sm:pb-[] pl-[21px] sm:pl-[] sm:pr-[] sm:pt-[] py-[21px] w-full">
          <div className="flex flex-col items-start justify-start mt-[3px] md:px-5 w-[96%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-[23px] items-start justify-start">
                <Button
                  className="cursor-pointer font-semibold min-w-[152px] rounded-[16px] text-center text-xs"
                  color="red_50"
                  size="xs"
                  variant="fill"
                >
                  Packages & Benefits
                </Button>
                <div className="flex flex-col gap-6 items-start justify-start w-[522px] sm:w-full">
                  <Text
                    className="leading-[36.00px] max-w-[522px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[-1.00px]"
                    size="txtMontserratBold32"
                  >
                    Uncover the benefits this plan has to offer
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[522px] md:max-w-full sm:p-[] sm:pr-[21px] text-[15px] text-gray-700"
                    size="txtMontserratRegular15Gray700"
                  >
                    Our meticulously crafted packages cater to the diverse needs
                    of individuals and families. Discover the distinct benefits
                    each package offers and choose the one that aligns perfectly
                    with your health and well-being goals.
                  </Text>
                </div>
              </div>
              <Img
                className="h-[315px] md:h-auto object-cover rounded-bl-[20px] rounded-tl-[20px]"
                src="images/img_rectangle25.png"
                alt="rectangleTwentyFive"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-[21px] grid md:grid-cols-2 grid-cols-3 justify-start sm:m-[] max-w-7xl sm:ml-[] sm:mr-[] mt-20 sm:p-[] sm:pr-[21px] w-full"
              orientation="horizontal"
            >
              <div className="bg-indigo-800 flex flex-1 flex-col gap-4 items-start justify-start p-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl tracking-[-1.00px] w-full"
                    size="txtMontserratBold20WhiteA700"
                  >
                    Enhanced
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[356px] md:max-w-full text-[15px] text-white-A700"
                    size="txtMontserratRegular15WhiteA700"
                  >
                    Affordable coverage with essential benefits for basic health
                    needs.
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[134px] rounded-lg"
                  onClick={() => navigate("/abovethree")}
                  rightIcon={
                    <Img
                      className="h-6 ml-2.5"
                      src="images/img_arrowleft.svg"
                      alt="arrow_left"
                    />
                  }
                  color="white_A700"
                  size="sm"
                  variant="outline"
                >
                  <div className="font-medium text-[15px] text-left">
                    View Plan
                  </div>
                </Button>
              </div>
              <div className="bg-indigo-800 flex flex-1 flex-col gap-4 items-start justify-start p-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl tracking-[-1.00px] w-full"
                    size="txtMontserratBold20WhiteA700"
                  >
                    Enhanced Plus
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[356px] md:max-w-full text-[15px] text-white-A700"
                    size="txtMontserratRegular15WhiteA700"
                  >
                    Comprehensive coverage with additional benefits for enhanced
                    protection.
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[134px] rounded-lg"
                  onClick={() => navigate("/abovenine")}
                  rightIcon={
                    <Img
                      className="h-6 ml-2.5"
                      src="images/img_arrowleft.svg"
                      alt="arrow_left"
                    />
                  }
                  color="white_A700"
                  size="sm"
                  variant="outline"
                >
                  <div className="font-medium text-[15px] text-left">
                    View Plan
                  </div>
                </Button>
              </div>
              <div className="bg-indigo-800 flex flex-1 flex-col gap-4 items-start justify-start p-5 rounded-[20px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl tracking-[-1.00px] w-full"
                    size="txtMontserratBold20WhiteA700"
                  >
                    Ultimate
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[356px] md:max-w-full text-[15px] text-white-A700"
                    size="txtMontserratRegular15WhiteA700"
                  >
                    Premium coverage offering extensive benefits for
                    comprehensive health security.
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[134px] rounded-lg"
                  onClick={() => navigate("/above")}
                  rightIcon={
                    <Img
                      className="h-6 ml-2.5"
                      src="images/img_arrowleft.svg"
                      alt="arrow_left"
                    />
                  }
                  color="white_A700"
                  size="sm"
                  variant="outline"
                >
                  <div className="font-medium text-[15px] text-left">
                    View Plan
                  </div>
                </Button>
              </div>
            </List>
            <Button
              className="common-pointer cursor-pointer font-medium min-w-[156px] md:ml-[0] ml-[562px] mt-[60px] rounded-[24px] text-[15px] text-center"
              onClick={() => navigate("/frame370")}
              color="red_700"
              size="sm"
              variant="outline"
            >
              Compare Plans
            </Button>
          </div>
        </div>
        <div className="bg-gray-50_01 flex flex-col items-center justify-end p-14 md:px-10 sm:px-5 sm:relative w-full">
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
                  className="sm:flex-col flex-row gap-[25px] grid md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs1 w-96 sm:w-full">
                    <Text
                      className="leading-[24.00px] text-[15px] text-black-900"
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
                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs1 w-96 sm:w-full">
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
                  <div className="bg-white-A700 flex sm:flex-1 flex-col items-center justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs1 w-96 sm:w-full">
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
                <div className="flex md:flex-col flex-row gap-[25px] items-center justify-center w-[66%] md:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 rounded-lg shadow-bs1 w-96 sm:w-full">
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
                  <Input
                    name="description_Three"
                    placeholder="Instant Confirmation
Receive instant confirmation and policy details via email."
                    className="leading-[24.00px] p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                    wrapClassName="shadow-bs1 w-[49%] md:w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[336px] md:px-5 relative w-full">
            <Img
              className="h-[336px] m-auto object-cover w-full"
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

export default AboveOnePage;
