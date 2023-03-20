
import { useState, useEffect } from 'react';
import StrengthMeter from '../passwordStrength/StrengthMeter';


interface Props {
  icon: string;
  onChange: (value: string) => void;
  placeHolder:string;
}

const Input: React.FC<Props> = ({ icon, onChange,placeHolder }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    onChange(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };



  return (
    <div className="flex flex-col w-full">
      <div className="relative ">
        <div className='absolute inset-y-0 left-0 flex items-center pl-4 '>
          <img src={icon} alt="" className='' />
        </div>

        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          className="w-full py-5 px-[42px]  rounded-2xl border border-[#F3F3F3] text-textColor-third text-[16px] leading-5 focus:outline-none "
          value={password}
          placeholder={placeHolder}
          onChange={handleInputChange}
        />

            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-4 "
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8zm1.293-6.293a1 1 0 00-1.414-1.414l-2 2a1 1 0 101.414 1.414l2-2z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.5 10a6.5 6.5 0 0112.196-3.354A6.502 6.502 0 1116.5 10a6.5 6.5 0 01-12.196 3.354A6.502 6.502 0 013.5 10zm6.5 3a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <StrengthMeter/>
      </div>
    </div>
  );
};

export default Input;