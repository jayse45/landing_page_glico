import React from "react";

import { Button, Img, Input, Text } from "components";

const SunkwaplanCategoriescard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="bg-gray-100 flex flex-col items-start justify-start p-3 rounded-[12px] w-[523px] md:w-full">
            <Input
              name="duration"
              placeholder="Under 60 Years Plan"
              className="font-montserrat font-semibold p-0 placeholder:text-indigo-800 text-left text-lg w-full"
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
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="bg-gray-100 flex flex-col items-start justify-start p-3 rounded-[12px] w-[523px] md:w-full">
            <Input
              name="duration_One"
              placeholder="60 Years and Above Plan"
              className="font-montserrat font-semibold p-0 placeholder:text-indigo-800 text-left text-lg w-full"
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
            <div className="bg-gray-100 flex flex-col items-center justify-start p-5 w-full">
              <Text
                className="leading-[24.00px] max-w-[459px] md:max-w-full text-[15px] text-gray-700"
                size="txtMontserratRegular15"
              >
                {props?.descriptionThree}
              </Text>
            </div>
            <div className="bg-gray-100 flex flex-col items-center justify-start px-5 py-2 w-full">
              <Button
                className="common-pointer !text-deep_purple-A700 cursor-pointer font-montserrat min-w-[111px] rounded-[16px] text-[15px] text-center"
                onClick={props?.onClick}
                color="deep_purple_A700_14"
                size="xs"
                variant="fill"
              >
                {props?.learnMore}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SunkwaplanCategoriescard.defaultProps = {
  descriptionThree:
    "Designed for individuals who are above the age of 60. Offering a comprehensive range of health benefits to ensure that your family members receive the care they need",
  learnMore: "Learn more",
};

export default SunkwaplanCategoriescard;
