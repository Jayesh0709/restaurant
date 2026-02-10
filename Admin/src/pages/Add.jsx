import React, { useState } from 'react'
import { assets1 } from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = ({url}) => {
    
    const [image, setimage] = useState(false)
    const [data, setdata] = useState({
        name: "",
        description: "",
        price: "",
        category: "salad"
    });
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata(data => ({ ...data, [name]: value }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("description", data.description);
        formdata.append("price", Number(data.price));
        formdata.append("category", data.category);
        formdata.append("image", image);

        const response = await axios.post(`${url}/api/food/add`, formdata);
        if (response.data.success) {
            console.log("added");
            setdata({
                name: "",
                description: "",
                price: "",
                category: "salad"
            })
            setimage(false);
            toast.success(response.data.message);
        }
        else {
            console.log("not added ");
            toast.error("not added")
        }
    }

    return (
        <div className='w-[70vw] px-15 py-10'>
            <form action="" onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
                <div className=' w-fit'>
                    <p>Upload Image</p>
                    <label htmlFor="image" className=''>
                        <img src={image ? URL.createObjectURL(image) : assets1.upload_area} alt="" className='my-2 cursor-pointer w-32' />
                    </label>

                    <input type="file" id='image' hidden onChange={(e) => { setimage(e.target.files[0]) }} />
                </div>
                <div>
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='border-0 bg-gray-200 px-3 mt-2 outline-0 text-black placeholder:text-gray-500 py-[6px] rounded  w-3/7' />
                </div>
                <div>
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" required rows={4} placeholder='write content here' className='border-0 bg-gray-200 px-3 mt-2 outline-0 text-black placeholder:text-gray-500 py-[6px] rounded w-3/7'></textarea>
                </div>
                <div className='flex gap-13'>
                    <div>
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name="category" className='border-0 bg-gray-200 px-3 mt-2 outline-0 text-black placeholder:text-gray-500 py-[6px] rounded cursor-pointer w-35'>
                            <option value="salad">salad</option>
                            <option value="rolls">rolls</option>
                            <option value="desert">desert</option>
                            <option value="sandwich">sandwich</option>
                            <option value="cake">cake</option>
                            <option value="pasta">pasta</option>
                            <option value="noodles">noodles</option>
                            <option value="pure veg">pure veg</option>
                        </select>
                    </div>
                    <div>
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' className='border-0 bg-gray-200 px-3 mt-2 outline-0 text-black placeholder:text-gray-500 py-[6px] rounded w-35' />
                    </div>
                </div>
                <button type='submit' className='mt-5 rounded cursor-pointer  py-2 w-1/5 bg-black  text-white'>ADD</button>
            </form>
        </div>
    )
}

export default Add