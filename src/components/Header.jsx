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
import { AVATAR_URL } from '../utils/constant';

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error:", error);
    });
  };

  useEffect(() => {
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
        dispatch(clearUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-10'>
      {/* Mobile Layout */}
      <div className='block md:hidden'>
        {/* Top Row - Three Column Grid for Perfect Alignment */}
        <div className='grid grid-cols-3 items-center px-4 py-2'>
          {/* Left Side - GPT Search Button or Language */}
          <div className='flex items-center justify-start space-x-1'>
            {user && (
              <>
                {showGptSearch ? (
                  <select
                    className="p-1 bg-gray-900 text-white text-xs rounded"
                    onChange={handleLanguageChange}
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                ) : null}
                
                <button 
                  className='bg-blue-600 text-white hover:bg-blue-700 px-2 py-1 rounded text-xs'
                  onClick={handleGptSearchClick}
                >
                  {showGptSearch ? "🏠 Home" : "🔍 GPT"}
                </button>
              </>
            )}
          </div>

          {/* Center - Netflix Logo */}
          <div className='flex justify-center'>
            <img className='w-24' src={LOGO_URL} alt="Logo" />
          </div>

          {/* Right Side - User Info */}
          <div className='flex items-center justify-end space-x-1'>
            {user && (
              <>
                <img className='w-6 h-6 rounded-full' src={user?.photoURL || AVATAR_URL} alt="User Avatar" />
                <span className='text-white text-xs hidden sm:block'>{user?.displayName || "User"}</span>
                <button onClick={handleSignOut} className='bg-red-600 px-2 py-1 rounded text-xs'>
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className='hidden md:flex justify-between items-center px-8 py-2'>
        <img className='w-44' src={LOGO_URL} alt="Logo" />

        {user && (
          <div className='flex items-center space-x-4'>
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
    </div>
  )
}

export default Header;