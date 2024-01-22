import { Img, Text } from "components";
import React from "react";

const LastSection = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[336px] md:px-5 relative w-full sm:px-0">
            <Img
              className="h-[336px] m-auto object-cover w-full sm:object-[80%]"
              src="images/cta1.png"
              alt="rectangleTwo"
            />
            <div className="absolute  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[61px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-8 items-start justify-start mb-[11px] md:ml-[0] ml-[74px] w-auto md:w-full">
                <div className="flex flex-col gap-5 items-start justify-center w-[598px] md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtMontserratSemiBold24"
                    >
                      Need more information?
                    </Text>
                    <Text
                      className="text-[15px] text-white-A700 w-full"
                      size="txtMontserratRegular15WhiteA700"
                    >
                      Get in touch with our team to know about all that Sunkwa has
                      for you
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[27px] items-center justify-start w-auto">
                  <Text
                    className="text-[24px] text-white-A700 w-auto"
                    size="txtMontserratSemiBold15WhiteA700"
                  >
                    030 274 6500
                  </Text>
                  <Text
                    className="text-[24px] text-white-A700 w-auto"
                    size="txtMontserratSemiBold15WhiteA700"
                  >
                    030 225 5742
                  </Text>
                  </div>
                  <div>
                  <Text
                    className="text-[15px] text-white-A700 w-auto"
                    size="txtMontserratMedium"
                  >
                    Contact Customer Experience Center for more info.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export { LastSection };