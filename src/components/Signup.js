import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR_URL } from '../utils/constant';
 



const Signup = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        //Validate the form data
        const message = checkValidateData(email.current.value, password.current.value);
        // console.log(message);
        setErrorMessage(message);

        if (message) return;

        //Sign in sign up
        if (!isSignInForm) {
            // Sign up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: AVATAR_URL
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                    // console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "--" + errorMessage);

                    // ..
                });

        } else {
            //signup logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "--" + errorMessage);
                    // navigate("/error"); 

                });



        }

    }
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    };

    return (

        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='img'></img>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='bg-black bg-opacity-80 rounded-lg absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
                <p className='text-3xl py-4 font-bold'>{isSignInForm ? "Sign In" : "Sign up"}</p>

                {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>}

                <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' ref={email}></input>

                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' ref={password}></input>

                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In Now"}</p>
            </form>

        </div>
    )
}

export default Signup