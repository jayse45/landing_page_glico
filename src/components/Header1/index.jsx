import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[191px] items-center justify-between w-auto">
          <div className="header-row my-px">
            <Img
              className="h-[18px] md:h-auto object-cover w-[180px]"
              src="images/img_glicohealthcarelogo300x301.png"
              alt="glicohealthcare"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start w-auto common-row-list">
            <li>
              <Text
                className="text-[15px] text-indigo-800"
                size="txtMontserratRegular15Indigo800"
              >
                Home
              </Text>
            </li>
            <li>
              <Text
                className="text-[15px] text-indigo-800"
                size="txtMontserratRegular15Indigo800"
              >
                About Us
              </Text>
            </li>
            <li>
              <Text
                className="text-[15px] text-indigo-800"
                size="txtMontserratRegular15Indigo800"
              >
                Product & Services
              </Text>
            </li>
            <li>
              <Text
                className="text-[15px] text-indigo-800"
                size="txtMontserratRegular15Indigo800"
              >
                Customer Care
              </Text>
            </li>
            <li>
              <Text
                className="text-[15px] text-indigo-800"
                size="txtMontserratRegular15Indigo800"
              >
                Contact Us
              </Text>
            </li>
          </ul>
          <div className="flex flex-row gap-10 sm:hidden items-start justify-start w-auto">
            <Text
              className="text-[15px] text-indigo-800 w-auto"
              size="txtMontserratRegular15Indigo800"
            >
              EN
            </Text>
            <Text
              className="text-[15px] text-indigo-800 w-auto"
              size="txtMontserratMedium15Indigo800"
            >
              Login/Register
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
