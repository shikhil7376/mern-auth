import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
 const [users, setUsers] = useState([]);

 useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
 }, []);

 console.log(users);

const handleDelete = async(userId)=>{
    try{
       await axios.delete(`/api/admin/users/${userId}/delete`)
       setUsers(users.filter(user=>user._id!==userId))
    }catch(error){
        console.error('failed to delete:',error)
    }
}


 return (
    <div className="container mx-auto px-4">
    <Link to="/admin/create-user">
 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
    Create User
 </button>
</Link>
      <table className="w-full text-left table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
              <Link to={`/admin/${user._id}/edit-user`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                </Link>
                <button onClick={()=>handleDelete(user._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}
