
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Add from './pages/Add'
import Order from './pages/Order'
import List from './pages/List'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const url = 'https://restaurant-mu-three.vercel.app';
  return (
    <>
      <ToastContainer />
      <Navbar />
      <hr className='md:w-[90%]  mx-auto' />
      <div className='flex flex-col md:flex-row '>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/order' element={<Order url={url} />} />
          <Route path='/list' element={<List url={url} />} />
        </Routes>
      </div>

    </>
  )
}

export default App
