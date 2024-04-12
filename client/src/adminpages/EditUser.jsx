import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'; 
import {useNavigate} from 'react-router-dom'

export default function EditUser() {
    const [username,setUsername] =useState('')
    const [email,setEmail] = useState('')
    const { id } = useParams(); 
    const navigate = useNavigate()
     console.log(id);
    useEffect(()=>{
        const fetchUser = async ()=>{
            try {
                const response = await axios.get(`/api/admin/edituser/${id}`)
                setUsername(response.data.username)
                setEmail(response.data.email)
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        }
        fetchUser();
    },[id])
   
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            console.log("her");
            await axios.put(`/api/admin/edituser/${id}`, { username, email });
            alert('User updated successfully');
            navigate('/admin/dashboard')
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    }

    
  return (
    <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold mb-4">Edit User</h1>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Update User
            </button>
        </div>
    </form>
</div>
  )
}
