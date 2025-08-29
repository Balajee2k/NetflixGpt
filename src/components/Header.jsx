import { LOGO_URL } from '../utils/constant';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, clearUser } from '../utils/userSlice';
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //after sign out that dispatch actionm is automatically called in Body.jsx using onAuthStateChanged api by firebase
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error:", error);
    });
  };

  useEffect(() => {
    // Any initialization logic can go here
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(clearUser());
        navigate("/");
      }
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO_URL} alt="Logo" />

    {user && (

      <div className='flex  items-center space-x-4'>
        <h2>🔍</h2>
        <img className='w-10 h-10 rounded-full' src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&s"} alt="User Avatar" />
        <h2>User: {user?.displayName || "User"}</h2>
        <button onClick={handleSignOut} className='bg-red-600 px-4 py-2 rounded'>Sign Out</button>
      </div>
    )}
    </div>

  )
}

export default Header;