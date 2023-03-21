

import React, { useState } from 'react'

const options = [
  { id: 1, label: 'English (UK)' },
  { id: 2, label: 'English (US)' },
  { id: 3, label: 'English (AUS)' },
];
function Option() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-[#F0F5FA] py-3 px-4 rounded-2xl gap-9 text-[#B0B7C3] flex items-center justify-between w-full"
        onClick={toggleDropdown}
      >
        <span className="font-medium text-[12px] leading-4">{options[0].label}</span>
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5.5 6L10 1" stroke="#B0B7C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </button>
      {isOpen && (
        <div className="absolute z-10 w-full shadow-md bg-[#F0F5FA] rounded-md  mt-2">
          <ul className="py-2">
            {options.map((option) => (
              <li key={option.id} className="px-4 py-2 hover:bg-[#eff0f1] rounded-2xl cursor-pointer">
                <label className="inline-flex items-center">

                  <span className=" text-[#B0B7C3] font-medium text-[12px] leading-4 ">{option.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Option
