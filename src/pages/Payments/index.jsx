import React, { useState } from "react";
import { Button, CheckBox, Img, Line, Text, Input, List, Select } from "components";
import StepWizard from "react-step-wizard";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from 'react-paystack';

const ActionButtons = (props) => {
  const handleNext = () => {
    props.nextStep();
  };


  const handleFinish = () => {
    props.lastStep();
  };
};

const One = ({
  handlePackageChange,
  handlePlanChange,
  ...props
}) => {
  const handleNext = () => {
    props.nextStep();
  };

  const planOptions = ["Select Plan", "Under 60", "Above 60"];
  const packageOptions = ["Select Package", "Enhanced", "Enhanced Plus", "Ultimate"];

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
      <div className="flex flex-col items-center justify-start mb-[371px] gap-5 mt-[98px] md:px-5 w-2/5 md:w-full">
        <Select 
        options={planOptions} 
        setChange={handlePlanChange}
        />

        <Select 
        options={packageOptions} 
        setChange={handlePackageChange}
        />
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
  selectedPlan,
  selectedPackage,
  handleAmountChange,
  ...props
}) => {
  const handleNext = () => {
    handleAmountChange(amount);
    props.nextStep();
  };

  const handlePrevious = () => {

    props.previousStep();
  };
  const getAmount = (selectedPackage, selectedPlan) => {
    let prices = selectedPlan === "Under 60" ? [7002.93, 13320.54, 23419.17] : [8206.02, 16490.30, 32698.68];
    let result;

    switch (selectedPackage) {
      case "Enhanced":
        result = prices[0];
        break;
      case "Enhanced Plus":
        result = prices[1];
        break;
      case "Ultimate":
        result = prices[2];
        break;
      default:
        result = 0;
    }

    return result;
  }
  const amount = getAmount(selectedPackage, selectedPlan);

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
              {selectedPlan} Years package - {selectedPackage}
            </Text>
          </div>
          <Text
            className="text-[15px] text-black-900 text-right w-auto"
            size="txtMontserratSemiBold15"
          >
            GH¢{amount}
          </Text>
        </div>
        <Line className="bg-blue_gray-50 h-px w-[99%]" />
      </div>
      <div className="flex sm:flex-col-reverse flex-row sm:gap-10 items-center justify-between mb-[439px] mt-[75px] md:px-5 w-[619px] md:w-full">
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
  handleBFnameChange,
  handleBLnameChange,
  handleDOBChange,
  handleBEmailChange,
  handleBPhoneNumberChange,
  handleCityChange,
  handleAddressChange,
  handleGenderChange,
  ...props
}) => {
  const handleNext = () => {

    props.nextStep();
  };

  const handlePrevious = () => {

    props.previousStep();
  };

  const genderOptions = ["Select Gender", "Male", "Female"];

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
        <div className="flex flex-col items-center justify-start mt-[55px] w-[60%] md:w-full">
          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-[19px] w-full max-w-full">
            <Input
              name="frameFortyFive"
              placeholder="First Name"
              className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[296px] sm:w-full"
              type="text"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              onChange={handleBFnameChange}
            ></Input>
            <Input
              name="Lname"
              placeholder="Last Name"
              className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[296px] sm:w-full"
              type="text"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              onChange={handleBLnameChange}
            ></Input>
          </div>
          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-[19px] w-full max-w-full">
            <Select 
            options={genderOptions} 
            setChange={handleGenderChange}
            />
            <Input
              name="frameFortyFour"
              placeholder="Date of birth"
              className="p-0 placeholder:text-black-900 text-[15px] text-left w-[276px] flex-1"
              wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[296px] sm:w-full"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              type="date"
              onChange={handleDOBChange}
            ></Input>
          </div>
          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-[19px] w-full max-w-full">
            <Input
              name="frameFortyFive"
              placeholder="Email Address"
              className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[296px] sm:w-full"
              type="email"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              onChange={handleBEmailChange}
            ></Input>
            <Input
              name="frameFortySix"
              placeholder="Phone"
              className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[296px] sm:w-full"
              type="tel"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              onChange={handleBPhoneNumberChange}
            ></Input>
          </div>
          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between mt-[19px] w-full max-w-full">
            <Input
              name="frameFortySeven"
              placeholder="City"
              className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[296px] sm:w-full"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              onChange={handleCityChange}
            ></Input>
            <Input
              name="frameFortyEight"
              placeholder="Address"
              className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[296px] sm:w-full"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              onChange={handleAddressChange}
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
  handleFullNameChange,
  handleEmailChange,
  handlePhoneNumberChange,
  handleRelationChange,
  ...props
}) => {
  const handleNext = () => {
    props.nextStep();
  };

  const handlePrevious = () => {
    props.previousStep();
  };

  const beneficiaryRelationOptions = ["Who is the beneficiary to you?", "Relative", "Friend", "Employee", "Other"];

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
        <div className="flex flex-col items-center justify-start mt-12 w-[60%] md:w-full">
          <div className="flex sm:flex-col sm:gap-6 flex-row gap-2.5 items-center justify-between w-full">
            <Input
              name="frameThirty"
              placeholder="Full Name"
              className="p-0 placeholder:text-black-900 text-[15px] text-left flex-1"
              wrapClassName="border border-blue_gray-100 border-solid flex sm:flex-1 w-[296px] sm:w-full"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              type="text"
              onChange={handleFullNameChange}
            ></Input>
            <Input
              name="frameThirty"
              placeholder="Email"
              className="p-0 placeholder:text-black-900 text-[15px] text-left flex-1"
              wrapClassName="border border-blue_gray-100 border-solid flex sm:flex-1 w-[296px] sm:w-full"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              type="email"
              onChange={handleEmailChange}
            ></Input>
          </div>
          <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between mt-6 w-full">
            <Input
              name="frameThirty"
              placeholder="Phone number"
              className="p-0 placeholder:text-black-900 text-[15px] text-left w-[296px] flex-1"
              wrapClassName="border border-blue_gray-100 border-solid flex sm:flex-1 w-[296px] sm:w-full"
              shape="square"
              color="white_A700"
              size="xs"
              variant="fill"
              type="tel"
              onChange={handlePhoneNumberChange}
            ></Input>
            <Select 
            options={beneficiaryRelationOptions}
            setChange={handleRelationChange}
             />
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
  selectedPlan,
  selectedPackage,
  amount,
  b_fname,
  b_lname,
  DOB,
  gender,
  b_email,
  b_phoneNumber,
  city,
  address,
  fullName,
  email,
  phoneNumber,
  ...props
}) => {
  const handleNext = () => {

    props.nextStep();
  };

  const handlePrevious = () => {

    props.previousStep();
  };

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: amount * 100, 
    publicKey: 'pk_test_2bb382cf83dcbbded35073cca76a746157a6dd61',
    currency: "GHS"
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    handleNext();
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Make Payment',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

  return (
    <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
      <div className="flex flex-col items-center justify-start max-w-[1482px] w-[1200px] mb-[89px] mx-auto md:px-5 sm:max-w-full sm:w-full">
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
          <div className="flex flex-row sm:gap-10 gap-[163px] items-start justify-between mt-7 w-full sm:w-full">
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
                {selectedPackage} Years package - {selectedPlan}
              </Text>
            </div>
            <Text
              className="text-[15px] text-black-900 text-right w-auto"
              size="txtMontserratSemiBold15"
            >
              GH¢{amount}
            </Text>
          </div>
          <Line className="bg-blue_gray-50 h-px ml-1.5 md:ml-[0] mt-[15px] w-[96%]" />
          <Text
            className="mt-[17px] text-gray-600 text-xs uppercase"
            size="txtMontserratSemiBold12"
          >
            Beneficiary Details
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-7 items-start justify-between mt-7 w-full">
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
                {b_fname} {b_lname}
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
                {DOB}
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
                {b_phoneNumber}
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
                {b_email}
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
              {address}
            </Text>
          </div>
          <Line className="bg-blue_gray-50 h-px ml-1.5 md:ml-[0] mt-[15px] w-[96%]" />
          <Text
            className="mt-[11px] text-gray-600 text-xs uppercase"
            size="txtMontserratSemiBold12"
          >
            Benefactor Details
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-between mt-7 w-full md:w-full sm:items-start">
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
                {fullName}
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start sm:ml-[0] ml-[71px] w-auto">
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
                {email}
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
                {phoneNumber}
              </Text>
            </div>
          </div>
          <Line className="bg-blue_gray-50 h-px ml-1.5 md:ml-[0] mt-[25px] w-[96%]" />
          {/* <Text
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
          </Text> */}
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
          <PaystackButton 
          {...componentProps} 
          className="common-pointer cursor-pointer text-[15px] text-center w-[168px] bg-indigo-800 text-white-A700 p-3 rounded"
          />
          {/* <PaystackButton
            {...componentProps}
            className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
            onClick={handleNext}
            shape="round"
            color="indigo_800"
            size="sm"
            variant="fill"
          >
            Confirm Order
          </PaystackButton> */}
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
  const navigate = useNavigate();



  return (
    <div className="bg-white-A700 flex flex-col font-montserrat justify-start mx-auto p-9 sm:px-5 w-full sm:h-full">
      <div className="flex flex-col md:gap-10 gap-[76px] items-center max-w-[1282px] mx-auto md:px-5 w-full sm:h-full">

        <div className="flex mt-[76px] relative w-2/5 sm:w-full sm:mt-[40px]">
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
        className="h-10 md:ml-[0] ml-[auto] mr-[auto] mt-[117px] w-10 sm:w-full sm:mt-20"
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
          <span className="text-black-900 font-montserrat font-normal inline">
            To ensure a seamless and secure experience, we recommend signing
            in to your account.{" "}
            <span
            className="text-deep_purple-A700 common-pointer font-montserrat font-normal underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
          </span>   
        </Text>
        <Button
          className="cursor-pointer mt-[75px] text-[15px] text-center w-[168px] sm:mt-[50px]"
          shape="round"
          color="indigo_800"
          size="sm"
          variant="fill"
        >
          Done
        </Button>
        <Text
          className=" mt-8 text-[15px] text-black-900 text-center"
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
          className="leading-[20.00px] mt-[234px] text-[15px] text-center text-gray-800 w-[95%] sm:w-full sm:mt-14"
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
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [amount, setAmount] = useState(null);

  const handlePackageChange = (selectedPackage) => {
    setSelectedPackage(selectedPackage);
  };

  const handlePlanChange = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
  };

  const handleAmountChange = (amount) => {
    setAmount(amount);
  };

  // Beneficiary state
  const [b_fname, set_bFname] = useState("");
  const [b_lname, set_bLname] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [b_email, set_bEmail] = useState("");
  const [b_phoneNumber, set_bPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const handleBFnameChange = (fname) => {
    set_bFname(fname);
  };
  
  const handleBLnameChange = (lname) => {
    set_bLname(lname);
  };
  
  const handleDOBChange = (DOB) => {
    setDOB(DOB);
  };
  
  const handleGenderChange = (gender) => {
    setGender(gender);
  };

  const handleBEmailChange = (email) => {
    set_bEmail(email);
  };
  
  const handleBPhoneNumberChange = (phone) => {
    set_bPhoneNumber(phone);
  };
  
  const handleCityChange = (city) => {
    setCity(city);
  };
  
  const handleAddressChange = (address) => {
    setAddress(address);
  };

  // User state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relation, setRelation] = useState("");

  const handleFullNameChange = (fullname) => {
    setFullName(fullname);
  };
  
  const handleEmailChange = (email) => {
    setEmail(email);
  };
  
  const handlePhoneNumberChange = (phone) => {
    setPhoneNumber(phone);
  };
  
  const handleRelationChange = (relation) => {
    setRelation(relation);
  };

  const [stepWizard, setStepWizard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

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
          <Header className="w-full sm:px-5"/>
          <StepWizard
            className="w-full"
            instance={assignStepWizard}
            onStepChange={handleStepChange}
            transitions={noTransitions}
          >
            <One
              {...{
                handlePackageChange,
                handlePlanChange
              }}
            />
            <Two
              {...{
                selectedPackage,
                selectedPlan,
                handleAmountChange,
              }}
            />
            <Three
              {...{
                handleBFnameChange,
                handleBLnameChange,
                handleDOBChange,
                handleBEmailChange,
                handleBPhoneNumberChange,
                handleCityChange,
                handleAddressChange,
                handleGenderChange
              }}
            />

            <Five
              {...{
                handleFullNameChange,
                handleEmailChange,
                handlePhoneNumberChange,
                handleRelationChange
              }}
            />

            <Six
              {...{
                selectedPlan,
                selectedPackage,
                amount,
                b_fname,
                b_lname,
                DOB,
                gender,
                b_email,
                b_phoneNumber,
                city,
                address,
                fullName,
                phoneNumber,
                email,
                relation
              }}
            />

            <Four
              completeCallback={handleComplete}
              {...{

                selectedItem,
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
