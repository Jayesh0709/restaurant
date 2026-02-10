import React from 'react'
import { assets1 } from '../assets/assets.js';
const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-3 mx-auto max-w-6xl'>
      <img src={assets1.logo} alt="" />
      <img src={assets1.profile_image} alt="" />
    </div>
  )
}

export default Navbar