import { LOGO_URL } from '../utils/constant';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, clearUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    //Toggle GPT Search functionality
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className='w-44 mx-auto md:mx-0' src={LOGO_URL} alt="Logo" />

      {user && (

        <div className='flex  items-center space-x-4'>
          {showGptSearch &&
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          }

          <button className='bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 mx-4 my-2 rounded-lg'
            onClick={handleGptSearchClick}
          >{showGptSearch ? "Home" : "🔍GPT Search"}</button>

          <img className='w-10 h-10 rounded-full' src={user?.photoURL || AVATAR_URL} alt="User Avatar" />

          <h2 className='text-white'> {user?.displayName || "User"}</h2>
          <button onClick={handleSignOut} className='bg-red-600 px-4 py-2 rounded'>Sign Out</button>
        </div>
      )}
    </div>

  )
}

export default Header;