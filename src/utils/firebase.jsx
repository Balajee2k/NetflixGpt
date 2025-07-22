// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9nnlngGXn97ZIgNnrGC64sBSw3qfndh0",
  authDomain: "netflicks-9715e.firebaseapp.com",
  projectId: "netflicks-9715e",
  storageBucket: "netflicks-9715e.firebasestorage.app",
  messagingSenderId: "957729943776",
  appId: "1:957729943776:web:a30441cc8af3bc1627a085",
  measurementId: "G-WZNWYLL914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();