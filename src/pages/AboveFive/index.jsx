import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const AboveFivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex gap-[188px] items-center justify-center px-20 md:px-5 py-5 w-full" />
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[1440px] md:min-w-full"
          onClick={() => navigate("/aboveone")}
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
          <div className="!text-gray-700 font-medium text-[15px] text-left">
            Back
          </div>
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
                size="txtMontserratRegular15"
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
                size="txtMontserratSemiBold15"
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
                      size="txtMontserratRegular15"
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
                      size="txtMontserratRegular15"
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
                      size="txtMontserratRegular15"
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
                      size="txtMontserratRegular15"
                    >
                      Versatility
                    </Text>
                  </div>
                </div>
              </List>
              <Button
                className="cursor-pointer font-medium min-w-[134px] mt-[46px] text-[15px] text-center"
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
              src="images/img_rectangle28_3.png"
              alt="rectangleTwentyNine"
            />
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-start py-[58px] w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-800 tracking-[-1.00px]"
            size="txtMontserratBold32"
          >
            Benefits
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-start mt-[35px] md:px-5 w-auto md:w-full">
            <div className="flex flex-col items-center justify-start py-[5px]">
              <Text
                className="text-center text-gray-600 text-xl tracking-[-1.00px]"
                size="txtMontserratMedium20"
              >
                Out-Patient Benefits
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-1">
              <Text
                className="text-center text-indigo-800 text-xl tracking-[-1.00px]"
                size="txtMontserratBold20"
              >
                In-Patient Benefits
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start p-1">
              <Text
                className="text-center text-gray-600 text-xl tracking-[-1.00px]"
                size="txtMontserratMedium20"
              >
                Additional Benefits
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start mb-6 mt-[42px] md:px-10 px-20 sm:px-5 w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-px">
              <div className="flex flex-col items-start justify-start w-px">
                <div className="border-blue_gray-100 border-solid border-t h-16 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-[84px] w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-[124px] w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-[84px] w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-16 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-[84px] w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-36 w-full"></div>
                <div className="border-blue_gray-100 border-solid border-t h-11 w-full"></div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1279px] w-full">
              <div className="border-blue_gray-50 border-r border-solid flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="text-[15px] text-blue_gray-900_01 w-auto"
                    size="txtMontserratSemiBold15Bluegray90001"
                  >
                    Total max benefit per person per annum
                  </Text>
                </div>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-blue_gray-900_01 w-full"
                  size="txtMontserratSemiBold15Bluegray90001"
                >
                  Hospital Accommodation
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Fees for Doctors, Specialists, Surgeon, Anesthetists,
                  Physiotherapist
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                    Surgery
                  </span>
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-normal">
                    (Minor & Major) e.g. Piles, Fibroid, Hernia, Thyroid,
                    Prostate, Spine, etc.
                  </span>
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t h-16 pb-[31px] pl-[9px] sm:pr-5 pr-[35px] pt-[13px] text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Laparoscopic procedures are to be disclosed at the point of
                  registration.
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-blue_gray-900_01 w-full"
                  size="txtMontserratSemiBold15Bluegray90001"
                >
                  Operating Theatre Fees
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                    Surgical Procedure
                  </span>
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-normal">
                    (Minor & Major)
                  </span>
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-blue_gray-900_01 w-full"
                  size="txtMontserratSemiBold15Bluegray90001"
                >
                  Ward Medicines & Take home Medicines
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                    Consumables
                  </span>
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-normal">
                    (Infusion, Materials for Dressing, Sutures, Bandages,
                    Syringes, Catheters, Giving Sets, Cannulae)
                  </span>
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                    Pathology Procedures
                  </span>
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-normal">
                    - Lab. Tests requested by a doctor. (Biopsies,
                    Histopathology tests)
                  </span>
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-blue_gray-900_01 w-full"
                  size="txtMontserratRegular15Bluegray90001"
                >
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                    Imaging{" "}
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-semibold">
                    (
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-normal">
                    X-ray, USG Scan, CT Scan(No limit on body parts), MRI
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-normal">
                    (No limit on body parts)
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-normal">
                    {" "}
                    )
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-gray-700 font-montserrat text-left font-normal">
                    {" "}
                  </span>
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t pl-2 sm:pr-5 pr-[35px] py-3 text-[15px] text-blue_gray-900_01 w-full"
                  size="txtMontserratSemiBold15Bluegray90001"
                >
                  Intensive Care
                </Text>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] text-[15px] text-gray-700"
                    size="txtMontserratRegular15"
                  >
                    <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                      Auxiliary Services
                    </span>
                    <span className="text-gray-700 font-montserrat text-left font-semibold">
                      <>
                        {" "}
                        <br />
                      </>
                    </span>
                    <span className="text-gray-700 font-montserrat text-left font-normal">
                      <>
                        Ambulance <br />
                        Physiotherapy <br />
                        Emergencies as a result of legal addiction e.g.
                        alcoholism, smoking, etc.
                      </>
                    </span>
                  </Text>
                </div>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] text-[15px] text-gray-700"
                    size="txtMontserratRegular15"
                  >
                    <>
                      Cancer Treatment <br />
                      Investigations (CT Scan, MRI, Angiography), Radiotherapy,
                      Chemotherapy, Surgery <br /> Organ Transplant (Heart,
                      Kidney, Liver) <br />
                      Kidney Dialysis
                    </>
                  </Text>
                </div>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="text-[15px] text-gray-700 w-auto"
                    size="txtMontserratRegular15"
                  >
                    Annual Medical Checkup/Screening (At designated Centers)
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[366px]">
                <div className="overflow-x-auto w-full">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:pr-10 pr-20 sm:pr-5 w-full">
                      <div className="flex flex-col items-center justify-center px-2 py-3 w-[366px]">
                        <Text
                          className="text-[15px] text-center text-indigo-800 w-auto"
                          size="txtMontserratSemiBold15"
                        >
                          GH¢4,000
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-center px-2 py-3 w-[366px]">
                        <Text
                          className="text-[15px] text-center text-indigo-800 w-auto"
                          size="txtMontserratSemiBold15"
                        >
                          GH¢30,000
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:pr-10 pr-20 sm:pr-5 w-full">
                      <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center px-2 py-3 w-[366px]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_checkmark_indigo_800.svg"
                          alt="checkmark"
                        />
                      </div>
                      <Button
                        className="cursor-pointer text-[15px] text-center w-[366px]"
                        shape="square"
                        color="blue_gray_100"
                        size="sm"
                        variant="outline"
                      >
                        Side Ward
                      </Button>
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_One"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Two"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Text
                        className="leading-[20.00px] max-w-[350px] md:max-w-full text-[15px] text-center text-indigo-800"
                        size="txtMontserratRegular15Indigo800"
                      >
                        Covered up to the cost of same traditional procedure
                        /surgery
                      </Text>
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Three"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Four"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Five"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Six"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Seven"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Eight"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Nine"
                      />
                    </div>
                    <div className="border-blue_gray-100 border-solid border-t flex flex-col h-[104px] md:h-auto items-center justify-center md:ml-[0] ml-[1359px] px-2 py-3 w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_checkmark_indigo_800.svg"
                        alt="checkmark_Ten"
                      />
                    </div>
                    <Button
                      className="cursor-pointer h-[104px] md:ml-[0] ml-[1359px] text-[15px] text-center w-full"
                      shape="square"
                      color="blue_gray_100"
                      size="xl"
                      variant="outline"
                    >
                      Covered up to GH¢20,000
                    </Button>
                    <Button
                      className="cursor-pointer md:ml-[0] ml-[1359px] text-[15px] text-center w-full"
                      shape="square"
                      color="blue_gray_100"
                      size="sm"
                      variant="outline"
                    >
                      BP, BMI, FBS, FBC
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-px">
              <div className="flex flex-col items-start justify-start w-px">
                <div className="flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] text-[15px] text-gray-700"
                    size="txtMontserratRegular15"
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
                  className="border-blue_gray-100 border-solid border-t py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Mobile Pharmacy
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Glico Healthcare Beneficiary App
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Client Portal
                </Text>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] text-[15px] text-gray-700"
                    size="txtMontserratRegular15"
                  >
                    <>
                      Quarterly News Letters
                      <br />
                    </>
                  </Text>
                </div>
                <Text
                  className="border-blue_gray-100 border-solid border-t py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Annual Health Seminar
                </Text>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] max-w-[1px] md:max-w-full text-[15px] text-gray-700"
                    size="txtMontserratRegular15"
                  >
                    Special Assistance at accredited
                    Government/Regional/Tertiary hospitals
                  </Text>
                </div>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] text-[15px] text-gray-700"
                    size="txtMontserratRegular15"
                  >
                    <>
                      E-Medicine Service
                      <br />
                    </>
                  </Text>
                </div>
                <div className="border-blue_gray-100 border-solid border-t flex flex-col items-start justify-start py-3 w-full">
                  <Text
                    className="leading-[20.00px] text-[15px] text-gray-700"
                    size="txtMontserratRegular15"
                  >
                    <>
                      Chronic conditions management
                      <br />
                      <br />
                    </>
                  </Text>
                </div>
                <Text
                  className="border-blue_gray-100 border-solid border-t py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Death Benefit For Enrollee
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Auxiliary Services
                </Text>
                <Text
                  className="border-blue_gray-100 border-solid border-t py-3 text-[15px] text-gray-700 w-full"
                  size="txtMontserratRegular15"
                >
                  Complementary Medicine
                </Text>
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
            <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[61px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-10 items-start justify-start mb-[11px] md:ml-[0] ml-[74px] w-auto md:w-full">
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
                      Get in touch with our team know about all that Sunkwa has
                      for you
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[308px] text-[15px] text-center"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Contact Customer Experience Center
                  </Button>
                </div>
                <div className="flex flex-row gap-[27px] items-end justify-start w-auto">
                  <Text
                    className="text-[15px] text-white-A700 w-auto"
                    size="txtMontserratSemiBold15WhiteA700"
                  >
                    030 274 6500
                  </Text>
                  <Text
                    className="text-[15px] text-white-A700 w-auto"
                    size="txtMontserratSemiBold15WhiteA700"
                  >
                    030 225 5742
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-indigo-800 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboveFivePage;
