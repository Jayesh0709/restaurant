import React, { useContext, useState } from 'react'
import { assets2 } from '../assets/frontend_assets/assets'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Storecontext } from '../context/Storecontext';
const LoginPopup = ({ setshowLogin }) => {

    const { url, settoken } = useContext(Storecontext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const [currentState, setcurrentState] = useState("sign up")

    const navigate = useNavigate();
    const submit = async (data) => {
        if (currentState === "sign up") {
            const response = await axios.post(`${url}/api/user/register`, {
                name: data.name,
                email: data.email,
                password: data.password
            });
            if (!response.data.success) {
                toast.error(response.data.message);
            }
            else {
                console.log(response.data.message);
                toast.success(response.data.message);
                navigate('/');
                settoken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setshowLogin(false);
            }
        }
        else {
            const response = await axios.post(`${url}/api/user/login`, {
                email: data.email,
                password: data.password
            });
            if (!response.data.success) {
                toast.error(response.data.message);
            }
            else {
                toast.success(response.data.message);
                console.log()
                navigate('/');
                settoken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setshowLogin(false);
            }
        }

        // reset();
    }

    return (
        <div className='w-[100%] bg-black/50 pointer-none z-1 h-[100%] absolute grid items-center justify-center '>
            <form action="" onSubmit={handleSubmit(submit)} className='bg-white rounded-xl w-80 grid items-center px-3 pb-4'>
                <div className='py-2  flex justify-between px-3 items-center'>
                    <h2 className='font-bold text-xl'>{currentState}</h2>
                    <img src={assets2.cross_icon} alt="" className='h-4 cursor-pointer' onClick={() => setshowLogin(false)} />
                </div>
                <div className='grid  mt-4 gap-2 justify-center'>
                    {currentState === 'sign up' ? <input
                        {...register('name', { required: { value: true, message: "required" } })}
                        type="text" className='border w-[270px] rounded-sm mt-1 text-black px-2 py-2 outline-0 placeholder:text-gray-500' placeholder='your name ' /> : <></>}
                    <input {...register('email', { required: { value: true, message: "Required" } })}
                        type="text" className='border rounded-sm mt-1 text-black px-2 py-2 outline-0 w-[270px] placeholder:text-gray-500' placeholder='your email ' />
                    <input {...register('password', { required: { value: true, message: "required" } })}
                        type="password" className='border  rounded-sm mt-1 px-2 py-2 text-black outline-0 placeholder:text-gray-500 ' placeholder='your password' />
                </div>
                <button className='border bg-red-300 w-[270px] h-10 border-none mx-auto rounded-sm cursor-pointer mt-7 '>{currentState === "sign up" ? "Create Account" : currentState}</button>
                <div className='flex mt-4 gap-2 pl-3 items-start'>
                    <input type="checkbox" />
                    <p className='text-xs'>By continuing. i agree to the terms of use & privacy policy. </p>
                </div>
                <div className='flex mt-4 mb-2 gap-2 justify-center'>
                    {currentState === "sign up" ? <p className='text-sm'>Already have account ? </p> : <p className='text-sm'>Create a new account ? </p>}
                    {currentState === "sign up" ? <p className='text-sm cursor-pointer text-red-500' onClick={() => setcurrentState("login")}>Login here</p> : <p className='text-sm cursor-pointer text-red-500' onClick={() => setcurrentState("sign up")}>click here</p>}
                </div>
            </form>
        </div>
    )
}

export default LoginPopup