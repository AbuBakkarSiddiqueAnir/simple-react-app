

import React,{useState} from 'react'

const options = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
];
function Option() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-white py-2 px-4 rounded-md shadow-md text-gray-700 flex items-center justify-between w-full"
        onClick={toggleDropdown}
      >
        <span className="font-medium">{options[0].label}</span>
        <svg
          className="w-4 h-4 ml-2 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white rounded-md shadow-md mt-2">
          <ul className="py-2">
            {options.map((option) => (
              <li key={option.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">{option.label}</span>
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
