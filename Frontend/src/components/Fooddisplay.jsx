import React, { useContext, useEffect, useState } from 'react'
import { Storecontext } from '../context/Storecontext'
import FoodItem from './FoodItem';

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);

  return (
    <div className='max-w-5xl mx-auto mt-8'>
      <h2 className='text-3xl font-bold mb-10 text-center'>Top dishes near you</h2>
      <div className='flex flex-wrap gap-5  sm:gap-10 h-auto justify-center'>
        {food_list.map((item, idx) => {
          if (category === "all" || category === item.category) {
            return <FoodItem key={idx} id={item._id} name={item.name} description={item.description
            } price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default Fooddisplay