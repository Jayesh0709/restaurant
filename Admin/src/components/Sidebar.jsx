import React from 'react'
import { assets1 } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='md:h-[100vh] h-auto md:border-r-1 md:w-[18%]  mx-auto px-2 w-[90%]'>
            <div className='flex md:flex-col flex-row items-baseline-last gap-6 '>
                <NavLink to={'/add'} className='flex border md:border-r-0  rounded rounded-r-none w-37 md:px-4 py-2 gap-3 mt-10 cursor-pointer '>
                    <img src={assets1.add_icon} alt="" className=''/>
                    <p className=''>Add </p>
                </NavLink>
                <NavLink to={'/list'} className='flex border w-37 px-4 py-2 gap-3 md:border-r-0 rounded rounded-r-none cursor-pointer'>
                    <img src={assets1.order_icon} alt="" />
                    <p>List </p>
                </NavLink>
                <NavLink to={'/order'} className='flex border w-37 px-4 py-2 gap-3 md:border-r-0 rounded rounded-r-none cursor-pointer'>
                    <img src={assets1.order_icon} alt="" />
                    <p>orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar