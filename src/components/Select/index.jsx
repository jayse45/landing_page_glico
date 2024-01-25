import React, { useState } from 'react';

const Select = ({options}) => {
  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Handler function for the onChange event
  const handleSelectChange = (event) => {
    // Update the state with the selected value
    setSelectedValue(event.target.value);
  };

  return (
    <div className='border border-blue_gray-100 border-solid flex mt-6 w-[545px] sm:w-full'>
      <select 
      className='pb-3 pt-[11px] px-[11px] placeholder:text-black-900 text-[15px] text-left w-full'
      value={selectedValue} 
      onChange={handleSelectChange}>
        {options.map(option => {
            return <option key={option} value={option}>{option}</option> 
        })}
      </select>
    </div>
  );
};

export { Select };