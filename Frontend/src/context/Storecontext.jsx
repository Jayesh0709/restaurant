import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import axios from 'axios';

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {


    const [cartItems, setcartItems] = useState({});
    const [token, settoken] = useState("");
    const url =  "https://restaurant-mu-three.vercel.app"
    const addItems = async (itemId) => {
        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeItems = async (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }


    const [food_list, setfood_list] = useState([]);

    const fetchfoodList = async () => {
        // console.log(url+"/api/food/list");
        const response = await axios.get(url + '/api/food/list');
        console.log(response.data);
        setfood_list(response.data.data);
    }

    const onLoad = async (token) => {
        const response = await axios.post(url + '/api/cart/get', {}, { headers: { token } });
        setcartItems(response.data.cartData);
    }


    useEffect(() => {

        async function onLoaddata() {
            await fetchfoodList();
            if (localStorage.getItem("token")) {
                settoken(localStorage.getItem("token"));
                await onLoad(localStorage.getItem("token"));
            }
        }
        onLoaddata();
        console.log(food_list);
    }, [])


    const contextValue = {
        food_list,
        cartItems,
        addItems,
        removeItems,
        token,
        url,
        settoken
    }
    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StorecontextProvider;