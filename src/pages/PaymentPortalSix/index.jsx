import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header2 from "components/Header2";

const PaymentPortalSixPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <Header2 className="flex md:flex-col flex-row md:gap-10 gap-[191px] items-center justify-center md:px-5 w-full" />
        <div className="h-9 md:h-[107px] mt-[76px] md:px-5 relative w-[37%] sm:w-full">
          <div className="absolute h-3 inset-x-[0] mx-auto top-[0] w-[83%] sm:w-full">
            <Line className="absolute bg-blue_gray-100 h-1 inset-[0] justify-center m-auto w-[99%]" />
            <div className="absolute bg-indigo-800 h-3 inset-y-[0] left-[0] my-auto rounded-[50%] w-3"></div>
          </div>
          <Text
            className="absolute bottom-[0] left-[0] text-indigo-800 text-xs tracking-[0.30px]"
            size="txtMontserratMedium12"
          >
            Select Package
          </Text>
          <div className="absolute flex flex-col gap-1 h-full inset-y-[0] items-center justify-start left-[30%] my-auto w-auto">
            <div className="bg-blue_gray-100_01 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-blue_gray-100_01 text-xs tracking-[0.30px] w-auto"
              size="txtMontserratMedium12Bluegray10001"
            >
              Fill Forms
            </Text>
          </div>
          <div className="absolute flex flex-col gap-1 h-full inset-y-[0] items-center justify-start my-auto right-1/4 w-auto">
            <div className="bg-blue_gray-100 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-blue_gray-100 text-xs tracking-[0.30px] w-auto"
              size="txtMontserratMedium12Bluegray100"
            >
              Payment Method
            </Text>
          </div>
          <div className="absolute flex flex-col gap-1 h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
            <div className="bg-blue_gray-100 h-3 rounded-[50%] w-3"></div>
            <Text
              className="text-blue_gray-100 text-xs tracking-[0.30px] w-auto"
              size="txtMontserratMedium12Bluegray100"
            >
              Confirmation
            </Text>
          </div>
          <Line className="absolute bg-indigo-800 h-1 left-[10%] top-[11%] w-[15%]" />
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
            onClick={() => navigate("/paymentportalone")}
            shape="round"
            color="black_900"
            size="sm"
            variant="fill"
          >
            Back
          </Button>
          <Button
            className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
            onClick={() => navigate("/paymentportaleight")}
            shape="round"
            color="indigo_800"
            size="sm"
            variant="fill"
          >
            Confirm Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default PaymentPortalSixPage;
