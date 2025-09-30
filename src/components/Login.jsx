import { BACKGROUND_IMAGE_URL } from "../utils/constant";
import { useState } from "react";
import { useRef } from "react";
import { Checkvalidate } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { AVATAR_URL } from "../utils/constant";

const Login = () => {
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
            photoURL: AVATAR_URL,
          })
            .then(() => {
              //profile updated successfully
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: AVATAR_URL,
                })
              );
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

      <Header />
      <div className="absolute">
        <img className="w-screen h-screen object-cover" src={BACKGROUND_IMAGE_URL} alt="logo" />
      </div>

      <form onSubmit={(e) => { e.preventDefault() }} className='w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 absolute p-8 md:p-12 bg-black/80 my-20 sm:my-24 md:my-36 mx-auto right-0 left-0 text-white rounded-lg'>

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