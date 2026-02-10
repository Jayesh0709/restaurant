import React from 'react'
import { useContext } from 'react'
import { Storecontext } from '../context/Storecontext'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { assets1 } from '../assets/admin_assets/assets';

const Myorder = () => {
    const { url, token } = useContext(Storecontext);
    const [data, setdata] = useState([]);

    const fetchData = async () => {
        const response = await axios.post(url + "/api/order/userorder", {}, { headers: { token } })
        console.log(response.data);
        setdata(response.data.data);
    }
    useEffect(() => {
        if (token) {
            console.log(token)
            fetchData();
        }

    }, [token])
    return (
        <div className='grid items-center max-w-5xl w-fit mx-auto mt-8 '>
            <h2 className='font-bold text-3xl'>My Orders</h2>
            <div className='mt-10 grid gap-8 '>
                {data.map((order, index) => {
                    return (
                        <div key={index} className='grid grid-cols-[1fr_2fr_1fr] row-gap-[5px] md:grid-cols-[0.5fr_3fr_1fr_0.7fr_1fr] gap-3 justify-center border rounded-sm px-3 md:py-5 py-2 place-items-center'>
                            <img src={assets1.parcel_icon} alt="" className='h-10 ' />
                            <p className=' px-3 md:text-sm text-xs'>
                                {order.items.map((item, idx) => {
                                    if (idx === order.items.length - 1) {
                                        return item.name + " X " + item.quality
                                    }
                                    else {
                                        return item.name + " X " + item.quality + " , "
                                    }
                                })}
                            </p>
                            <p className='text-sm'>${order.amount}.00</p>
                            <p className='text-sm'>Items: {order.items.length}</p>
                            <p className='text-sm'><b>{order.status}</b></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Myorder