import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const SunkwaplanCategoriescard = (props) => {
  const [dropBtn, setDropBtn] = useState("btn1");
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
      <>
  {/* component */}
  <div className="bg-white-A700">
    <div
      className="group flex flex-col gap-1 rounded-lg bg-black px-5 text-white"
      tabIndex={1}
    >
      <div 
      className="bg-gray-100 flex flex-col items-start justify-start p-3 rounded-[12px] w-[523px] md:w-full"
      onClick={() => setDropBtn("btn1")}>
            <Input
              name="duration_One"
              placeholder="Under 60 Years Plan"
              className="common-pointer font-montserrat font-semibold p-0 placeholder:text-indigo-800 text-left text-lg sm:text-[16px] w-full"
              wrapClassName="flex w-full"
              readonly="true"
              onClick={() => setDropBtn("btn1")}
              suffix={
                <Img
                  className="h-5 ml-[35px] my-px"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                  onClick={() => setDropBtn("btn1")}
                />
              }
              shape="square"
              color="gray_100"
              size="md"
              variant="fill"
            ></Input>
            {dropBtn === "btn1" &&
            <div className={`bg-gray-100 flex flex-col items-center justify-start w-full h-auto max-h-auto transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000`}>
              <Text
                className="leading-[24.00px] max-w-[459px] md:max-w-full text-[15px] text-gray-700 sm:px-4"
                size="txtMontserratRegular15"
              >
                {props?.descriptionTwo}
              </Text>

              <div 
              className="bg-gray-100 flex flex-col items-start justify-start px-5 py-2 mt-5 w-full"
              onClick={() => navigate("/under60seven")}>
              <Button
                className={`common-pointer !text-deep_purple-A700 cursor-pointer font-montserrat min-w-[111px] rounded-[16px] text-[15px] text-center`}
                onClick={() => navigate("/under60seven")}
                color="deep_purple_A700_14"
                size="xs"
                variant="fill"
              >
                {props?.learnMore}
              </Button>
            </div>
            </div>
            }
            
          </div>
    </div>
    
    <div
      className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
      tabIndex={3}
    >
      <div 
      className="bg-gray-100 flex flex-col items-start justify-start p-3 rounded-[12px] w-[523px] md:w-full"
      onClick={() => setDropBtn("btn2")}>
            <Input
              name="duration_One"
              placeholder="60 Years and Above Plan"
              className="common-pointer font-montserrat font-semibold p-0 placeholder:text-indigo-800 text-left text-lg sm:text-[16px] w-full"
              wrapClassName="flex w-full"
              readonly="true"
              onClick={() => setDropBtn("btn2")}
              suffix={
                <Img
                  className="h-5 ml-[35px] my-px"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                  onClick={() => setDropBtn("btn2")}
                />
              }
              shape="square"
              color="gray_100"
              size="md"
              variant="fill"
            ></Input>
            {dropBtn === "btn2" && 
            <div className={`bg-gray-100 flex flex-col items-center justify-start w-full h-auto max-h-0 opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000`}>
              <Text
                className="leading-[24.00px] max-w-[459px] md:max-w-full text-[15px] text-gray-700 sm:px-4"
                size="txtMontserratRegular15"
              >
                {props?.descriptionThree}
              </Text>

              <div className="bg-gray-100 flex flex-col items-start justify-start px-5 py-2 mt-5 w-full"
              onClick={props?.onClick}>
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
            }
            
          </div>
    </div>
  </div>
</>

        
      </div>
    </>
  );
};

SunkwaplanCategoriescard.defaultProps = {
  descriptionTwo:
    "Designed for individuals who are below the age of 60. Offering a comprehensive range of health benefits to ensure that your family members receive the care they need",
  descriptionThree:
    "Designed for individuals who are above the age of 60. Offering a comprehensive range of health benefits to ensure that your family members receive the care they need",
  learnMore: "Learn more",
};

export default SunkwaplanCategoriescard;
