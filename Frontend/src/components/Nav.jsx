import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets1 } from '../assets/admin_assets/assets'
import { assets2 } from '../assets/frontend_assets/assets'
import { Storecontext } from '../context/Storecontext'

const Nav = ({ setshowLogin }) => {
    const [first, setfirst] = useState("home");
    const { token, settoken } = useContext(Storecontext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        settoken("");
        navigate("/");
    }
    return (
        <div className='flex justify-around items-center pt-6 '>
            <img src={assets2.logo} alt="" className='h-5' />
            {/* routes */}
            <div className='md:flex md:gap-8 uppercase items-center hidden md:block '>
                <Link onClick={() => setfirst("home")} className={`${first === "home" ? "border-b-2 border-blue-300 " : ""} cursor-pointer`}>home</Link>
                <a href='#menu' onClick={() => setfirst("menu")} className={`${first === "menu" ? "border-b-2 border-blue-300 " : ""} cursor-pointer`}>menu</a>
                <a href='#footer' onClick={() => setfirst("contact")} className={`${first === "contact" ? "border-b-2 border-blue-300" : ""} cursor-pointer`}>contact us</a>
            </div>
            {/* other */}
            <div className='flex gap-9 uppercase items-center'>
                <img className='cursor-pointer h-6' src={assets2.search_icon} alt="" />
                <Link to={'/cart'}><img className='cursor-pointer h-8' src={assets2.basket_icon} alt="" /></Link>
                {!token ? <button className='px-4 py-2 border rounded-full hover:bg-green-300 transition duration-350  cursor-pointer' onClick={() => setshowLogin(true)}>sign in </button> :
                    <div className='cursor-pointer  relative group '>
                        <img src={assets2.profile_icon} alt="" className='h-8' />
                        {/* <ul className='hidden border right-[20%] absolute z-10 w-30 group-hover:block rounded top-12 bg-white'> */}
                        <ul className='hidden group-hover:block absolute top-full right-2 z-10 w-32 rounded bg-orange-100'>
                            <Link to={'/myorders'} className='flex gap-3 py-2 px-2'><img src={assets2.bag_icon} alt="" className='h-5' /> orders</Link>
                            <hr />
                            <li onClick={logout} className='flex gap-3 py-2 px-2'><img src={assets2.logout_icon} alt="" className='h-5' /> logout</li>
                        </ul>
                    </div>}
            </div>
        </div>
    )
}

export default Nav