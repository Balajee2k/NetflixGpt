import React from 'react';
import { LOGO_URL } from '../utils/constant';

const Header = () => {
  return (
    <div className=' absolute flex justify-between items-center p-4 bg-black text-white'>
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
        <h2>🔔</h2>
        <h2>Account</h2>
      </div>
    </div>

  )
}

export default Header