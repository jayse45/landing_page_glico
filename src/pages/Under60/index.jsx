import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const Under60Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex gap-[188px] items-center justify-center px-20 md:px-5 py-5 w-full" />
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[1440px] md:min-w-full"
          onClick={() => navigate("/under60seven")}
          leftIcon={
            <Img
              className="h-5 mt-px mr-2.5"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-medium text-[15px] text-left">Back</div>
        </Button>
        <div className="bg-white-A700 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[103px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[62px] items-center justify-end w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[42%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[-1.00px]"
                size="txtMontserratBold32"
              >
                Enhanced
              </Text>
              <Text
                className="leading-[24.00px] mt-[27px] text-[15px] text-gray-700 w-full"
                size="txtMontserratRegular15Gray700"
              >
                The Enhanced Package from GLICO 60 Year and Above Sunkwa Health
                Plan is crafted to offer essential health coverage while
                maintaining affordability. Tailored for individuals and families
                in their golden age seeking a foundational level of protection,
                this package provides peace of mind without straining your
                budget.
              </Text>
              <Text
                className="mt-14 text-[15px] text-indigo-800"
                size="txtMontserratSemiBold15Indigo800"
              >
                Key Features
              </Text>
              <List
                className="sm:flex-col flex-row gap-[9px] grid sm:grid-cols-1 grid-cols-2 justify-start mt-[25px] w-[555px] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-center justify-start p-1 w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="flex-1 text-[15px] text-gray-700 w-auto"
                      size="txtMontserratRegular15Gray700"
                    >
                      Essential Coverage{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="flex-1 text-[15px] text-gray-700 w-auto"
                      size="txtMontserratRegular15Gray700"
                    >
                      Affordable Premiums
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Text
                      className="flex-1 text-[15px] text-gray-700 w-auto"
                      size="txtMontserratRegular15Gray700"
                    >
                      Network Access
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                    <Text
                      className="flex-1 text-[15px] text-gray-700 w-auto"
                      size="txtMontserratRegular15Gray700"
                    >
                      Versatility
                    </Text>
                  </div>
                </div>
              </List>
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[134px] mt-[46px] text-[15px] text-center"
                onClick={() => navigate("/paymentportalone")}
                shape="round"
                color="indigo_800"
                size="sm"
                variant="fill"
              >
                Purchase Plan
              </Button>
            </div>
            <Img
              className="md:flex-1 h-[563px] sm:h-auto object-cover w-[54%] md:w-full"
              src="images/img_rectangle28.png"
              alt="rectangleTwentyEight"
            />
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-start md:pr-10 sm:pr-5 pr-[58px] py-[58px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-800 tracking-[-1.00px]"
            size="txtMontserratBold32"
          >
            Benefits
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[70px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start mt-[35px] w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start py-[5px] w-full">
              <Text
                className="text-center text-gray-600_01 text-xl tracking-[-1.00px]"
                size="txtMontserratMedium20"
              >
                Out-Patient Benefits
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-1 w-full">
              <Text
                className="text-center text-gray-600_01 text-xl tracking-[-1.00px]"
                size="txtMontserratMedium20"
              >
                In-Patient Benefits
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-1 w-full">
              <Text
                className="text-center text-indigo-800 text-xl tracking-[-1.00px]"
                size="txtMontserratBold20"
              >
                Additional Benefits
              </Text>
            </div>
          </List>
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start mb-6 mt-[42px] md:px-10 px-20 sm:px-5 w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-px">
              <div className="flex flex-col items-start justify-start w-px">
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-16 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-[124px] w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-[104px] w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-[104px] w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1279px] w-full">
              <div className="flex sm:flex-1 flex-col items-start justify-start w-[472px] sm:w-full">
                <div className="flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] text-[15px] text-gray-700"
                    size="txtMontserratRegular15Gray700"
                  >
                    <>
                      Vitamins <br />
                      Vitamins A, B, C, D, E, K and Multivitamins in/for: <br />
                      Conditions caused by Avitaminosis
                      <br />
                      Reconvalescence
                    </>
                  </Text>
                </div>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-[9px] sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15Gray700"
                >
                  Mobile Pharmacy
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-[9px] sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15Gray700"
                >
                  Glico Healthcare Beneficiary App
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-[9px] sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15Gray700"
                >
                  Client Portal
                </Text>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="text-[15px] text-gray-700 w-auto"
                    size="txtMontserratRegular15Gray700"
                  >
                    Quarterly News Letters
                  </Text>
                </div>
                <Input
                  name="frameSixtyFour"
                  placeholder="Annual Health Seminar"
                  className="p-0 placeholder:text-gray-700 text-[15px] text-left w-full"
                  wrapClassName="w-full"
                  shape="square"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                ></Input>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] max-w-[472px] md:max-w-full text-[15px] text-gray-700"
                    size="txtMontserratRegular15Gray700"
                  >
                    Special Assistance at accredited
                    Government/Regional/Tertiary hospitals
                  </Text>
                </div>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="text-[15px] text-gray-700 w-auto"
                    size="txtMontserratRegular15Gray700"
                  >
                    E-Medicine Service
                  </Text>
                </div>
                <Text
                  className="border-blue_gray-100 border-solid border-t pb-[35px] pl-[9px] sm:pr-5 pr-[35px] pt-[13px] text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15Gray700"
                >
                  Chronic conditions management
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-[9px] sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15Gray700"
                >
                  Death Benefit For Enrollee
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-[9px] sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15Gray700"
                >
                  Auxiliary Services
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-[9px] sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15Gray700"
                >
                  Complementary Medicine
                </Text>
              </div>
              <div className="bg-orange-50 flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col h-[104px] md:h-auto items-start justify-start py-3 w-full">
                  <Text
                    className="text-[15px] text-center text-gray-700 w-auto"
                    size="txtMontserratRegular15Gray700"
                  >
                    Covered within benefit limit
                  </Text>
                </div>
                <Button
                  className="!text-gray-700 cursor-pointer text-[15px] text-center w-full"
                  shape="square"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                >
                  Delivery of prescribed medications at place of convenience
                </Button>
                <Button
                  className="!text-gray-700 cursor-pointer text-[15px] text-center w-full"
                  shape="square"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                >
                  About Glico Health Care, Contact numbers, Exclusions, FAQ’s
                  and Service Provider accessibility.
                </Button>
                <Button
                  className="!text-gray-700 cursor-pointer text-[15px] text-center w-full"
                  shape="square"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                >
                  Access to online utilization report
                </Button>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] max-w-[807px] md:max-w-full text-[15px] text-center text-gray-700"
                    size="txtMontserratRegular15Gray700"
                  >
                    Health Tips, Updates on policy, Goodwill messages from Glico
                    team, etc. Daily updates on health related issues on social
                    media platforms (i.e. INSTAGRAM, LINKEDIN, FACEBOOK,
                    TWITTER)
                  </Text>
                </div>
                <Button
                  className="!text-gray-700 cursor-pointer text-[15px] text-center w-full"
                  shape="square"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                >
                  Education on ailment trends
                </Button>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-center py-3 w-full">
                  <Text
                    className="leading-[20.00px] max-w-[719px] md:max-w-full text-[15px] text-center text-gray-700"
                    size="txtMontserratRegular15Gray700"
                  >
                    Designated Reps at Government/Regional/Tertiary accredited
                    hospitals to assist in swift service delivery
                  </Text>
                </div>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] max-w-[807px] md:max-w-full text-[15px] text-center text-gray-700"
                    size="txtMontserratRegular15Gray700"
                  >
                    Access to doctors for consultation by virtual means at the
                    comfort of your home when unable to visit the hospital.
                  </Text>
                </div>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start p-3 w-full">
                  <Text
                    className="leading-[20.00px] max-w-[783px] md:max-w-full text-[15px] text-center text-gray-700"
                    size="txtMontserratRegular15Gray700"
                  >
                    A dedicated team will call known members with chronic
                    conditions to have an update of their medications taken.
                    These medications will be supplied to the members on monthly
                    basis as and when prescription changes. The program tends to
                    reduce cost and the overall utilization of the group.
                  </Text>
                </div>
                <Button
                  className="!text-gray-700 cursor-pointer text-[15px] text-center w-full"
                  shape="square"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                >
                  GHS 10,000 will be paid to the family upon death of enrollee
                </Button>
                <Button
                  className="!text-gray-700 cursor-pointer text-[15px] text-center w-full"
                  shape="square"
                  color="blue_gray_100"
                  size="sm"
                  variant="outline"
                >
                  Covered within benefit limit
                </Button>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="text-[15px] text-center text-gray-700 w-auto"
                    size="txtMontserratRegular15Gray700"
                  >
                    Herbal Medicine
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[336px] md:px-5 relative w-full">
            <Img
              className="h-[336px] m-auto object-cover w-full"
              src="images/img_rectangle2.png"
              alt="rectangleTwo"
            />
            <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[67px] md:px-10 sm:px-5 w-full">
              <Text
                className="md:ml-[0] ml-[122px] mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratSemiBold32"
              >
                Need more information?
              </Text>
              <Text
                className="leading-[24.00px] md:ml-[0] ml-[122px] mt-4 text-[15px] text-white-A700 w-[33%] sm:w-full"
                size="txtMontserratRegular15WhiteA700"
              >
                Get in touch with our team know about all that Sunkwa has for
                you
              </Text>
              <div className="flex flex-row gap-[27px] items-end justify-start md:ml-[0] ml-[123px] mt-[15px] w-auto">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtMontserratSemiBold22"
                >
                  030 274 6500
                </Text>
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtMontserratSemiBold22"
                >
                  030 225 5742
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[123px] mt-[18px] text-[15px] text-white-A700"
                size="txtMontserratMedium15WhiteA700"
              >
                Contact Customer Experience Center for more info.
              </Text>
            </div>
          </div>
        </div>
        <Footer1 className="bg-indigo-800 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Under60Page;
