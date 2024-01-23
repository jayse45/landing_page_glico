import React from "react";

import { Img, Text } from "components";

const Header11 = (props) => {
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
          <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
            <Text
              className="text-[15px] text-indigo-800 w-auto"
              size="txtMontserratSemiBold15Indigo800"
            >
              Kofi Batry
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header11.defaultProps = {};

export default Header11;
