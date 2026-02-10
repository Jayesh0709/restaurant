import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
const List = ({url}) => {
  
  const [list, setlist] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setlist(response.data.data);

    }
    else {
      toast.error("erro");
    }
  }

  const removeFood = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: id });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error("error");
    }
  }

  useEffect(() => {
    fetchList();
  }, [])
  return (
    <div className='px-10 pt-5 w-[80%] mx-auto'>
      <h2 className='text-2xl font-bold mb-7'>All foods List</h2>
      <div className='w-full border pt-3'>
        <div className=' grid grid-cols-[3fr_3fr_3fr_3fr_1fr] px-3'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, idx) => {
          return (
            <div key={idx}>
              <hr />
              <div className='grid grid-cols-[3fr_3fr_3fr_3fr_1fr] px-3 py-2 items-center'>
                <img src={`${url}/images/` + item.image} alt="" className='h-15 w-15' />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={() => removeFood(item._id)} className='cursor-pointer'>X</p>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List