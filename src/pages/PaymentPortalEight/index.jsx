import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header2 from "components/Header2";

const PaymentPortalEightPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1282px] mb-[338px] mx-auto md:px-5 w-full">
          <Header2 className="flex md:flex-col flex-row md:gap-10 gap-[191px] items-center justify-center w-full" />
          <div className="flex mt-[76px] relative w-2/5 sm:w-full">
            <div className="h-9 md:h-[31px] my-auto w-[91%] sm:w-full">
              <Line className="absolute bg-blue_gray-100 h-1 right-[0] top-[11%] w-[89%]" />
              <div className="absolute bg-indigo-800 h-3 left-[9%] rounded-[50%] top-[0] w-3"></div>
              <Text
                className="absolute bottom-[0] left-[0] text-indigo-800 text-xs tracking-[0.30px]"
                size="txtMontserratMedium12"
              >
                Select Package
              </Text>
              <div className="absolute flex flex-col gap-1 h-full inset-y-[0] items-center justify-start left-[33%] my-auto w-auto">
                <div className="bg-indigo-800 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-indigo-800 text-xs tracking-[0.30px] w-auto"
                  size="txtMontserratMedium12"
                >
                  Fill Forms
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center justify-start ml-[undefinedpx] mr-[126px] my-auto w-auto z-[1]">
              <div className="bg-blue_gray-100 h-3 rounded-[50%] w-3"></div>
              <Text
                className="text-blue_gray-100 text-xs tracking-[0.30px] w-auto"
                size="txtMontserratMedium12Bluegray100"
              >
                Payment Method
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-center justify-start ml-[-39px] my-auto w-auto z-[1]">
              <div className="bg-blue_gray-100 h-3 rounded-[50%] w-3"></div>
              <Text
                className="text-blue_gray-100 text-xs tracking-[0.30px] w-auto"
                size="txtMontserratMedium12Bluegray100"
              >
                Confirmation
              </Text>
            </div>
            <Line className="bg-indigo-800 h-1 ml-[undefinedpx] mt-1 w-[26%] z-[1]" />
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
                onClick={() => navigate("/paymentportalsix")}
                shape="round"
                color="black_900"
                size="sm"
                variant="fill"
              >
                Back
              </Button>
              <Button
                className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
                onClick={() => navigate("/paymentportaltwo")}
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
    </>
  );
};

export default PaymentPortalEightPage;
