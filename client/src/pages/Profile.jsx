import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useRef} from 'react'
import { useDispatch } from 'react-redux'
import { updateUserStart,updateUserSuccess,updateUserFailure } from '../redux/user/userSlice'

export default function Profile() {
  const fileRef = useRef(null)
  const {currentUser,error,loading} = useSelector((state)=>state.user)
  const [formData,setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch()


   const handleChange = (e)=>{
     setFormData({...formData,[e.target.id]:e.target.value})
   }
  console.log("formData",JSON.stringify(formData));
 const handleSubmit = async(e)=>{
  e.preventDefault()
  try {
    dispatch(updateUserStart())
    const  res = await fetch(`/api/user/update/${currentUser._id}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(formData)})
    const data = await res.json()
    if(data.success === false){
      dispatch(updateUserFailure(data))
      return
    }
    dispatch(updateUserSuccess(data))
    setUpdateSuccess(true);
  } catch (error) {
     dispatch(updateUserFailure(error))
  }
 }

  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

     <input type='file' ref={fileRef} hidden accept='image/*'/>
      <img src={currentUser.profilePicture}  alt="profile pic" id='upload' name='profile'
      className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
       onClick={()=>fileRef.current.click()}
      />
      <input defaultValue={currentUser.username} type="text" id='username'    
      placeholder='UserName' className='bg-slate-100 rounded-lg p-3'
      onChange={handleChange}
      />
      <input defaultValue={currentUser.email} type="email" id='email'
      placeholder='email' className='bg-slate-100 rounded-lg p-3'
      onChange={handleChange}
      />
   
  
      <button className='bg-slate-700 text-white p-3 rounded-lg 
      uppercase hover:opacity-95 disabled:opacity-80 '>{loading?'Loading...':'Update'}</button>
    </form>
    <div className='flex justify-between mt-5'>
      <span  className='text-red-700 cursor-pointer'>Delete Account</span>
      <span  className='text-red-700 cursor-pointer'>Sign out</span>
    </div>
    <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
      <p className='text-green-700 mt-5'>
        {updateSuccess && 'User is updated successfully!'}
      </p>
  </div>
  )
}
