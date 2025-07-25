import { LOGO_URL } from "../utils/constant";
import { BACKGROUND_IMAGE_URL } from "../utils/constant";
import { useState } from "react";
import { useRef } from "react";
import { Checkvalidate } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  //useRef can be used to access DOM elements directly, but in this case, we are not using it.
  const name = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    // validate the form data
    const message = Checkvalidate(emailRef.current.value, passwordRef.current.value);
    setError(message);
    // if there is no error, then we can proceed with the form submission
    if (message) return;

    if (!isSignIn) {
      //signup logic
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnb_I_OQt7Mcts15Kf9qwVchNCE7SJlkfYQ&s"
          })
          .then(() => {
            //profile updated successfully
            const { uid, email,displayName,photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate('/browse');
          }).catch((error) => {
            // An error occurred
            setError(error.message);
          });
          console.log("User signed up successfully:", user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });

    }
    else {
      //signin logic
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("User signed in successfully:", user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }

  }

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

      <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>

        <h1 className='text-3xl font-bold py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input ref={name} type='text' placeholder='Name' className='border p-4 my-4 rounded w-full bg-gray-700' />
        }

        <input ref={emailRef} type='text' placeholder='Email address' className='border p-4 my-4 rounded w-full bg-gray-700' />

        <input ref={passwordRef} type='password' placeholder='Password' className='border p-4 my-4 rounded w-full bg-gray-700' />

        <p>{error && <span className='text-red-500'>{error}</span>}</p>

        <button className='bg-red-600 p-4 my-6 w-full rounded-lg' onClick={handleFormSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>

        <p className='cursor-pointer mt-4' onClick={toggleSignInForm} >{isSignIn ? "New to Netflix? Sign up now" : "Already have an account? Sign in"}</p>

      </form>

    </div>

  )
}

export default Login;