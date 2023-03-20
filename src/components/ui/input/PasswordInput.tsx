
import { useState, useEffect } from 'react';
import PasswordStrength from '../passwordStrength/StrengthMeter';



interface Props {
  icon: string;
  onChange: (value: string) => void;
  placeHolder: string;
}

const Input: React.FC<Props> = ({ icon, onChange, placeHolder }) => {
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
          type={!showPassword ? 'text' : 'password'}
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
          {!showPassword ? (
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_16_154)">
                <path d="M10 4.03906C6.17879 4.03906 2.71351 6.12968 0.15649 9.52541C-0.0521632 9.80361 -0.0521632 10.1923 0.15649 10.4705C2.71351 13.8703 6.17879 15.9609 10 15.9609C13.8212 15.9609 17.2865 13.8703 19.8435 10.4746C20.0522 10.1964 20.0522 9.8077 19.8435 9.5295C17.2865 6.12968 13.8212 4.03906 10 4.03906ZM10.2741 14.1976C7.73755 14.3572 5.64284 12.2665 5.80239 9.72588C5.93331 7.63117 7.63118 5.9333 9.72589 5.80238C12.2625 5.64283 14.3572 7.73345 14.1976 10.2741C14.0626 12.3647 12.3647 14.0626 10.2741 14.1976ZM10.1473 12.2584C8.78081 12.3443 7.65163 11.2192 7.74164 9.85271C7.81119 8.72353 8.72763 7.81118 9.85681 7.73754C11.2233 7.65162 12.3525 8.77671 12.2625 10.1432C12.1888 11.2765 11.2724 12.1888 10.1473 12.2584Z" fill="#DCDFE5" />
              </g>
              <defs>
                <clipPath id="clip0_16_154">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

          )}
        </button>

      </div>
    </div>
  );
};

export default Input;