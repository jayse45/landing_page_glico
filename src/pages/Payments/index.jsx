import React, { useState } from "react";
import { Button, CheckBox, Img, Line, Text, Input } from "components";
import StepWizard from "react-step-wizard";




const ActionButtons = (props) => {
  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div>
      <div>
        <div className="w-full">
          {props.currentStep < props.totalSteps && (
            <Button
              className="cursor-pointer font-medium max-w-full mt-[121px] text-center text-xl tracking-[-0.40px] w-full"
              shape="round"
              color="green_500_01"
              size="lg"
              variant="fill"
              onClick={handleNext}
            >
              Redeem
            </Button>
          )}
          {props.currentStep === props.totalSteps && (
            <Button
              className="cursor-pointer font-medium max-w-[716px] mt-[121px] text-center text-xl tracking-[-0.40px] w-full"
              shape="round"
              color="green_500_01"
              size="lg"
              variant="fill"
              onClick={handleFinish}
            >
              Redeem
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const One = ({
  user,
  selectedItem,
  valueSelected,
  setValueSelected,
  networkSelected,
  setNetworkSelected,
  processing,
  setProcessing,
  ...props
}) => {
  const handleNext = () => {
    

   

    props.nextStep();
  };

  return (
    <div>
      <div className="p-5 flex flex-col items-start justify-start w-[99%] md:pt-2 md:w-full sm:p-5 sm:pr-6 sm:pt-0 sm:flex-wrap">
        <Text
          className="leading-[100.00%] md:text-[26px] text-[30px] sm:text-[20px] text-green-400 sm:text-base sm:flex-wrap tracking-[-1.60px] w-[99%] sm:w-full sm:mb-0"
          size="txtInterSemiBold20"
        >
          Get free airtime from your favorite network
        </Text>

        <Text
          className="sm:text-sm sm:font-medium sm:mx-5 sm:mt-5 sm:mb-2 text-blue_gray-900_01 text-xl tracking-[-0.40px] m-5 mb-2"
          size="txtInterRegular20Bluegray90001"
        >
          Select Network
        </Text>
        <div className="visible sm:hidden">
          <div className="flex flex-row gap-2 flex-wrap items-start justify-start ml-[5px] mb-5 overflow-scroll w-[100%] md:mb-0 md:w-full sm:flex-wrap md:flex-row md:flex-wrap md:ml-4">
            <Button
              className={`${
                networkSelected === "MTN" && "bg-[#204391] text-white-A700"
              } cursor-pointer md:mb-2 sm:mb-0 flex items-center justify-center min-w-[100px] sm:min-w-[90px] rounded-[28px] sm:text-sm focus:bg-[#204391] focus:text-white-A700`}
              leftIcon={
                <Img
                  className="h-5 mt-px mb-1 mr-1"
                  src="images/img_checkmark_gray_400.svg"
                  alt="checkmark"
                />
              }
              color="gray_100_01"
              size="md"
              variant="fill"
              onClick={() => setNetworkSelected("MTN")}
            >
              <div
                className={`${
                  networkSelected === "MTN" && "bg-[#204391] text-white-A700"
                } sm:text-sm text-left text-xl md:text-lg mx-1 tracking-[-0.40px] focus:bg-[#204391] focus:text-white-A700`}
              >
                MTN
              </div>
            </Button>
            <Button
              className={`${
                networkSelected === "VODAFONE" && "bg-[#204391] text-white-A700"
              } cursor-pointer flex items-center justify-center min-w-[146px] md:min-w-[130px] sm:min-w-[100px] rounded-[28px] sm:text-sm focus:bg-[#204391] focus:text-white-A700`}
              leftIcon={
                <Img
                  className="h-5 mt-px mb-1 mr-1"
                  src="images/img_checkmark_gray_400.svg"
                  alt="checkmark"
                />
              }
              color="gray_100_01"
              size="md"
              variant="fill"
              onClick={() => setNetworkSelected("VODAFONE")}
            >
              <div
                className={`${
                  networkSelected === "VODAFONE" &&
                  "bg-[#204391] text-white-A700"
                } sm:text-sm text-left text-xl md:text-lg tracking-[-0.40px] focus:bg-[#204391] focus:text-white-A700`}
              >
                Vodafone
              </div>
            </Button>
            <Button
              className={`${
                networkSelected === "TIGO" && "bg-[#204391] text-white-A700"
              } cursor-pointer flex items-center justify-center md:min-w-[130px] min-w-[157px] sm:min-w-[110px] rounded-[28px] sm:text-sm focus:bg-[#204391] focus:text-white-A700`}
              leftIcon={
                <Img
                  className="h-5 mt-px mb-1 mr-1"
                  src="images/img_checkmark_gray_400.svg"
                  alt="checkmark"
                />
              }
              color="gray_100_01"
              size="md"
              variant="fill"
              onClick={() => setNetworkSelected("TIGO")}
            >
              <div
                className={`${
                  networkSelected === "TIGO" && "bg-[#204391] text-white-A700"
                } sm:text-sm text-left text-xl md:text-lg tracking-[-0.40px] focus:bg-[#204391] focus:text-white-A700`}
              >
                AirtelTigo
              </div>
            </Button>
            <Button
              className={`${
                networkSelected === "GLO" && "bg-[#204391] text-white-A700"
              } cursor-pointer flex items-center justify-center md:min-w-[90px] min-w-[108px] sm:min-w-[85px] rounded-[28px] sm:text-sm focus:bg-[#204391] focus:text-white-A700`}
              leftIcon={
                <Img
                  className="h-5 my-0.5 mr-1"
                  src="images/img_checkmark_gray_400.svg"
                  alt="checkmark"
                />
              }
              color="gray_100_01"
              size="md"
              variant="fill"
              onClick={() => setNetworkSelected("GLO")}
            >
              <div
                className={`${
                  networkSelected === "GLO" && "bg-[#204391] text-white-A700"
                } sm:text-sm text-left text-xl md:text-lg tracking-[-0.40px] focus:bg-[#204391] focus:text-white-A700`}
              >
                GLO
              </div>
            </Button>
          </div>
        </div>
        <div className="hidden sm:block w-full">
          <div className="ml-[5px] mb-5 overflow-scroll w-[90%] sm:flex-wrap md:flex-row md:flex-wrap md:ml-4">
           
          </div>
        </div>

        <Text
          className="sm:text-sm sm:font-medium sm:mx-5 sm:mt-0 sm:mb-2 text-blue_gray-900_01 text-xl tracking-[-0.40px] m-5 my-0"
          size="txtInterRegular20Bluegray90001"
        >
          Select Package
        </Text>
        <div className="visible sm:hidden">
          <div className="flex flex-wrap md:flex-row flex-row gap-3 items-start justify-start mb-[-5px] ml-[-5px] mt-4 overflow-scroll w-[100%] md:w-full md:flex-wrap md:ml-5 sm:flex-wrap sm:ml-5">
            {selectedItem?.value?.map((i) => {
              return (
                <Button
                  key={i?.value_label}
                  className={`${
                    valueSelected?.purchase_point === i?.purchase_point &&
                    "bg-[#204391] text-white-A700"
                  } cursor-pointer flex items-center justify-center min-w-[156px] rounded-[28px] sm:text-sm focus:bg-[#204391] focus:text-white-A700 group `}
                  leftIcon={
                    <Img
                      className="h-5 mt-px mb-1 ml-1 mr-2 md:mr-1 sm:h-4 sm:ml-0"
                      src="images/img_checkmark_gray_400.svg"
                      alt="checkmark"
                    />
                  }
                  color="gray_100_01"
                  size="md"
                  variant="fill"
                  onClick={() => setValueSelected(i)}
                >
                  <div
                    className={`${
                      valueSelected?.purchase_point === i?.purchase_point &&
                      "bg-[#204391] text-white-A700"
                    } sm:text-sm text-left text-xl tracking-[-0.40px] focus:bg-[#204391] mr-2 md:text-lg md:mr-1 md:py-2`}
                  >
                    {i?.value_label}{" "}
                    <span
                      className={`${
                        valueSelected?.purchase_point === i?.purchase_point
                          ? "text-white-A700"
                          : " text-orange-400 group-focus:text-white-A700"
                      }`}
                    >
                      ({i?.purchase_point}pts)
                    </span>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="hidden sm:block w-full">
          <div className="ml-[5px] mb-5 overflow-scroll w-[90%] sm:flex-wrap md:flex-row md:flex-wrap md:ml-4">
            
          </div>
        </div>

        <div className="flex md:flex-col flex-row gap-5 content-end items-center justify-between mt-[20px] md:gap-[20px] sm:gap-1 sm:mt-1 w-full sm:justify-start">
          <div className="bg-green-50 flex sm:flex-1 flex-col flex-wrap items-center justify-start p-4 rounded-[12px] w-[60%] md:w-[92%] sm:w-full">
            <Text
              className="leading-[120.00%] max-w-[409px] md:max-w-full sm:text-[15px] text-gray-900_01 text-xl tracking-[-0.40px] md:mx-1"
              size="txtInterRegular20Gray90001"
            >
              <span className="text-green-800 font-inter text-left font-normal ">
                You currently have
              </span>
              <span className="text-gray-900_01 font-inter text-left font-normal">
                {" "}
              </span>
              <span className="text-deep_orange-500 font-inter text-left font-semibold">
                {user?.loyalty?.points}pts
              </span>
              {/* <span className="text-green-800 font-inter text-left font-normal">
                You can purchase the package
              </span> */}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-medium md:mt-0 my-2 text-center sm:text-sm text-xl tracking-[-0.40px] w-[40%] md:h-14 sm:h-10 sm:my-0 sm:mt-5 sm:w-full"
            shape="round"
            color={processing ? "gray_100_01" : "green_500_01"}
            size="lg"
            variant="fill"
            onClick={handleNext}
            disabled={processing}
          >
            {!processing ? "Continue" : "Loading..."}
          </Button>
        </div>
      </div>

      <br />
    </div>
  );
};

const Two = ({
  phoneNumber,
  setPhoneNumber,
  processing,
  setProcessing,
  ...props
}) => {
  const handleNext = () => {
    
    props.nextStep();
  };

  return (
    <div className="w-full" style={{ width: "100%" }}>
      <div className="flex flex-col last:justify-end items-start justify-start w-[90%] md:w-full p-[40px] sm:p-4">
      
        <div className="flex flex-col justify-start w-full max-w-[716px] h-auto mt-5 sm:h-auto sm:mt-3">
          <div className="flex flex-col gap-6 items-start justify-start max-w-[716px] mt-[10px] w-full mb-[-490] sm:gap-4 md:mb-4">
            <Text
              className="text-blue_gray-900_01 text-xl tracking-[-0.40px] w-full mb-[-10] sm:text-sm sm:font-medium"
              size="txtInterRegular20Bluegray90001"
            >
              Enter phone number
            </Text>
            <div className="sm:hidden w-full">
              <Input
                name="value"
                placeholder="0208989934"
                className="p-0 placeholder:text-blue_gray-200 text-center sm:text-left text-xl tracking-[-0.40px] w-full mb-[-470px]"
                wrapClassName="w-full"
                type="tel"
                maxLength={10}
                autoComplete="tel"
                onChange={(value) => {
                  setPhoneNumber(value);
                }}
              />
            </div>
            <div className="hidden sm:flex w-full">
              <Input
                name="value"
                placeholder="0208989934"
                className="p-0 placeholder:text-blue_gray-200 text-center sm:text-left text-xl tracking-[-0.40px] w-full mb-[-470px] sm:text-sm sm:px-[16px]"
                wrapClassName="w-full"
                size="sm"
                type="tel"
                maxLength={10}
                autoComplete="tel"
                onChange={(value) => {
                  setPhoneNumber(value);
                }}
              />
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium max-w-[716px] mt-[10px] text-center text-xl tracking-[-0.40px] w-full md:h-14 sm:h-10 sm:mt-4"
            shape="round"
            color={processing ? "gray_100_01" : "green_500_01"}
            size="lg"
            variant="fill"
            onClick={handleNext}
            disabled={processing}
            >
            {!processing ? "Redeem" : "Loading..."}
          </Button>
        </div>
      </div>
      <br />
    </div>
  );
};

const Three = ({
  user,
  selectedItem,
  valueSelected,
  setValueSelected,
  networkSelected,
  setNetworkSelected,
  phoneNumber,
  setPhoneNumber,
  processing,
  setProcessing,
  ...props
}) => {
  

  const handleNext = async () => {
    const payload = {
      merchant: "MER12193",
      network: networkSelected,
      number: phoneNumber,
      amount: parseFloat(valueSelected?.value_earned),
      payment_type: "LPTS",
      points: parseFloat(valueSelected?.purchase_point),
      customer: user?._cid,
      source: "DIGISTORE REWARDS",
    };

    

    
  };

  return (
    <div>
      <div className="flex flex-col items-start justify-start w-[100%] md:w-full p-[40px] sm:justify-start sm:p-4 sm:h-auto">
        <div>
          <Text
            className="md:text-[26px] text-[32px] text-green-400 tracking-[-1.60px] sm:text-[20px] sm:text-base"
            size="txtInterSemiBold40"
          >
            Confirmation
          </Text>
          <Text
            className="leading-[140.00%] mt-7 text-2xl md:text-[22px] text-blue_gray-900_01 tracking-[-0.48px] w-[93%] sm:w-full sm:text-sm sm:font-medium sm:my-7"
            size="txtInterMedium24"
          >
            <span className="text-blue_gray-900_01 font-inter text-left font-normal sm:font-medium">
              By clicking on redeem you confirm to redeeming
            </span>
            <span className="text-blue_gray-900_01 font-inter text-left font-medium">
              {" "}
            </span>
            <span className="text-blue_gray-900_01 font-inter text-left font-semibold sm:font-medium">
              {valueSelected?.value_label}
            </span>
            <span className="text-blue_gray-900_01 font-inter text-left font-medium">
              {" "}
              ({valueSelected?.purchase_point}pts){" "}
            </span>
            <span className="text-blue_gray-900_01 font-inter text-left font-normal sm:font-medium">
              for{" "}
            </span>
            <span className="text-blue_gray-900_01 font-inter text-left font-semibold sm:font-medium">
              {phoneNumber}
            </span>
          </Text>
        </div>
        <Button
          className={`${""} cursor-pointer font-medium max-w-[721px] mt-[60px] text-center text-xl tracking-[-0.40px] w-full md:h-14 sm:h-10`}
          shape="round"
          color={processing ? "gray_100_01" : "green_500_01"}
          size="lg"
          variant="fill"
          onClick={handleNext}
          disabled={processing}
        >
          {!processing ? "Redeem" : "Loading..."}
        </Button>
      </div>
    </div>
  );
};

const Four = ({
  user,
  selectedItem,
  valueSelected,
  setValueSelected,
  networkSelected,
  setNetworkSelected,
  phoneNumber,
  setPhoneNumber,
  processing,
  setProcessing,
  ...props
}) => {
  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <div className="bg-white-A700 flex flex-col gap-3 items-start justify-start w-auto md:w-full p-[40px] sm:flex-wrap sm:px-[20px] overflow-hidden md:p-8">
        <Text
          className="text-[32px] text-base md:text-[26px] text-green-400 tracking-[-1.44px] w-auto sm:text-[20px] sm:text-base sm:mt-[-10px]"
          size="txtInterSemiBold36"
        >
          Your Redemption is Confirmed!
        </Text>
        <div className="flex flex-wrap sm:px[100px]">
          <Text
            className="leading-[140.00%] my-4 max-w-[560px] md:max-w-full text-blue_gray-800 tracking-[0.30px] text-base sm:text-sm sm:px-[2px] sm:flex-wrap"
            size="txtMontserratRegular20"
          >
            Congratulations! Your recent redemption on Digistore has been
            successfully processed.
          </Text>
          <div className="flex flex-col font-inter gap-3 items-center justify-start w-auto sm:items-start">
            <div className="flex flex-row font-inter gap-3 items-center justify-start w-auto my-4">
              <Button
                className="cursor-pointer flex items-center justify-center rounded-[24px]"
                leftIcon={
                  <Img
                    className="h-6 mb-0.5 mr-2 sm:h-4 sm:ml-2"
                    src="images/img_trophy.svg"
                    alt="trophy"
                  />
                }
                color="deep_orange_50"
                size="sm"
                variant="fill"
              >
                <div className="text-red-900 text-left font-normal text-xl sm:text-xs tracking-[-0.40px] md:py-2 sm:mr-2">
                  You currently have{" "}
                  <span className="text-orange-500 font-bold">
                    {user?.loyalty?.points}pts
                  </span>
                </div>
              </Button>
              <Img
                className="h-8 w-8 sm:h-5 sm:w-5"
                src="images/img_question.svg"
                alt="question"
              />
            </div>
            <Text
              className="text-blue_gray-800 text-base tracking-[0.30px] sm:px[10px] sm:text-sm mb-5"
              size="txtMontserratRegular20"
            >
              Enjoy your reward and happy shopping!
            </Text>
          </div>

          <Text
            className="leading-[140.00%] max-w-[760px] md:max-w-full text-blue_gray-800 text-xl tracking-[0.30px] my-4 sm:text-sm"
            size="txtMontserratRegular20"
          >
            <span className="text-blue_gray-800 font-montserrat text-center font-normal text-base flex-wrap sm:text-sm">
              Discover additional opportunities to use your loyalty points by
              exploring new packages available for redemption.{" "}
            </span>
            <a
              href="/loyalty"
              className="text-blue-500 font-montserrat text-left font-normal underline"
            >
              Click here
            </a>
            <span className="text-blue_gray-800 font-montserrat text-left font-normal text-base sm:text-sm">
              {" "}
              to see what your loyalty points can get you.
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
};

const Payments = (props) => {
  const { selectedItem } = props;
  
  const [stepWizard, setStepWizard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [valueSelected, setValueSelected] = useState(null);
  const [networkSelected, setNetworkSelected] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [processing, setProcessing] = useState(false);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };

  // Remove StepWizard default transitions
  let noTransitions = {
    enterRight: "all 0s ease-in-out",
    enterLeft: "all 0s ease-in-out",
    exitRight: "all 0s ease-in-out",
    exitLeft: "all 0s ease-in-out",
    intro: "all 0s ease-in-out",
  };

  return (
    
      <div className="sm:h-auto md:h-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-auto">
          <div className="flex flex-col gap-[10px] items-center justify-start w-full">
            <div className="md:h-[auto] h-auto relative w-full">
              <Img
                className="h-auto m-auto object-cover min-w-full w-auto max-h-[250px] sm:max-h-max md:max-h-max"
                src="images/img_rectangle81.png"
                alt="rectangleEightyOne"
              />
              <Img
                className="common-pointer absolute h-[52px] sm:h-auto right-[2%] top-[3%] sm:w-[12%] w-[52px]"
                src="images/img_close.svg"
                alt="close"
                onClick={props.onRequestClose}
              />
            </div>
            <StepWizard
              className="w-full"
              instance={assignStepWizard}
              onStepChange={handleStepChange}
              transitions={noTransitions}
            >
              <One
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />
              <Two
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />
              <Three
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />
              <Four
                completeCallback={handleComplete}
                {...{
                  
                  selectedItem,
                  valueSelected,
                  setValueSelected,
                  networkSelected,
                  setNetworkSelected,
                  phoneNumber,
                  setPhoneNumber,
                  processing,
                  setProcessing,
                }}
              />
            </StepWizard>
          </div>
        </div>
      </div>
    
  );
};

export default Payments;
