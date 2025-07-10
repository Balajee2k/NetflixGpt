import { LOGO_URL } from "../utils/constant";
import { BACKGROUND_IMAGE_URL } from "../utils/constant";
import { useState } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (

    <div>
      <header className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 '>
        <img className='w-44' src={LOGO_URL} alt="Logo" />
      </header>

      <div className="absolute">
        <img src={BACKGROUND_IMAGE_URL} alt="Background" />
      </div>

      <form className='w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>

        <h1 className='text-3xl font-bold py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input type='text' placeholder='Name' className='border p-4 my-4 rounded w-full bg-gray-700' />
        }

        <input type='text' placeholder='Email address' className='border p-4 my-4 rounded w-full bg-gray-700' />

        <input type='password' placeholder='Password' className='border p-4 my-4 rounded w-full bg-gray-700' />

        <button className='bg-red-600 p-4 my-6 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>

        <p className='cursor-pointer mt-4' onClick={toggleSignInForm} >{isSignIn ? "New to Netflix? Sign up now" : "Already have an account? Sign in"}</p>

      </form>


    </div>

  )
}

export default Login;