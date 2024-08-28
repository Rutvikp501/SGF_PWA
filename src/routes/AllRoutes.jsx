import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import ForgetPass from '../pages/ForgetPass/ForgetPass'
import OTPVerification from '../pages/OTPVerification/OTPVerification'



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/forgetpass' element={<ForgetPass />} />
        <Route path='/otpverification' element={<OTPVerification />} />

    </Routes>
  )
}

export default AllRoutes