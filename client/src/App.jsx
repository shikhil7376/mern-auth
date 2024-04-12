import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
import AdminLogin from './adminpages/AdminLogin'
import AdminDashboard from './adminpages/AdminDashboard'
import CreateUser from './adminpages/CreateUser'
import EditUser from './adminpages/EditUser'
import PrivateRoute from './components/PrivateRoute'
export default function App() {
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/sign-in' element={<Signin/>}/>
    <Route element={<PrivateRoute/>}>
    <Route path='/profile' element={<Profile/>} />
    </Route>
    <Route path='/about' element={<About/>} />
    <Route path='/admin/sign-in' element={<AdminLogin/>}/>
    <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
    <Route path='/admin/create-user' element={<CreateUser/>}/>
    <Route path='/admin/:id/edit-user' element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}
