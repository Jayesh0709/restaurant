import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { assets1 } from '../assets/assets';
const Order = ({url}) => {
  const token = localStorage.getItem("token");
  const [data, setdata] = useState([]);
  const fetch = async () => {
    const response = await axios.get(url, { headers: { token } });
    // console.log(response.data.orders);
    setdata(response.data.orders);
  }



  const status = async (event, orderId) => {
    console.log(event.target.value)
    const response = await axios.post(url, {
      orderId: orderId,
      status: event.target.value
    },
      { headers: { token } });
    if(response.data.success){
      await fetch();
    }
  }


  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className='md:w-[80%] w-full'>
      <h1 className='text-2xl font-semibold m-3'>Order Page</h1>
      <div className='grid gap-5 px-4 py-5 w-full'>
        {data.map((order, idx) => {
          return (
            <div className='px-4 py-3 border grid grid-cols-[0.6fr_4fr_0.8fr]  md:grid-cols-[0.7fr_3.5fr_1fr_1fr_2fr]  gap-6 justify-center items-center'>

              {/* img */}
              <img src={assets1.parcel_icon} alt="" className='h-14' />

              {/* items */}
              <div className='grid gap-3 '>
                <div className='flex  w-full flex-wrap'>
                  {order.items.map((item, i) => {
                    return (
                      <div className='text-xs'>
                        {(order.items.length - 1 === i) ? (
                          <p className='w-fit'>{item.name} X {item.quality}</p>
                        )
                          : (
                            <p className='w-fit'>{item.name} X {item.quality} ,</p>
                          )}
                      </div>
                    )
                  })}
                </div>
                <div>

                  {/* address */}
                  <div className='font-semibold text-lg'>{order.address.name}</div>
                  <div className='text-sm'>{order.address.city} , {order.address.state} , {order.address.country} , {order.address.zip}</div>
                  <div>{order.address.phone}</div>
                </div>

              </div>
              <span>Items: {order.items.length}</span>
              <span> {order.amount}</span>
              <select name="" id="" className='h-10 w-37 px-2 border outline-0 cursor-pointer bg-red-200 rounded' onChange={(e) => status(e, order._id)} value={order.status}>

                <option className='bg-gray-700 text-white hover:text-black hover:bg-white' value="processing">processing</option>
                <option className='bg-gray-700 text-white' value="out of delivery">out for delivery</option>
                <option className='bg-gray-700 text-white' value="delivered">delivered</option>
              </select>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Order