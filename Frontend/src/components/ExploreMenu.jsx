import React from 'react';
import { menu_list } from '../assets/frontend_assets/assets';
const ExploreMenu = ({ category, setcategory }) => {
    return (
        <div className='max-w-5xl mx-auto 'id='menu'>
            <h1 className='text-3xl font-bold mt-10 w-full  text-center '>Explore Menu</h1>
            <p className=' text-center px-3 mb-10 mt-4 mx-auto md:w-2/3 w-full'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className='flex gap-10 overflow-x-scroll mb-10 h-auto sc  scrollbar-hide items-center  mx-2 text-center'>
                {menu_list.map((item, idx) => {
                    return (
                        <div onClick={() => setcategory(prev => prev === item.menu_name ? "all" : item.menu_name)} key={idx} className='flex-shrink-0 cursor-pointer'>
                            <img src={item.menu_image} alt="" className={`rounded-full w-[7.5vw] ${category === item.menu_name ? "p-1 border-2 border-red-500" : ""}`} />
                            <p className='mt-3 text-md text-gray-600'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='w-[80vw] bg-gray-300 border-none h-[1px] mb-10 mx-auto' />
        </div>
    )
}

export default ExploreMenu