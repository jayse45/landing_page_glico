import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header2 from "components/Header2";

const PaymentPortalFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1282px] mb-[89px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[76px] items-center justify-start w-full">
            <Header2 className="flex md:flex-col flex-row md:gap-10 gap-[191px] items-center justify-center w-full" />
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
              onClick={() => navigate("/paymentportaltwo")}
              shape="round"
              color="black_900"
              size="sm"
              variant="fill"
            >
              Back
            </Button>
            <Button
              className="common-pointer cursor-pointer text-[15px] text-center w-[168px]"
              onClick={() => navigate("/paymentportalseven")}
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
    </>
  );
};

export default PaymentPortalFourPage;
