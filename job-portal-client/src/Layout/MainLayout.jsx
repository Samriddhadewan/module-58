import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>     
    </div>
    <Footer></Footer>
    </div>
  )
}

export default MainLayout