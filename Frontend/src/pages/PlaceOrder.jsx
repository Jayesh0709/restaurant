import React, { useContext, useEffect } from 'react'
import CartData from '../components/CartData'
import { food_list } from '../assets/frontend_assets/assets';
import { Storecontext } from '../context/Storecontext';
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {

    let total = 0;
    const { food_list, token, url, cartItems } = useContext(Storecontext);
    if (Object.keys(cartItems).length > 0) {
        for (let itm in cartItems) {
            const item = food_list.find(obj => obj._id === itm);
            // console.log(typeof (item.price), typeof (cartItems[itm]));
            total += item.price * cartItems[itm];
        }
    }

    const [data, setdata] = useState({
        name: "",
        last: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: "",
    })
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setdata(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (e) => {
        e.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quality"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: total + 2,
        }
        console.log(orderData)
        let response = await axios.post(url + "/api/order/place", { orderData }, { headers: { token } });
        console.log(response.data);
        if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
        }
        else {
            alert("Error");
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/cart');
        }
        else if (total === 0) {
            navigate('/cart');
            toast.error("Cart Empty");
        }
    }, [token])

    return (
        <div className='w-100% max-w-5xl flex md:gap-10 gap-0 flex-col md:flex-row items-center md:items-normal mx-auto mt-20'>
            <form onSubmit={placeOrder} className='flex w-full' action="">
                <div className='w-1/2 px-2 md:px-0 '>
                    <h2 className='font-bold text-3xl'>Delivery Information</h2>
                    <div className=' flex flex-col gap-4 mt-7 mb-4'>
                        <div className='flex gap-2'>
                            <input name='name' value={data.name} onChange={onChangeHandler}
                                // {...register("name",{reqiured:true})}
                                type="text" placeholder='First name' className='border mt-1 ml-2 w-[46%] rounded py-2 outline-none px-3 placeholder:text-gray-500 text-sm border-gray-400 ' />
                            <input name='last' value={data.last} onChange={onChangeHandler} type="text" placeholder='Last name' className='border mt-1 ml-2 rounded py-2 outline-none px-2 border-gray-400 placeholder:text-gray-500 text-sm w-[48%]' />
                        </div>
                        <input name='email' value={data.email} onChange={onChangeHandler} type="text" placeholder='Email Address' className='border mt-1 mx-2 rounded py-2 outline-none px-2 border-gray-400 placeholder:text-gray-500 text-sm' />
                        <input name='street' value={data.street} onChange={onChangeHandler} type="text" placeholder='Street' className='border mt-1 mx-2 rounded py-2 outline-none px-2 border-gray-400 placeholder:text-gray-500 text-sm' />
                        <div className='flex gap-2'>
                            <input name='city' value={data.city} onChange={onChangeHandler} type="text" placeholder='City' className='border mt-1 ml-2 w-[46%] rounded py-2 outline-none px-3 placeholder:text-gray-500 text-sm border-gray-400 ' />
                            <input name='state' value={data.state} onChange={onChangeHandler} type="text" placeholder='State' className='border mt-1 ml-2 rounded py-2 outline-none px-2 border-gray-400 placeholder:text-gray-500 text-sm w-[48%]' />
                        </div>
                        <div className='flex gap-2'>
                            <input name='zip' value={data.zip} onChange={onChangeHandler} type="text" placeholder='Zip Code' className='border mt-1 ml-2 w-[46%] rounded py-2 outline-none px-3 placeholder:text-gray-500 text-sm border-gray-400 ' />
                            <input name='country' value={data.country} onChange={onChangeHandler} type="text" placeholder='Country' className='border mt-1 ml-2 rounded py-2 outline-none px-2 border-gray-400 placeholder:text-gray-500 text-sm w-[48%]' />
                        </div>
                        <input name='phone' value={data.phone} onChange={onChangeHandler} type="text" placeholder='Phone' className='border mt-1 mx-2 rounded py-2 outline-none px-2 border-gray-400 placeholder:text-gray-500 text-sm' />
                    </div>

                </div>
                {/* <CartData total={total} /> */}
                <div className='mt-20  sm:w-1/2  px-5 pt-5 flex flex-col  gap-2'>
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
                        <div>${total + 2}</div>
                    </div>
                    <button type='submit' className='text-sm w-1/2 py-2 px-1 rounded bg-[#ff6347] text-white font-semibold my-4 cursor-pointer active:scale-95'>PROCEED TO CHECKOUT</button>
                </div>
            </form>
        </div>
    )
}

export default PlaceOrder