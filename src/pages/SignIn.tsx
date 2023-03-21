
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Apple, Email, Google, Name, Password } from '../assets'
import { Divider, TextInput, OauthButton, PasswordInput, AuthButton } from '../components'
import emailValidator from './../util/emailValidate';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './../redux/hooks';
import { signIn } from '../redux/slice/AuthSlice';



function SignIn() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)

  const { token, isLoading, error } = useAppSelector((state) => state.auth);


  const router =  useNavigate()

  const dispatch = useAppDispatch();

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (value:string, isValid:boolean) => {
    setEmail(value);
    console.log(isValid)
    setIsEmailValid(isValid)
  }


  const handleSignIn = () => {
    if(!isEmailValid) {
      alert('Enter a valid email')
      return
    }

    let data = {
      email:'janet.weaver@reqres.in',password
    }

    dispatch(signIn(data))

    if(token) router('/users')
  }


  return (
    <section className='container mx-auto flex justify-center  h-auto py-28 px-6'>
      <div className='flex flex-col '>
        <h3 className='font-bold text-center pb-5 text-[26px] leading-[31px] text-heading-001'>Getting Started</h3>
        <p className='text-lg text-center pb-8 leading-[22px] font-medium text-textColor-first'>Create an account to continue!</p>
        <div className='flex gap-7 flex-col md:flex-row'>
          <OauthButton icon={Google} label='Sign Up with Google' onClickHandler={() => { }} />
          <OauthButton icon={Apple} label='Sign Up with Apple ID' onClickHandler={() => { }} />
        </div>
        <Divider />
        <div className='mb-10'>
          <TextInput placeHolder='Enter Email' icon={Email} onChange={handleEmailChange} validator={emailValidator} />
        </div>
        <div className='mb-8'>
          <PasswordInput placeHolder='Enter Password' icon={Password} onChange={setPassword} />
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
            <span className="ml-2 font-medium  text-center text-[16px] leading-5 text-textColor-third">
              Remember Me
            </span>
          </label>
        </div>

        <AuthButton label='Sign In' onClickHandler={handleSignIn} />

        <div className='font-medium mt-8 text-center text-[16px] leading-5 text-textColor-third '>
          Don’t have an account yet? <Link to="/signup" className='text-primaryColor'>Sign Up</Link>
        </div>

      </div>
    </section>
  )
}

export default SignIn
