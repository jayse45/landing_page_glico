import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Line, Text } from "components";
import Header11 from "components/Header11";

const PaymentPortalOne1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1278px] mb-[433px] mx-auto md:px-5 w-full">
          <Header11 className="flex md:flex-col flex-row md:gap-10 gap-[191px] items-center justify-center w-full" />
          <div className="flex mt-[75px] relative w-2/5 sm:w-full">
            <div className="h-9 my-auto w-[91%] sm:w-full">
              <Line className="absolute bg-blue_gray-100 h-1 right-[0] top-[11%] w-[89%]" />
              <div className="absolute bg-indigo-800 h-3 left-[9%] rounded-[50%] top-[0] w-3"></div>
              <Text
                className="absolute bottom-[0] left-[0] text-indigo-800 text-xs tracking-[0.30px]"
                size="txtMontserratMedium12"
              >
                Select Package
              </Text>
              <div className="absolute flex flex-row gap-[54px] h-full inset-y-[0] items-center justify-center my-auto right-[17%] w-1/2">
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  <div className="bg-indigo-800 h-3 rounded-[50%] w-3"></div>
                  <Text
                    className="text-indigo-800 text-xs tracking-[0.30px] w-auto"
                    size="txtMontserratMedium12"
                  >
                    Fill Forms
                  </Text>
                </div>
                <div className="flex flex-col gap-1 items-center justify-start w-auto">
                  <div className="bg-indigo-800 h-3 rounded-[50%] w-3"></div>
                  <Text
                    className="text-indigo-800 text-xs tracking-[0.30px] w-auto"
                    size="txtMontserratMedium12"
                  >
                    Payment Method
                  </Text>
                </div>
              </div>
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
            <Line className="bg-indigo-800 h-1 ml-[undefinedpx] mt-1 w-[54%] z-[1]" />
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
              >
                Back
              </Button>
              <Button
                className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
                onClick={() => navigate("/paymentportal")}
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

export default PaymentPortalOne1Page;
