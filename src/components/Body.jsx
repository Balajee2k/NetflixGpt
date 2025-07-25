import { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, clearUser } from '../utils/userSlice';
const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ])
  useEffect(() => {
    // Any initialization logic can go here
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid,email,displayName,photoURL } = user;
        dispatch(
          addUser({
             uid:uid,
             email:email,
             displayName:displayName,
             photoURL:photoURL, })
            );
      } else {
        // User is signed out
        dispatch(clearUser({}));
      }
    });

  }, [])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body