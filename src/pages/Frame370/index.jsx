import React from "react";

import { Button, Img, Input, Text } from "components";
import Frame370Categoriescard from "components/Frame370Categoriescard";
import Frame370ColumndurationOne from "components/Frame370ColumndurationOne";

const Frame370Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat sm:gap-10 md:gap-10 gap-[304px] justify-start mx-auto p-[99px] md:px-10 sm:px-5 w-full">
        <div className="border border-dashed border-deep_purple-A200 flex md:flex-col flex-row gap-[50px] items-center justify-start mr-[186px] mt-2 p-5 rounded-[5px] w-[86%] md:w-full">
          <div className="flex flex-col gap-[19px] items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="bg-gray-100 flex flex-col items-start justify-start p-3 rounded-[12px] w-[523px] sm:w-full">
                <Input
                  name="duration"
                  placeholder="Under 60 Years Plan"
                  className="font-semibold p-0 placeholder:text-indigo-800 text-left text-lg w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-px"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  shape="square"
                  color="gray_100"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <Frame370ColumndurationOne className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full" />
          </div>
          <div className="flex flex-col gap-[19px] items-start justify-start w-auto sm:w-full">
            <Frame370ColumndurationOne
              className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full"
              description="Designed for individuals who are below the age of 60. Offering a comprehensive range of health benefits to ensure that your family members receive the care they need"
            />
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="bg-gray-100 flex flex-col items-start justify-start p-3 rounded-[12px] w-[523px] sm:w-full">
                <Input
                  name="duration_Three"
                  placeholder="60 Years and Above Plan"
                  className="font-semibold p-0 placeholder:text-indigo-800 text-left text-lg w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-px"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  shape="square"
                  color="gray_100"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <Frame370Categoriescard className="flex flex-col gap-[19px] items-start justify-start mb-[199px] ml-5 md:ml-[0] w-auto sm:w-full" />
      </div>
    </>
  );
};

export default Frame370Page;
