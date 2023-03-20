
import React, { useState } from 'react'
import { Apple, Email, Google, Name, Password } from '../assets'
import { Divider, TextInput, OauthButton, PasswordInput, AuthButton } from '../components'
import PasswordStrength from '../components/ui/passwordStrength/StrengthMeter';
import emailValidator from './../util/emailValidate';



function SignIn() {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState('')

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handlerInputChange = (value:string) => {
    setPassword(value)
  }


  const handleSignIn = () => {

  }


  return (
    <section className='container mx-auto flex justify-center  h-auto'>
      <div className='flex flex-col mt-28'>
        <h3 className='font-bold text-center pb-5 text-[26px] leading-[31px] text-heading-001'>Getting Started</h3>
        <p className='text-lg text-center pb-8 leading-[22px] font-medium text-textColor-first'>Create an account to continue!</p>
        <div className='flex gap-7'>
          <OauthButton icon={Google} label='Sign Up with Google' onClickHandler={() => { }} />
          <OauthButton icon={Apple} label='Sign Up with Apple ID' onClickHandler={() => { }} />
        </div>
        <Divider />
        <div className='mb-10'>
          <TextInput placeHolder='Your Email' icon={Email} onChange={handlerInputChange} validator={emailValidator} />
        </div>
        <div className='mb-7'>
          <TextInput placeHolder='Your Name' icon={Name} onChange={handlerInputChange} />
        </div>
        <div className='mb-16'>
          <PasswordInput placeHolder='Create Password' icon={Password} onChange={handlerInputChange} validator={emailValidator} />

        </div>
        <PasswordStrength password={password} />


        <div className="">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600"
              name="accept-terms"
              checked={isChecked}
              onChange={handleCheck}
            />
            <span className="ml-2">
              I accept the
              <a href="#" className="text-blue-500 ml-1 hover:underline">
                terms and conditions
              </a>
            </span>
          </label>
        </div>


        <AuthButton onClickHandler={handleSignIn}/>

      </div>
    </section>
  )
}

export default SignIn
