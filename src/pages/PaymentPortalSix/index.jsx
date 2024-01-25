import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header2 from "components/Header2";

const PaymentPortalSixPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[76px] items-center max-w-[1278px] mx-auto md:px-5 w-full">
          
          <div className="h-9 relative w-2/5 sm:w-full">
            <div className="h-9 m-auto w-full">
              <Line className="absolute bg-blue_gray-100 h-1 inset-x-[0] mx-auto top-[11%] w-[81%]" />
              <div className="absolute bg-indigo-800 h-3 left-[8%] rounded-[50%] top-[0] w-3"></div>
              <Text
                className="absolute bottom-[0] left-[0] text-indigo-800 text-xs tracking-[0.30px]"
                size="txtMontserratMedium12"
              >
                Select Package
              </Text>
              <div className="absolute flex flex-row gap-[54px] h-full inset-y-[0] items-center justify-center my-auto right-1/4 w-[46%]">
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
              <div className="absolute flex flex-col gap-1 h-full inset-y-[0] items-center justify-start my-auto right-[0] w-auto">
                <div className="bg-indigo-800 h-3 rounded-[50%] w-3"></div>
                <Text
                  className="text-indigo-800 text-xs tracking-[0.30px] w-auto"
                  size="txtMontserratMedium12"
                >
                  Confirmation
                </Text>
              </div>
            </div>
            <Line className="absolute bg-indigo-800 h-1 inset-x-[0] mx-auto top-[11%] w-[81%]" />
          </div>
        </div>
        <Img
          className="h-10 md:ml-[0] ml-[627px] mt-[117px] w-10"
          src="images/img_checkmark_indigo_800_1.svg"
          alt="checkmark_One"
        />
        <div className="flex flex-col items-center max-w-[1278px] mb-[5px] mt-[17px] mx-auto md:px-5 px-[214px] w-full">
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
          <Button
            className="cursor-pointer mt-[47px] text-[15px] text-center w-[168px]"
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
            className="leading-[20.00px] mt-[334px] text-[15px] text-center text-gray-800 w-[95%] sm:w-full"
            size="txtMontserratRegular15Gray800"
          >
            Thank you for choosing GLICO Sunkwa Health Plan. Your commitment to
            the health and well-being of your family is truly commendable
          </Text>
        </div>
      </div>
    </>
  );
};

export default PaymentPortalSixPage;
