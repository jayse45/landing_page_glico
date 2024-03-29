import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text, HowItWorks, BackButton } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboveOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex gap-[188px] items-center justify-center px-20 md:px-5 py-5 w-full" />
        <BackButton onClick={() => navigate("/")}/>
        <div className="bg-white-A700 md:h-[481px] h-[620px] sm:p-[] sm:pl-[] sm:pr-[] md:px-5 relative w-full">
          <Img
            className="h-[620px] m-auto sm:m-auto object-cover w-full"
            src="images/img_rectangle1_481x1440.png"
            alt="rectangleOne"
          />
          <div className="absolute bg-gradient1 flex flex-col gap-[25px] sm:h-auto h-full inset-[0] items-start justify-center m-auto p-[49px] sm:p-[49px] md:px-10 w-full">
            <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[151px] mt-[85px] mb-20 w-[538px] sm:w-full">
              <Text
                className="leading-[52.00px] max-w-[538px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 tracking-[-1.00px]"
                size="txtMontserratBold44"
              >
                GLICO Sunkwa 60 Years and Above Health Plan
              </Text>
              <Text
                className="leading-[24.00px] max-w-[538px] md:max-w-full text-[16px] text-white-A700"
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
          <div className="flex flex-col items-start justify-start mt-[3px] md:px-5 w-full md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full pl-20">
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
                    className="leading-[24.00px] max-w-[522px] md:max-w-full sm:p-[] sm:pr-[21px] text-[16px] text-gray-700"
                    size="txtMontserratRegular15"
                  >
                    Our meticulously crafted packages cater to the diverse needs
                    of individuals and families. Discover the distinct benefits
                    each package offers and choose the one that aligns perfectly
                    with your health and well-being goals.
                  </Text>
                </div>
              </div>
              <Img
                className="h-[415px] md:h-auto object-cover rounded-bl-[20px] rounded-tl-[20px]"
                src="images/img_rectangle25.png"
                alt="rectangleTwentyFive"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-[21px] grid md:grid-cols-2 grid-cols-3 justify-center sm:m-[] sm:ml-[] sm:mr-[] mt-20 sm:p-[] sm:pr-[21px] w-full px-32"
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
                  className="common-pointer cursor-pointer font-medium min-w-[134px] text-[15px] text-center transition duration-300 ease-in-out hover:bg-white-A700 hover:text-indigo-800 group flex justify-center items-center"
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
                  View Plan
                  <svg className="fill-white-A700 group-hover:fill-indigo-800" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9164 6.03125V15.7812C18.9164 15.9802 18.8374 16.1709 18.6968 16.3116C18.5561 16.4522 18.3653 16.5312 18.1664 16.5312C17.9675 16.5312 17.7768 16.4522 17.6361 16.3116C17.4954 16.1709 17.4164 15.9802 17.4164 15.7812V7.84156L6.69706 18.5619C6.55633 18.7026 6.36546 18.7817 6.16643 18.7817C5.96741 18.7817 5.77654 18.7026 5.63581 18.5619C5.49508 18.4211 5.41602 18.2303 5.41602 18.0312C5.41602 17.8322 5.49508 17.6414 5.63581 17.5006L16.3561 6.78125H8.41643C8.21752 6.78125 8.02675 6.70223 7.8861 6.56158C7.74545 6.42093 7.66643 6.23016 7.66643 6.03125C7.66643 5.83234 7.74545 5.64157 7.8861 5.50092C8.02675 5.36027 8.21752 5.28125 8.41643 5.28125H18.1664C18.3653 5.28125 18.5561 5.36027 18.6968 5.50092C18.8374 5.64157 18.9164 5.83234 18.9164 6.03125Z"/>
                  </svg>
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
                    className="leading-[24.00px] max-w-[356px] md:max-w-full text-[15px] text-white-A700 "
                    size="txtMontserratRegular15WhiteA700"
                  >
                    Comprehensive coverage with additional benefits for enhanced
                    protection.
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-medium min-w-[134px] text-[15px] text-center transition duration-300 ease-in-out group hover:bg-white-A700 hover:text-indigo-800 flex justify-center items-center"
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
                  View Plan
                  <svg className="fill-white-A700 group-hover:fill-indigo-800" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9164 6.03125V15.7812C18.9164 15.9802 18.8374 16.1709 18.6968 16.3116C18.5561 16.4522 18.3653 16.5312 18.1664 16.5312C17.9675 16.5312 17.7768 16.4522 17.6361 16.3116C17.4954 16.1709 17.4164 15.9802 17.4164 15.7812V7.84156L6.69706 18.5619C6.55633 18.7026 6.36546 18.7817 6.16643 18.7817C5.96741 18.7817 5.77654 18.7026 5.63581 18.5619C5.49508 18.4211 5.41602 18.2303 5.41602 18.0312C5.41602 17.8322 5.49508 17.6414 5.63581 17.5006L16.3561 6.78125H8.41643C8.21752 6.78125 8.02675 6.70223 7.8861 6.56158C7.74545 6.42093 7.66643 6.23016 7.66643 6.03125C7.66643 5.83234 7.74545 5.64157 7.8861 5.50092C8.02675 5.36027 8.21752 5.28125 8.41643 5.28125H18.1664C18.3653 5.28125 18.5561 5.36027 18.6968 5.50092C18.8374 5.64157 18.9164 5.83234 18.9164 6.03125Z"/>
                  </svg>
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
                  className="common-pointer cursor-pointer flex items-center justify-center font-medium min-w-[134px] text-[15px] text-center transition duration-300 ease-in-out hover:bg-white-A700 group hover:text-indigo-800"
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
                  View Plan 
                  <svg className="fill-white-A700 group-hover:fill-indigo-800" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9164 6.03125V15.7812C18.9164 15.9802 18.8374 16.1709 18.6968 16.3116C18.5561 16.4522 18.3653 16.5312 18.1664 16.5312C17.9675 16.5312 17.7768 16.4522 17.6361 16.3116C17.4954 16.1709 17.4164 15.9802 17.4164 15.7812V7.84156L6.69706 18.5619C6.55633 18.7026 6.36546 18.7817 6.16643 18.7817C5.96741 18.7817 5.77654 18.7026 5.63581 18.5619C5.49508 18.4211 5.41602 18.2303 5.41602 18.0312C5.41602 17.8322 5.49508 17.6414 5.63581 17.5006L16.3561 6.78125H8.41643C8.21752 6.78125 8.02675 6.70223 7.8861 6.56158C7.74545 6.42093 7.66643 6.23016 7.66643 6.03125C7.66643 5.83234 7.74545 5.64157 7.8861 5.50092C8.02675 5.36027 8.21752 5.28125 8.41643 5.28125H18.1664C18.3653 5.28125 18.5561 5.36027 18.6968 5.50092C18.8374 5.64157 18.9164 5.83234 18.9164 6.03125Z"/>
                  </svg>
                </Button>
              </div>
            </List>
            <div className="flex justify-center w-full">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[156px] md:ml-[0] mt-[60px] rounded-[24px] text-[15px] text-center transition duration-300 ease-in-out hover:bg-red-700 hover:text-white-A700"
                onClick={() => navigate("/frame370")}
                color="red_700"
                size="sm"
                variant="outline"
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </div>
        <HowItWorks/>
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
        <Footer className="bg-indigo-800 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboveOnePage;
