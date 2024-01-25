import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import DropdownButton from "components/DropdownButton";

const aboutOptions = [
  {
    "name": "Who We Are",
    "link": "https://glicohealth.com/who-we-are/"
  },
  {
    "name": "Board Of Directors",
    "link": "https://glicohealth.com/board-of-directors/"
  },
  {
    "name": "Management Team",
    "link": "https://glicohealth.com/management-team/"
  },
  {
    "name": "Corporate Social Responsibility",
    "link": "https://glicohealth.com/corporate-social-responsibility/"
  },
];

const pasOptions = [
  {
    "name": "GLICO HealthPlan",
    "link": "https://glicohealth.com/glico-healthplan/"
  },
  {
    "name": "GLICO Third-Party Administration Service",
    "link": "https://glicohealth.com/glico-tpa/"
  },
  {
    "name": "GLICO E-Health",
    "link": "https://glicohealth.com/glico-e-health/"
  },
  {
    "name": "GLICO Top-Up Scheme",
    "link": "https://glicohealth.com/glico-top-up-scheme/"
  },
]

const ccareOptions = [
  {
    "name": "Service Providers",
    "link": "https://glicohealth.com/service-providers/"
  },
  {
    "name": "Claims Procedure",
    "link": "https://glicohealth.com/claims-procedure/"
  },
  {
    "name": "Frequently Asked Questions",
    "link": "https://glicohealth.com/frequently-asked-questions/"
  },
  {
    "name": "Download Newsletter",
    "link": "https://glicohealth.com/enewsletter-signups/"
  },
]

const Header = (props) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setDropdownOpen(!isDropdownOpen)
  };

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[120px] sm:gap-[40%] items-center justify-between w-full sm:w-full">
          <div className="header-row my-px">
            <Img
              className="h-auto object-cover w-[200px]"
              src="images/img_glicohealthcarelogo300x301.png"
              alt="glicohealthcare"
            />
            <div className="mobile-menu mr-4 bg-white-A700">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => handleDropdownOpen()}
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              {
                isDropdownOpen &&
                <ul className="origin-top-left left-0 pl-8 mt-4 absolute sm:flex-col flex-row gap-1 items-start justify-start w-full z-30 bg-white-A700">
                  <li className="w-[200px] mb-5">
                    <Text
                      className="text-[12px] text-indigo-800"
                      size="txtMontserratRegular15Indigo800"
                      onClick={() => window.open("https://glicohealth.com/")}
                    >
                      Home
                    </Text>
                  </li>
                  <li className="text-[12px] text-indigo-800 my-5 w-[200px]">
                    <DropdownButton className="w-full" head={"About Us"} options={aboutOptions} />
                  </li>
                  <li className="text-[12px] text-indigo-800 my-5">
                    <DropdownButton head={"Product & Services"} options={pasOptions} />
                  </li>
                  <li className="text-[12px] text-indigo-800 my-5">
                    <DropdownButton head={"Customer Care"} options={ccareOptions} />
                  </li>
                  <li>
                    <Text
                      className="text-[12px] text-indigo-800 my-5"
                      size="txtMontserratRegular15Indigo800"
                      onClick={() => window.open("https://glicohealth.com/contact-us/")}
                    >
                      Contact Us
                    </Text>
                  </li>
                  <li>
                    <Button
                      className="cursor-pointer font-medium min-w-[65px] text-[12px] text-center transition duration-300 ease-in-out text-white-A700 sm:mb-4"
                      shape="round"
                      color="indigo_800"
                      size="xs"
                      variant="fill"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                  </li>
                </ul>
              }
            </div>
          </div>
          <ul className="flex sm:flex-col flex-row gap-6 sm:hidden items-start justify-start w-auto common-row-list">
            <li>
              <Text
                className="text-[15px] text-indigo-800"
                size="txtMontserratRegular15Indigo800"
                onClick={() => window.open("https://glicohealth.com/")}
              >
                Home
              </Text>
            </li>
            <li className="text-[15px] text-indigo-800">
              <DropdownButton head={"About Us"} options={aboutOptions} />
            </li>
            <li className="text-[15px] text-indigo-800">
              <DropdownButton head={"Product & Services"} options={pasOptions} />
            </li>
            <li className="text-[15px] text-indigo-800">
              <DropdownButton head={"Customer Care"} options={ccareOptions} />
            </li>
            <li>
              <Text
                className="text-[15px] text-indigo-800 w-[90px]"
                size="txtMontserratRegular15Indigo800"
                onClick={() => window.open("https://glicohealth.com/contact-us/")}
              >
                Contact Us
              </Text>
            </li>
          </ul>
          <div className="flex common-pointer flex-row gap-10 sm:hidden items-start justify-start w-auto">
            <Button
              className="cursor-pointer font-medium min-w-[85px] text-[15px] text-center transition duration-300 ease-in-out hover:bg-indigo-800 hover:text-white-A700 sm:mb-4"
              shape="round"
              color="blue_gray_101"
              size="xs"
              variant="outline"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
