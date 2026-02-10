import React, { useContext } from 'react'
import { Storecontext } from '../context/Storecontext'
import CartData from '../components/CartData';
import { useNavigate } from 'react-router-dom';
import { assets2 } from '../assets/frontend_assets/assets';

const Cart = () => {
    const { cartItems, food_list, removeItems, url } = useContext(Storecontext);
    const navigate = useNavigate();
    let total = 0;
    // console.log(cartItems)
    if (Object.keys(cartItems).length > 0) {
        // console.log(food_list[0].price)

        for (let itm in cartItems) {
            const item = food_list.find(obj => obj._id === itm);
            // console.log(typeof (item.price), typeof (cartItems[itm]));
            total += item.price * cartItems[itm];
        }
    }
    // console.log(total)

    return (
        <div>
            <div className='max-w-5xl mx-auto'>
                <div className=' mt-15 grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]  px-3 text-gray-500'>
                    <p className=''>Items</p>
                    <p className=''>Title</p>
                    <p className=''>Price</p>
                    <p className=''>Quality</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr className='h-[0.3px] border-0 bg-gray-500' />
                {food_list.map((item, indx) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={indx}>
                                <div className='grid grid-cols-[0.8fr_1.4fr_1fr_1fr_1fr_0.5fr] sm:grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] px-1 sm:px-3 mt-5 gap-2'>
                                    <img src={url + "/images/" + item.image} alt="" className='h-12 w-fit ' />
                                    <div className='w[80%] flex-wrap flex'>{item.name}</div>
                                    <div>${item.price}</div>
                                    <div>{cartItems[item._id]}</div>
                                    <div>${item.price * cartItems[item._id]}</div>
                                    <img src={assets2.remove_icon_red} alt="" className='cursor-pointer' onClick={() => removeItems(item._id)} />
                                </div>
                                <hr className='mt-2' />
                            </div>
                        )
                    }
                })}
                <CartData total={total} />
            </div>
        </div>
    )
}

export default Cart;