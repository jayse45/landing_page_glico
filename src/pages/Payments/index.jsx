import React, { useState } from "react";
import { Button, CheckBox, Img, Line, Text, Input, List } from "components";
import StepWizard from "react-step-wizard";
import Header from "components/Header";





const ActionButtons = (props) => {
  const handleNext = () => {
    props.nextStep();
  };
  

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        
        <div className="md:h-28 h-9 mt-[76px] md:px-5 relative w-[37%] sm:w-full">
          <Img
                      className="h-5 w-5"
                      src="images/new1.svg"
                      alt="settings"
                    />
        </div>
        <div className="flex flex-col gap-2 items-center justify-start mt-[55px] md:px-5 w-auto sm:w-full">
          <Text
            className="leading-[32.00px] max-w-[472px] md:max-w-full text-2xl md:text-[22px] text-center text-indigo-800 sm:text-xl"
            size="txtMontserratSemiBold24"
          >
            Best Choice to safeguard your family from abroad
          </Text>
          <Text
            className="text-[15px] text-black-900 text-center w-auto"
            size="txtMontserratRegular15"
          >
            Selected a package that fits your needs
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-[371px] mt-[98px] md:px-5 w-2/5 md:w-full">
          <Input
            name="frameThirty"
            placeholder="Select Plan"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid flex w-[545px] sm:w-full"
            suffix={
              <Img
                className="mt-px mb-auto h-5 ml-[35px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            }
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
          <Input
            name="frameThirtyOne"
            placeholder="Select Package"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid flex mt-6 w-[545px] sm:w-full"
            suffix={
              <Img
                className="mt-auto mb-px h-5 ml-[35px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            }
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
          <div className="flex flex-row sm:gap-10 items-center justify-between mt-[45px] w-[545px] sm:w-full">
            <Button
              className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
              onClick={handleFinish}
              shape="round"
              color="black_900"
              size="sm"
              variant="fill"
            >
              Back
            </Button>
            <Button
              className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
              onClick={handleNext}
              shape="round"
              color="indigo_800"
              size="sm"
              variant="fill"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
  );
};

const One = ({
  
  ...props
}) => {
  const handleNext = () => {
    
    

   

    props.nextStep();
  };



  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        
        <div className="md:h-28 h-9 mt-[76px] md:px-5 relative w-[37%] sm:w-full">
          <Img
                      className=" w-full"
                      src="images/new1.svg"
                      alt="settings"
                    />
        </div>
        <div className="flex flex-col gap-2 items-center justify-start mt-[55px] md:px-5 w-auto sm:w-full">
          <Text
            className="leading-[32.00px] max-w-[472px] md:max-w-full text-2xl md:text-[22px] text-center text-indigo-800 sm:text-xl"
            size="txtMontserratSemiBold24"
          >
            Best Choice to safeguard your family from abroad
          </Text>
          <Text
            className="text-[15px] text-black-900 text-center w-auto"
            size="txtMontserratRegular15"
          >
            Selected a package that fits your needs
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-[371px] mt-[98px] md:px-5 w-2/5 md:w-full">
          <Input
            name="frameThirty"
            placeholder="Select Plan"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid flex w-[545px] sm:w-full"
            suffix={
              <Img
                className="mt-px mb-auto h-5 ml-[35px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            }
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
          <Input
            name="frameThirtyOne"
            placeholder="Select Package"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid flex mt-6 w-[545px] sm:w-full"
            suffix={
              <Img
                className="mt-auto mb-px h-5 ml-[35px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            }
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
          <div className="flex flex-row sm:gap-10 items-center justify-between mt-[45px] w-[545px] sm:w-full">
            <Button
              className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
              onClick={handleNext}
              shape="round"
              color="black_900"
              size="sm"
              variant="fill"
            >
              Back
            </Button>
            <Button
              className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
              onClick={handleNext}
              shape="round"
              color="indigo_800"
              size="sm"
              variant="fill"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
  );
};

const Two = ({
  
  ...props
}) => {
  const handleNext = () => {
    
    props.nextStep();
  };

  const handlePrevious = () => {
    
    props.previousStep();
  };

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        
        <div className="h-9 md:h-[107px] mt-[76px] md:px-5 relative w-[37%] sm:w-full">
                <Img
                      className=" w-full"
                      src="images/new2.svg"
                      alt="settings"
                    />
             
        </div>
        <Text
          className="mt-[58px] text-2xl md:text-[22px] text-center text-indigo-800 sm:text-xl"
          size="txtMontserratSemiBold24"
        >
          Confirm Package
        </Text>
        <div className="flex flex-col gap-[21px] items-start justify-start mt-[65px] md:px-5 w-auto sm:w-full">
          <Text
            className="text-gray-600 text-xs uppercase w-auto"
            size="txtMontserratSemiBold12"
          >
            Package Details
          </Text>
          <div className="flex flex-row sm:gap-10 gap-[163px] items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtMontserratSemiBold15"
              >
                GLICO Sunkwa Health Plan
              </Text>
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtMontserratRegular12"
              >
                Under 60 Years package
              </Text>
            </div>
            <Text
              className="text-[15px] text-black-900 text-right w-auto"
              size="txtMontserratSemiBold15"
            >
              GH¢32,000
            </Text>
          </div>
          <Line className="bg-blue_gray-50 h-px w-[99%]" />
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-[439px] mt-[75px] md:px-5 w-[619px] md:w-full">
          <Button
            className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
            onClick={handlePrevious}
            shape="round"
            color="black_900"
            size="sm"
            variant="fill"
          >
            Back
          </Button>
          <Button
            className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
            onClick={handleNext}
            shape="round"
            color="indigo_800"
            size="sm"
            variant="fill"
          >
            Confirm Order
          </Button>
        </div>
      </div>
  );
};

const Three = ({
 
  ...props
}) => { const handleNext = () => {
    
  props.nextStep();
};

const handlePrevious = () => {
    
  props.previousStep();
};

  

 

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1282px] mb-[338px] mx-auto md:px-5 w-full">
          
          <div className="flex mt-[76px] relative w-2/5 sm:w-full">
            <div className="h-9 md:h-[31px] my-auto w-[91%] sm:w-full">

              <Img
                      className=" w-full"
                      src="images/new3.svg"
                      alt="settings"
                    />
              
            </div>
            
            
          </div>
          <div className="flex flex-col gap-2 items-start justify-start mt-[53px] w-auto">
            <Text
              className="text-2xl md:text-[22px] text-center text-indigo-800 sm:text-xl w-auto"
              size="txtMontserratSemiBold24"
            >
              Beneficiary Details
            </Text>
            <Text
              className="text-[15px] text-black-900 text-center w-auto"
              size="txtMontserratRegular15"
            >
              Fill in forms to register recipient{" "}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-[55px] w-[48%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
              <Text
                className="bg-white-A700 border border-blue_gray-100 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-3 text-[15px] text-black-900 w-[296px]"
                size="txtMontserratRegular15"
              >
                First name{" "}
              </Text>
              <Text
                className="bg-white-A700 border border-blue_gray-100 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-3 text-[15px] text-black-900 w-[296px]"
                size="txtMontserratRegular15"
              >
                Last Name
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-[19px] w-full">
              <Input
                name="frameThirty"
                placeholder="Gender"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex sm:flex-1 w-[296px] sm:w-full"
                suffix={
                  <Img
                    className="mt-px mb-auto h-5 ml-[35px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                }
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <Input
                name="frameFortyFour"
                placeholder="Date of birth"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:w-full"
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-[19px] w-full">
              <Input
                name="frameFortyFive"
                placeholder="Email Address"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:w-full"
                type="email"
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <Input
                name="frameFortySix"
                placeholder="Phone"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:w-full"
                type="number"
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-[19px] w-full">
              <Input
                name="frameFortySeven"
                placeholder="City"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:w-full"
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <Input
                name="frameFortyEight"
                placeholder="Address"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 sm:w-full"
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-[43px] w-[609px] md:w-full">
              <Button
                className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
                onClick={handlePrevious}
                shape="round"
                color="black_900"
                size="sm"
                variant="fill"
              >
                Back
              </Button>
              <Button
                className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
                onClick={handleNext}
                shape="round"
                color="indigo_800"
                size="sm"
                variant="fill"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

const Five = ({
 
  ...props
}) => { const handleNext = () => {
    
  props.nextStep();
};

const handlePrevious = () => {
    
  props.previousStep();
};

  

 

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1282px] mb-[433px] mx-auto md:px-5 w-full">
          
          <div className="flex mt-[76px] relative w-2/5 sm:w-full">
            <div className="h-9 md:h-[31px] my-auto w-[91%] sm:w-full">

              <Img
                      className=" w-full"
                      src="images/new4.svg"
                      alt="settings"
                    />
              
            </div>
            
            
          </div>
          <div className="flex flex-col items-center justify-start mt-[53px] w-auto">
            <Text
              className="text-2xl md:text-[22px] text-center text-indigo-800 sm:text-xl w-[355px]"
              size="txtMontserratSemiBold24"
            >
              Who is making the payment
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-12 w-[48%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
              <Text
                className="bg-white-A700 border border-blue_gray-100 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-3 text-[15px] text-black-900 w-[296px]"
                size="txtMontserratRegular15"
              >
                Full name
              </Text>
              <Text
                className="bg-white-A700 border border-blue_gray-100 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-3 text-[15px] text-black-900 w-[296px]"
                size="txtMontserratRegular15"
              >
                Email
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between mt-2.5 w-full">
              <Text
                className="bg-white-A700 border border-blue_gray-100 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-3 text-[15px] text-black-900 w-[296px]"
                size="txtMontserratRegular15"
              >
                Phone
              </Text>
              <CheckBox
                className="text-[15px] text-left"
                inputClassName="border border-blue_gray-100 border-solid mr-[5px]"
                name="whoisthebenefic_One"
                id="whoisthebenefic_One"
                label="Who is the beneficiary to you?"
                color="white_A700"
                size="sm"
                variant="fill"
              ></CheckBox>
            </div>
            <div className="flex flex-row sm:gap-10 items-center justify-between mt-[110px] w-[603px] md:w-full">
              <Button
                className="cursor-pointer text-[15px] text-center w-[168px]"
                shape="round"
                color="black_900"
                size="sm"
                variant="fill"
                onClick={handlePrevious}
              >
                Back
              </Button>
              <Button
                className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
                onClick={handleNext}
                shape="round"
                color="indigo_800"
                size="sm"
                variant="fill"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

const Six = ({
 
  ...props
}) => { const handleNext = () => {
    
  props.nextStep();
};

const handlePrevious = () => {
    
  props.previousStep();
};

  

 

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1282px] mb-[89px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[76px] items-center justify-start w-full">
            
            <div className="flex mt-[76px] relative w-2/5 sm:w-full">
            <div className="h-9 md:h-[31px] my-auto w-[91%] sm:w-full">

              <Img
                      className=" w-full"
                      src="images/new4.svg"
                      alt="settings"
                    />
              
            </div>
            
            
          </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[50px] w-auto">
            <Text
              className="text-2xl md:text-[22px] text-center text-indigo-800 sm:text-xl w-[195px]"
              size="txtMontserratSemiBold24"
            >
              Confirm Details
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start mt-[46px] w-[48%] md:w-full">
            <Text
              className="text-gray-600 text-xs uppercase"
              size="txtMontserratSemiBold12"
            >
              Package Details
            </Text>
            <div className="flex flex-row sm:gap-10 gap-[163px] items-start justify-start mt-7 w-auto sm:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtMontserratSemiBold15"
                >
                  GLICO Sunkwa Health Plan
                </Text>
                <Text
                  className="text-black-900 text-xs w-auto"
                  size="txtMontserratRegular12"
                >
                  Under 60 Years package
                </Text>
              </div>
              <Text
                className="text-[15px] text-black-900 text-right w-auto"
                size="txtMontserratSemiBold15"
              >
                GH¢32,000
              </Text>
            </div>
            <Line className="bg-blue_gray-50 h-px ml-1.5 md:ml-[0] mt-[15px] w-[96%]" />
            <Text
              className="mt-[17px] text-gray-600 text-xs uppercase"
              size="txtMontserratSemiBold12"
            >
              Beneficiary Details
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-7 w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtMontserratRegular12Gray600"
                >
                  Full name
                </Text>
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtMontserratMedium15"
                >
                  Kwabena Batry
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtMontserratRegular12Gray600"
                >
                  Date of birth
                </Text>
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtMontserratMedium15"
                >
                  25/02/1652
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtMontserratRegular12Gray600"
                >
                  Contact
                </Text>
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtMontserratMedium15"
                >
                  +233 25 452 2548
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtMontserratRegular12Gray600"
                >
                  Email
                </Text>
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtMontserratMedium15"
                >
                  kwabenaish12@gmail.com
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start mt-[22px] w-auto">
              <Text
                className="text-gray-600 text-xs w-auto"
                size="txtMontserratRegular12Gray600"
              >
                Address
              </Text>
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtMontserratMedium15"
              >
                254 Beng st, Accra GHana
              </Text>
            </div>
            <Line className="bg-blue_gray-50 h-px ml-1.5 md:ml-[0] mt-[15px] w-[96%]" />
            <Text
              className="mt-[11px] text-gray-600 text-xs uppercase"
              size="txtMontserratSemiBold12"
            >
              Benefactor Details
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-7 w-3/4 md:w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtMontserratRegular12Gray600"
                >
                  Full name
                </Text>
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtMontserratMedium15"
                >
                  Kofi Batry
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start sm:ml-[0] ml-[71px] w-auto">
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtMontserratRegular12Gray600"
                >
                  Date of birth
                </Text>
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtMontserratMedium15"
                >
                  kofipapa@gmail.com
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start sm:ml-[0] ml-[19px] w-auto">
                <Text
                  className="text-gray-600 text-xs w-auto"
                  size="txtMontserratRegular12Gray600"
                >
                  Contact
                </Text>
                <Text
                  className="text-[15px] text-black-900 w-auto"
                  size="txtMontserratMedium15"
                >
                  +233 25 452 2548
                </Text>
              </div>
            </div>
            <Line className="bg-blue_gray-50 h-px ml-1.5 md:ml-[0] mt-[25px] w-[96%]" />
            <Text
              className="mt-[11px] text-gray-600 text-xs uppercase"
              size="txtMontserratSemiBold12"
            >
              Payment method
            </Text>
            <Text
              className="mt-[18px] text-[15px] text-black-900"
              size="txtMontserratMedium15"
            >
              Card - XXXX XXXX XXXX XXXX 3215
            </Text>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between mt-[102px] w-[619px] md:w-full">
            <Button
              className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
              onClick={handlePrevious}
              shape="round"
              color="black_900"
              size="sm"
              variant="fill"
            >
              Back
            </Button>
            <Button
              className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
              onClick={handleNext}
              shape="round"
              color="indigo_800"
              size="sm"
              variant="fill"
            >
              Confirm Order
            </Button>
          </div>
        </div>
      </div>
  );
};



const Four = ({

  ...props
}) => {
  const handleNext = () => {
    
    props.nextStep();
  };

  const handlePrevious = () => {
    
    props.previousStep();
  };

    

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[76px] items-center max-w-[1282px] mx-auto md:px-5 w-full">
          
          <div className="flex mt-[76px] relative w-2/5 sm:w-full">
            <div className="h-9 md:h-[31px] my-auto w-[91%] sm:w-full">

              <Img
                      className=" w-full"
                      src="images/new5.svg"
                      alt="settings"
                    />
              
            </div>
            
            
          </div>
        </div>
        <Img
          className="h-10 md:ml-[0] ml-[auto] mr-[auto] mt-[117px] w-10"
          src="images/img_checkmark_indigo_800_1.svg"
          alt="checkmark"
        />
        <div className="flex flex-col items-center max-w-[1282px] mb-[5px] mt-[17px] mx-auto md:px-5 px-[214px] w-full">
          <Text
            className="leading-[32.00px] text-2xl md:text-[22px] text-center text-indigo-800 sm:text-xl w-[35%] sm:w-full"
            size="txtMontserratSemiBold24"
          >
            Congratulations. Your Order is accepted
          </Text>
          <Text
            className="leading-[20.00px] mt-[17px] text-[15px] text-center text-gray-800 w-[51%] sm:w-full"
            size="txtMontserratRegular15Gray800"
          >
            You will receive an email shortly with detailed confirmation of your
            policy. Keep an eye on your inbox.
          </Text>
          <Text
            className="leading-[20.00px] mt-[31px] text-[15px] text-black-900 text-center w-[52%] sm:w-full"
            size="txtMontserratRegular15"
          >
            <span className="text-black-900 font-montserrat font-normal">
              To ensure a seamless and secure experience, we recommend signing
              in to your account.{" "}
            </span>
            <a
              href="javascript:"
              className="text-deep_purple-A700 font-montserrat font-normal underline"
            >
              Login/Register
            </a>
          </Text>
          <Button
            className="cursor-pointer mt-[75px] text-[15px] text-center w-[168px]"
            shape="round"
            color="indigo_800"
            size="sm"
            variant="fill"
          >
            Done
          </Button>
          <Text
            className="mt-8 text-[15px] text-black-900 text-center"
            size="txtMontserratRegular15"
          >
            <span className="text-black-900 font-montserrat font-normal">
              You can view and track your policies{" "}
            </span>
            <a
              href="javascript:"
              className="text-deep_purple-A700 font-montserrat font-normal underline"
            >
              here
            </a>
          </Text>
          <Text
            className="leading-[20.00px] mt-[234px] text-[15px] text-center text-gray-800 w-[95%] sm:w-full"
            size="txtMontserratRegular15Gray800"
          >
            Thank you for choosing GLICO Sunkwa Health Plan. Your commitment to
            the health and well-being of your family is truly commendable
          </Text>
        </div>
      </div>
  );
};


const Payments = (props) => {
  const { selectedItem } = props;
  
  
  const [stepWizard, setStepWizard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [valueSelected, setValueSelected] = useState(null);
  const [networkSelected, setNetworkSelected] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [processing, setProcessing] = useState(false);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };

  // Remove StepWizard default transitions
  let noTransitions = {
    enterRight: "all 0s ease-in-out",
    enterLeft: "all 0s ease-in-out",
    exitRight: "all 0s ease-in-out",
    exitLeft: "all 0s ease-in-out",
    intro: "all 0s ease-in-out",
  };

  return (
    
      <div className="sm:h-auto md:h-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-auto">
          <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full mt-5">
            <Header></Header>
            <StepWizard
              className="w-full"
              instance={assignStepWizard}
              onStepChange={handleStepChange}
              transitions={noTransitions}
            >
              <One
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />
              <Two
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />
              <Three
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />

              <Five
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />

                <Six
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />

              <Four
                completeCallback={handleComplete}
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />

              

            </StepWizard>
          </div>
        </div>
      </div>
    
  );
};

export default Payments;
