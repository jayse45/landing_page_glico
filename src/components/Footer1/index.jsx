import React from "react";

import { Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-7xl mb-[82px] mt-[55px] mx-auto w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start w-[305px]">
            <Img
              className="h-[27px] md:h-auto object-cover w-[212px] sm:w-full"
              src="images/img_logoinverted1.png"
              alt="logoinvertedOne"
            />
            <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_icons8facebook2.svg"
                  alt="icons8facebookTwo"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_icons8instagramnew.svg"
                  alt="icons8instagram"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_icons8twitter1.svg"
                  alt="icons8twitterOne"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_icons8linkedin2filled.svg"
                  alt="icons8linkedinTwo"
                />
              </div>
              <Text
                className="text-[15px] text-white-A700 w-auto"
                size="txtMontserratRegular15WhiteA700"
              >
                Members of GLICO Group
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[11px] items-start justify-start w-[200px]">
            <Text
              className="text-[15px] text-white-A700 w-full"
              size="txtMontserratSemiBold15WhiteA700"
            >
              Sister Companies
            </Text>
            <ul className="flex flex-col gap-[5px] items-start justify-start w-full common-column-list">
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  GLICO Life Insurance
                </Text>
              </li>
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  GLICO General
                </Text>
              </li>
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  GLICO Pensions
                </Text>
              </li>
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  GLICO Capital
                </Text>
              </li>
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  GLICO Properties
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[11px] items-start justify-start w-[163px]">
            <Text
              className="text-[15px] text-white-A700 w-full"
              size="txtMontserratSemiBold15WhiteA700"
            >
              Links
            </Text>
            <ul className="flex flex-col gap-[5px] items-start justify-start w-full common-column-list">
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  About Us
                </Text>
              </li>
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  Forms
                </Text>
              </li>
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  Service Providers
                </Text>
              </li>
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  News{" "}
                </Text>
              </li>
              <li>
                <Text
                  className="text-[15px] text-white-A700"
                  size="txtMontserratRegular15WhiteA700"
                >
                  Contact
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
            <Text
              className="text-[15px] text-white-A700 w-full"
              size="txtMontserratSemiBold15WhiteA700"
            >
              Office
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[24.00px] text-[15px] text-white-A700"
                size="txtMontserratRegular15WhiteA700"
              >
                <>
                  GLICO Healthcare Ltd, Airport Residential Area Accra.
                  <br />
                  No. 3 Kofi Annan Street, Accra Ghana
                  <br />
                  GPS Location (GA-152-5527)
                </>
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
