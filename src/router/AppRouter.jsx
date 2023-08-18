import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Detail from '../pages/detail/Detail'
import PrivateRouter from './PrivateRouter'
import Footer from '../components/footer/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route element = {<PrivateRouter/>}>
          <Route path='/about' element = {<About/>}/>
          <Route path='/detail/:id' element = {<Detail/>}/>
        </Route>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter