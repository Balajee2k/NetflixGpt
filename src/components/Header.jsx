import React from 'react';
import { LOGO_URL } from '../utils/constant';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //after sign out that dispatch actionm is automatically called in Body.jsx using onAuthStateChanged api by firebase
      navigate('/');
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error:", error);
    });
  };


  
  return (
    <div className=' absolute flex justify-between items-center p-4 bg-black text-white w-full'>
      <div>
        <img className='w-24 h-10' src={LOGO_URL} alt="Logo" />
      </div>

      <div className='flex justify-between space-x-4'>
        <h2>Home</h2>
        <h2>Tv Shows</h2>
        <h2>Movies</h2>
        <h2>Latest</h2>
      </div>

      <div className='flex items-center space-x-4'>
        <h2>🔍</h2>
        <img className='w-10 h-10 rounded-full' src={user.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&s"} alt="User Avatar" />
        <h2>User: {user.displayName || "User"}</h2>
        <button onClick={handleSignOut} className='bg-red-600 px-4 py-2 rounded'>Sign Out</button>
      </div>
    </div>

  )
}

export default Header;