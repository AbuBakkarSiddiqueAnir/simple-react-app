
import { useState } from 'react';
import emailValidator from './../../../util/emailValidate';


interface Props {
  icon: string;
  onChange: (value: string) => void;
  placeHolder: string;
  validator?:(value: string) => boolean
}

const Input: React.FC<Props> = ({ icon, placeHolder, onChange, validator }) => {

  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if(validator) {
      setIsValid(validator(event.target.value));
    }
    onChange(event.target.value)
  };


  return (
    <div className="flex flex-col w-full">
      <div className="relative">
        <div className='absolute inset-y-0 left-0 flex items-center pl-4 '>
          <img src={icon} alt="" className='' />
        </div>

        <input
          id="password"
          type={'text'}
          className={`w-full py-5 px-[42px]  rounded-2xl border border-[#F3F3F3] text-textColor-third text-[16px] leading-5 focus:outline-none   ${!isValid && 'focus:border-[#FF5630] border-[#FF5630] shadow-[0px_6px_8px_rgba(255,86,48,0.1)] '} `}
          value={inputValue}
          placeholder={placeHolder}
          onChange={handleInputChange}
        />
   {
        !isValid && (
          <p className='font-medium text-[14px] leading-[17px] text-textColor-forth absolute -bottom-8'>Please enter a valid email address.</p>
        )
      }
      </div>


    </div>
  );
};

export default Input;