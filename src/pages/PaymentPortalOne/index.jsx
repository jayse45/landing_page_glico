import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header2 from "components/Header2";

const PaymentPortalOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <Header2 className="flex md:flex-col flex-row md:gap-10 gap-[191px] items-center justify-center md:px-5 w-full" />
        <div className="md:h-28 h-9 mt-[76px] md:px-5 relative w-[37%] sm:w-full">
          <Line className="absolute bg-blue_gray-100 h-1 inset-x-[0] mx-auto top-[11%] w-[81%]" />
          <div className="absolute bg-indigo-800 flex flex-col h-3 items-end justify-start left-[8%] pl-1 py-1 rounded-[50%] top-[0] w-3">
            <div className="bg-indigo-800 h-1 w-[13%]"></div>
          </div>
          <Text
            className="absolute bottom-[0] left-[0] text-indigo-800 text-xs tracking-[0.30px]"
            size="txtMontserratMedium12"
          >
            Select Package
          </Text>
          <div className="absolute flex flex-row gap-[54px] h-full inset-y-[0] items-center justify-center my-auto right-1/4 w-[46%]">
            <div className="flex flex-col gap-1 items-center justify-start w-auto">
              <div className="bg-blue_gray-100_01 h-3 rounded-[50%] w-3"></div>
              <Text
                className="text-blue_gray-100_01 text-xs tracking-[0.30px] w-auto"
                size="txtMontserratMedium12Bluegray10001"
              >
                Fill Forms
              </Text>
            </div>
            <div className="flex flex-col gap-1 items-center justify-start w-auto">
              <div className="bg-blue_gray-100 h-3 rounded-[50%] w-3"></div>
              <Text
                className="text-blue_gray-100 text-xs tracking-[0.30px] w-auto"
                size="txtMontserratMedium12Bluegray100"
              >
                Payment Method
              </Text>
            </div>
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
              onClick={() => navigate("/under60seven")}
              shape="round"
              color="black_900"
              size="sm"
              variant="fill"
            >
              Back
            </Button>
            <Button
              className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
              onClick={() => navigate("/paymentportalsix")}
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
    </>
  );
};

export default PaymentPortalOnePage;
