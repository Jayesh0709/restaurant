import React, { useState } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPopup from './components/LoginPopup'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'
import Footer from './components/Footer'
import Myorder from './pages/Myorder'
const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <></>}
      <Nav setshowLogin={setshowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<Myorder />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App