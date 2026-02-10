import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Storecontext } from '../context/Storecontext';
import { useEffect } from 'react';
import axios from 'axios';

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    useNavigate
    const navigate = useNavigate();
    const { url } = useContext(Storecontext);
    const verfiyPayment = async () => {
        const response = await axios.post(url + "/api/order/verify", { success, orderId })
        if (response.data.success) {
            navigate('/myorders');
        }
        else {
            navigate("/");
        }
    }
    useEffect(() => {
        verfiyPayment();
    }, [])

    return (
        <div className='h-54 w-full grid place-items-center'>
            <div className='h-[95px] rounded-full w-24  animate-spin  p-2 border-red-400 border-t-4'>
                <div className=' '></div>
            </div>
        </div>
    )
}

export default Verify