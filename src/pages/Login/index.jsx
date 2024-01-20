import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-10 md:gap-10 gap-[78px] items-start mx-auto md:pr-10 sm:pr-5 pr-[188px] w-full sm:h-[100vh] sm:justify-center">
        <div className="hidden sm:block absolute z-[0] h-full">
        <Img
            className="sm-auto object-cover w-full min-h-full object-"
            src="images/img_rectangle7.png"
            alt="rectangleSeven"
          />
        </div>
        <div className="h-full relative w-[59%] md:w-full sm:hidden">
          <Img
            className="h-[100vh] m-auto object-cover w-full"
            src="images/img_rectangle7.png"
            alt="rectangleSeven"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[451px] items-start justify-start left-[16%] top-[12%] w-[62%]">
            <Img
              className="h-[27px] md:h-auto object-cover w-[47%]"
              src="images/img_logoinverted1.png"
              alt="logoinvertedOne"
            />
            <Text
              className="leading-[42.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-full"
              size="txtMontserratSemiBold32"
            >
              Bringing Quality Healthcare to Your Loved Ones in Ghana
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[52px] items-center justify-start md:mt-0 mt-[150px] w-auto sm:w-full sm:justify-center sm:p-6 sm:z-3 sm:relative">
          <a
            href="javascript:"
            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
          >
            <Text size="txtMontserratSemiBold24Black900" className="sm:text-white-A700">Log in</Text>
          </a>
          <div className="flex flex-col gap-9 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
              <Input
                name="frameTwentyNine"
                placeholder="Email"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid w-full"
                type="email"
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                <Input
                  name="frameThirty"
                  placeholder="Password"
                  className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid w-full"
                  type="password"
                  shape="square"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <div className="flex flex-row items-center justify-between w-[444px] sm:w-full sm:mt-4 sm:text-white-A700">
                  <CheckBox
                    className="text-[15px] text-left"
                    inputClassName="h-3 mr-[5px] w-3"
                    name="rememberme"
                    id="rememberme"
                    label="Remember me"
                  ></CheckBox>
                  <Text
                    className="text-[15px] text-black-900 text-right w-auto sm:text-white-A700"
                    size="txtMontserratRegular15Black900"
                  >
                    Forget password?
                  </Text>
                </div>
              </div>
            </div>
            <div className="sm:w-full sm:flex sm:justify-center"> 
              <Button
                className="cursor-pointer text-[15px] text-center w-[444px]"
                shape="square"
                color="indigo_800"
                size="sm"
                variant="fill"
              >
                Login
              </Button>
            </div>
          </div>
          <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
            <Text
              className="text-[15px] text-black-900 w-auto sm:text-white-A700"
              size="txtMontserratRegular15Black900"
            >
              Not an existing user?
            </Text>
            <a className="text-[15px] text-deep_purple-A700 underline w-auto">
              <Text
                className="common-pointer"
                size="txtMontserratRegular15DeeppurpleA700"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
