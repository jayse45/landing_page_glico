import React, { useState } from "react";
import { Button } from "components"; // Import your Button component from Tailwind
import { useNavigate } from "react-router-dom";

const DropdownButton = ({ head, options }) => {
const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleDropdownOpen = () => {
    setDropdownOpen(!isDropdownOpen)
  };

  const handleOptionClick = (option) => {
    setDropdownOpen(false);
    // Perform any other actions based on the selected option
  };

  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="relative inline-block text-left" onMouseLeave={handleMouseLeave}>
      <Button className="flex hover:text-[#02bff3] w-max" onMouseEnter={handleMouseEnter}>
        {head} <span>
        <svg
          className={`ml-1 h-4 w-4 mt-[2px] sm:h-3 sm:w-3`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#02bff3"
        >
          <path d="M10 14l-8-8h16z" />
        </svg>
        </span>
       
      </Button>

      {isDropdownOpen && (
        <div className="origin-top-right w-max absolute left-0 right-0 border-l-[1px] border-r-[1px] border-[#02bff3] shadow-lg bg-white z-20 bg-white-A700 sm:relative sm:bg-black-900 sm:z-50 sm:w-full">
          <div className="pt-1 sm:pt-0">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={
                    () => {
                        handleOptionClick(option)
                        window.open(option.link);
                    }}
                className="block px-4 py-2 text-sm text-[#234092] w-full text-left hover:text-red-500 border-b-[1px] border-gray-200 sm:bg-white-A700 sm:w-[300px]"
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
