import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import About from './pages/About'

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/sign-in' element={<Signin/>}/>
    <Route path='/profile' element={<Profile/>} />
    <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}
