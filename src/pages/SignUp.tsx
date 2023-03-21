
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Apple, Email, Google, Name, Password } from '../assets'
import { Divider, TextInput, OauthButton, PasswordInput, AuthButton } from '../components'
import PasswordStrength from '../components/ui/passwordStrength/StrengthMeter';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import emailValidator from './../util/emailValidate';
import { signUp } from './../redux/slice/AuthSlice';
import { useNavigate } from 'react-router-dom';



function SignUp() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [email,setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)

  const [name, setName] = useState<string>('')

  const router =  useNavigate()

  const dispatch = useAppDispatch();


  const { token, isLoading, error } = useAppSelector((state) => state.auth);



  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleEmail = (value:string, isValid:boolean) => {
    setEmail(value);
    setIsEmailValid(isValid)
  }

  const handleName = (value:string, isValid?:boolean) => {
    setName(value)
  }



  const handleSignUp = async () => {

    if(!isChecked) {
      alert('Accept terms and conditions before sign up')
      return
    }

    if(!isEmailValid) {
      alert('Enter a valid email')
      return
    }

    let data = {
      email:'janet.weaver@reqres.in',password
    }

    dispatch(signUp(data))

  }


  return (
    <section className='container mx-auto flex justify-center  h-auto py-28 px-6'>
      <div className='flex flex-col '>
        <h3 className='font-bold text-center pb-5 text-[26px] leading-[31px] text-heading-001'>Getting Started</h3>
        <p className='text-lg text-center pb-8 leading-[22px] font-medium text-textColor-first'>Create an account to continue!</p>
        <div className='flex gap-7  flex-col md:flex-row'>
          <OauthButton icon={Google} label='Sign Up with Google' onClickHandler={() => { }} />
          <OauthButton icon={Apple} label='Sign Up with Apple ID' onClickHandler={() => { }} />
        </div>
        <Divider />
        <div className='mb-10'>
          <TextInput placeHolder='Your Email' icon={Email} onChange={handleEmail} validator={emailValidator} />
        </div>
        <div className='mb-7'>
          <TextInput placeHolder='Your Name' icon={Name} onChange={handleName} />
        </div>
        <div className='mb-8'>
          <PasswordInput placeHolder='Create Password' icon={Password} onChange={setPassword} />
          <div className='mt-5'></div>
          <PasswordStrength password={password} />
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
            <span className="ml-2 font-medium text-center text-[16px] leading-5 text-textColor-third">
              I accept the
              <a href="#" className="text-blue-500 ml-1 hover:underline">
                terms and conditions
              </a>
            </span>
          </label>
        </div>

        <AuthButton label='Sign Up' onClickHandler={handleSignUp} />

        <div className='font-medium mt-8 text-center text-[16px] leading-5 text-textColor-third '>
          Don’t have an account yet? <Link to="/signin" className='text-primaryColor'>Sign In</Link>
        </div>

      </div>
    </section>
  )
}

export default SignUp
