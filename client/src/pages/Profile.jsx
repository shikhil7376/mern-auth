import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Profile() {
  const [image,setImage] = useState(undefined)
  const {currentUser} = useSelector((state)=>state.user)
  console.log(currentUser);
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const[dataForm,setDataForm] = useState({
  username:currentUser.username,
  email:currentUser.email
 })
 
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
    <form action="" className='flex flex-col gap-4'>

      <input  type="file" name='image' hidden accept='image/*'
     
      />

      <img alt="profile pic" id='upload' name='profile'
      className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
  
      />
      <input defaultValue={currentUser.username} type="text" id='username'    
      placeholder='UserName' className='bg-slate-100 rounded-lg p-3'
     
      />
      <input defaultValue={currentUser.email} type="email" id='email' 
      placeholder='email' className='bg-slate-100 rounded-lg p-3'
      
      />
   
  
      <button className='bg-slate-700 text-white p-3 rounded-lg 
      uppercase hover:opacity-95 disabled:opacity-80 '>Update</button>
    </form>
    <div className='flex justify-between mt-5'>
      <span  className='text-red-700 cursor-pointer'>Delete Account</span>
      <span  className='text-red-700 cursor-pointer'>Sign out</span>
    </div>
  </div>
  )
}
