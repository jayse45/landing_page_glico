import React, { useState } from 'react';

const Select = ({options, setChange}) => {
  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Handler function for the onChange event
  const handleSelectChange = (event) => {
    // Update the state with the selected value
    setSelectedValue(event.target.value);
    setChange(event.target.value);
  };

  return (
    <div className='border border-blue_gray-100 border-opacity-5 border-solid bg-transparent w-full flex sm:w-full'>
      <select 
      className='pb-3 pt-[11px] px-[11px] placeholder:text-black-900 text-[15px] w-full text-left'
      value={selectedValue} 
      onChange={handleSelectChange}
      autoFocus={false}
      >
        {options.map((option, index) => {
            return <option key={option} value={index === 0 ? "" : option}>{option}</option> 
        })}
      </select>
    </div>
  );
};

export { Select };