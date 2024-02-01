import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text, BackButton } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Tabs from "components/Tabs";
import { LastSection } from "components/LastSection";
import Modal from "react-modal";
import { PurchaseRequestForm } from "components/PurchaseRequestForm";
//
const Under60ThreePage = () => {
  const navigate = useNavigate();

  const modalStyle = {
    content: {
      "position": "absolute",
      inset: "40px 2.5%",
      "border": "1px solid rgb(204, 204, 204)",
      background: "rgb(255, 255, 255)",
      overflow: "auto",
      "border-radius": "4px",
      outline: "none",
      padding: "20px",
      width: "clamp(60%, 95%, 1850px)",
    }
  }


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full overflow-x-hidden">
        <Header className="bg-white-A700 flex gap-[188px] items-center justify-center px-20 md:px-5 py-5 w-full" />
        <BackButton onClick={() => navigate("/under60seven")} />
        <div className="bg-white-A700 flex flex-col items-end justify-start md:pl-10 pl-[103px] w-full sm:pl-4">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[62px] items-center justify-end w-full sm:flex-col-reverse">
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
                The Enhanced Package from GLICO's Sunkwa Health Plan is your go-to choice for reliable and affordable health coverage,
                perfect for those under 60. Designed with both individuals and families in mind, this plan offers a solid foundation of
                protection, ensuring you're covered without breaking the bank. It's all about keeping you healthy and stress-free,
                without the hefty price tag.
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
                      24/7 Support Access
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
                className="cursor-pointer font-medium min-w-[134px] mt-[46px] text-[15px] text-center transition duration-300 ease-in-out hover:bg-indigo-800 hover:text-white-A700 sm:mb-4"
                shape="round"
                color="blue_gray_101"
                size="sm"
                variant="outline"
                // onClick={() => navigate("/payments")}
                onClick={() => openModal()}
              >
                Purchase Plan
              </Button>
            </div>
            <Img
              className="md:flex-1 h-[563px] sm:h-auto object-cover w-[54%] md:w-full object-top"
              src="images/img_rectangle28.png"
              alt="rectangleTwentyEight"
            />
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-end py-[33px] w-full sm:justify-start">
          <Text
            className="mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-800 tracking-[-1.00px]"
            size="txtMontserratBold32"
          >
            Benefits
          </Text>
          <Tabs out_benefit={"4,000"} in_benefit={"30,000"} cancer_amount={"20,000"} type={"Enhanced"} dental_amount={"500"} eye_amount={"600"} />
        </div>
        <LastSection />
        <Footer className="bg-indigo-800 flex items-center justify-center md:px-5 w-full" />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Compare Plans"
          style={modalStyle}
          disableEnforcefocus
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          closeTimeoutMS={300}
        >
          <div className="text-right">
            <Button
              color="indigo_800"
              size="xs"
              variant="fill"
              shapes="round"
              onClick={() => closeModal()}
            >
              <p className="font-bold">X</p>
            </Button>
          </div>
          <PurchaseRequestForm plan="Under 60" Package="Enhanced" amount="GH¢ 7002.93" />
        </Modal>
      </div>
    </>
  );
};

export default Under60ThreePage;
