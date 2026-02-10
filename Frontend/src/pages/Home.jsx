import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import Fooddisplay from '../components/Fooddisplay';
import Footer from '../components/Footer';

const Home = () => {
    
    const [category, setcategory] = useState("all");

  return (

    <div>
        <Header/>
        <ExploreMenu category={category} setcategory={setcategory}/>
        <Fooddisplay category={category}/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home