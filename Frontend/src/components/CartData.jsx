import React, { useContext } from 'react'
import { assets2 } from '../assets/frontend_assets/assets'
import { Storecontext } from '../context/Storecontext'
import { useNavigate } from 'react-router-dom'
const CartData = ({total}) => {
const navigate = useNavigate();
    return (
        <>
            <div className='mt-20 h-auto sm:w-1/2 w-full px-5 pt-5 flex flex-col  gap-2'>
                <h2 className='text-xl font-bold '>Cart Totals</h2>
                <div className='flex justify-between mt-5 text-gray-600 font-semibold'>
                    <p className=''>Sub-Total</p>
                    <p>${total}</p>
                </div>
                <hr className='h-[0.3px] border-0 bg-gray-500' />
                <div className='flex justify-between text-gray-600 font-semibold'>
                    <p className=' '>Delivery Fee</p>
                    <p>$2</p>
                </div>
                <hr className='h-[0.3px] border-0 bg-gray-500' />
                <div className='text-xl font-bold flex justify-between'>
                    <div className=''>Total</div>
                    <div>${total === 0 ? 0 : total + 2}</div>
                </div>
                <button className='text-sm w-1/2 py-2 px-1 rounded bg-[#ff6347] text-white font-semibold my-4 cursor-pointer active:scale-95' onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
        </>
    )
}

export default CartData