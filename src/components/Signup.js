import React, { useState } from 'react'
import Header from './Header'

const Signup = () => {
    const [isSignInForm, setSignInForm]= useState(true);
    const toggleSignInForm =()=>{
      setSignInForm(!isSignInForm);
    }
  return (
       
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='img'></img>
        </div>
        <form className='bg-black bg-opacity-80 rounded-lg absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
            <p className='text-3xl py-4 font-bold'>{isSignInForm ? "Sign In" : "Sign up"}</p>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In Now"}</p>
        </form> 
        
    </div>
  )
}

export default Signup