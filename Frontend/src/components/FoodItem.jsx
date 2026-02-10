import React, { useContext, useEffect, useRef, useState } from 'react'
import { assets2 } from '../assets/frontend_assets/assets'
import { Storecontext } from '../context/Storecontext';
import gsap from 'gsap';
const FoodItem = ({ id, name, description, price, image }) => {

    const [itmCount, setitmCount] = useState(0);
    const { cartItems, addItems, removeItems,url } = useContext(Storecontext);
    

  
    return (
        <div  className='w-44 md:w-54 rounded-xl shadow-xl cursor-pointer hover:scale-[1.04] transition-all '>
            <div className='relative'>
                <img src={url+"/images/"+image} alt="" className='h-44 rounded-t-xl ' />
                {!cartItems[id] ?
                    <img src={assets2.add_icon_white}
                        onClick={() => addItems(id)}
                        className='absolute bottom-3 right-4 w-10' />
                    : <div className='absolute flex  bg-white  rounded-full p-1 bottom-3 right-3 gap-2 items-center'>
                        <img src={assets2.remove_icon_red} alt="" onClick={() => removeItems(id)} className='w-7' />
                        <div>{cartItems[id]}</div>
                        <img src={assets2.add_icon_green} alt="" onClick={() => addItems(id)} className='w-7' />
                    </div>
                }
            </div>
            <div className='mt-5 px-2'>
                <div className='flex gap-4 justify-between'>
                    <p className='text-sm'>{name}</p>
                    <img src={assets2.rating_starts} alt="" className='h-4' />
                </div>
                <p className='text-xs my-3 text-gray-600'>{description}</p>
                <p className='mb-4 pl-2 text-xl font-semibold text-red-400'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem