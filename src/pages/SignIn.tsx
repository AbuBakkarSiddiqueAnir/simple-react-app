
import React, { useState } from 'react'
import { Apple, Email, Google, Name, Password } from '../assets'
import { Divider, TextInput, OauthButton, PasswordInput, AuthButton } from '../components'
import emailValidator from './../util/emailValidate';



function SignUp() {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState('')

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handlerInputChange = (value: string) => {
    setPassword(value)
  }


  const handleSignUp = () => {

  }


  return (
    <section className='container mx-auto flex justify-center  h-auto py-28'>
      <div className='flex flex-col '>
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
        <div className='mb-8'>
          <PasswordInput placeHolder='Create Password' icon={Password} onChange={handlerInputChange} />
        </div>

        <div className="mb-8">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600"
              name="accept-terms"
              checked={isChecked}
              onChange={handleCheck}
            />
            <span className="ml-2">
              Remember Me
            </span>
          </label>
        </div>

        <AuthButton label='Sign In' onClickHandler={handleSignUp} />

        <div className='font-medium mt-8 text-center text-[16px] leading-5 text-textColor-third '>
          Don’t have an account yet? <a href="" className='text-primaryColor'>Sign Up</a>
        </div>

      </div>
    </section>
  )
}

export default SignUp
