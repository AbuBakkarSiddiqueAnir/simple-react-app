
import React from 'react'
import { Apple, Email, Google, Name, Password } from '../assets'
import { Divider, TextInput, OauthButton, PasswordInput } from '../components'
import emailValidator from './../util/emailValidate';



function SignIn() {

  const handlerInputChange = () => {

  }
  return (
    <section className='container mx-auto flex justify-center  h-[100vh]'>
      <div className='flex flex-col'>
          <h3 className='font-bold text-center pb-5 text-[26px] leading-[31px] text-heading-001'>Getting Started</h3>
          <p className='text-lg text-center pb-8 leading-[22px] font-medium text-textColor-first'>Create an account to continue!</p>
          <div className='flex gap-7'>
            <OauthButton icon={Google} label='Sign Up with Google' onClickHandler={()=>{}}/>
            <OauthButton icon={Apple}  label='Sign Up with Apple ID' onClickHandler={()=>{}}/>
          </div>
          <Divider/>
          <div className='mb-10'>
          <TextInput placeHolder='Your Email' icon={Email} onChange={handlerInputChange} validator={emailValidator}/>
          </div>
          <div className='mb-7'>
          <TextInput placeHolder='Your Name' icon={Name} onChange={handlerInputChange} validator={emailValidator}/>
          </div>
          <PasswordInput placeHolder='Create Password' icon={Password} onChange={handlerInputChange} validator={emailValidator}/>

      </div>
    </section>
  )
}

export default SignIn
