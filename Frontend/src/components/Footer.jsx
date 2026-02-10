import React from 'react'
import { assets2 } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='bg-gray-900 flex flex-col items-center px-5 py-1 mt-10 text-white' id='footer'>
            <div className='flex flex-col sm:flex-row gap-6 md:gap-0 w-auto py-8'>
                <div className='md:w-2/3 md:ml-5'>
                    <img src={assets2.logo} alt="" />
                    <p className='w-auto mt-4 md:w-[80%] my-5 text-sm leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptates inventore ullam harum quos. Iusto ipsum omnis eos fugit iure recusandae tenetur distinctio dicta nostrum eum possimus necessitatibus expedita, sapiente repudiandae, quas vitae veritatis illo? Repellendus amet rerum aspernatur laboriosam.</p>
                    <div className='flex gap-4'>
                        <img src={assets2.facebook_icon} alt="" />
                        <img src={assets2.twitter_icon} alt="" />
                        <img src={assets2.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='md:w-1/5'>
                    <h2 className='font-bold text-xl mb-2 '>COMPANY</h2>
                    <div className='flex flex-col '>
                        <span className='cursor-pointer'>Home</span>
                        <span className='cursor-pointer'>About</span>
                        <span className='cursor-pointer'>Delivery</span>
                        <span className='cursor-pointer'>Privacy Policy</span>
                    </div>
                </div>
                <div className='md:w-1/5'>
                    <h2 className='font-bold text-xl mb-2' >GET IN TOUCH</h2>
                    <div className='grid'>
                        <span>+1-204-249-354</span>
                        <span>contact@tamato.com</span>
                    </div>
                </div>
            </div>
            <hr className='bg-white h-[2px] w-[90%]' />
            <p className='my-3 text-sm'>Copyright 2025 Tamato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer