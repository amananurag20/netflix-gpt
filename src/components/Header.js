import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth'
import { LOGO } from '../utils/constant';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
      <img className='w-48' src={LOGO} alt="img" />

      {user && (<div className='flex p-4 '>
        <img className='w-12 h-12 ' src={user?.photoURL} alt='user-icon'></img>
        <button onClick={handleSignOut} className='font-bold text-white '>(Sign out)</button>
      </div>)}


    </div>
  )
}

export default Header