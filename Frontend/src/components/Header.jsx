import React, { useEffect, useRef } from 'react'
import { assets1 } from '../assets/admin_assets/assets'
import { assets2 } from '../assets/frontend_assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
const Header = () => {
    const reloadComp = useRef();
    useEffect(() => {
        gsap.from(reloadComp.current, {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "power3.out"
        })
    })
    return (
        <div className='h-[23vh] w-[90vw]  md:h-[34vw]  md:w-[80vw] mx-auto bg-cover bg-center bg-[url("/header_img.png")] relative mt-5'>
            <div ref={reloadComp} className='absolute flex flex-col  md:gap-3 max-w-[50%] md:bottom-[12%] md:left-10 bottom-[9%] left-7 gap-1 '>
                <h2 className='lg:text-6xl sm:text-2xl font-bold text-white md:leading-16 leading-normal '>Order your favourite food here</h2>
                <p className='text-white sm:text-sm text-[7px] hidden sm:block'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button className='md:px-5 md:py-3 px-2 py-1 bg-white text-black w-fit rounded-full mt-3 cursor-pointer md:text-xs text-[6px]'>View more</button>
            </div>
        </div>
    )
}

export default Header