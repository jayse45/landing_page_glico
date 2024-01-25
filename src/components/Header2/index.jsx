import React from "react";

import { Img, Text } from "components";

const Header2 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[18px] md:h-auto object-cover w-[180px] sm:w-full"
          src="images/img_glicohealthcarelogo300x301.png"
          alt="glicohealthcare"
        />
        <ul className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start w-auto sm:w-full common-row-list">
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
              About us
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
              Customer care
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
        <div className="flex flex-row gap-10 items-start justify-start w-auto">
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
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
