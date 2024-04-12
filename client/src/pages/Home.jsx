import React from 'react'
import {useSelector} from 'react-redux'

export default function Home() {
const {loading,currentUser,error} = useSelector((state)=>state.user)
  return (
    <div classNames="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold text-center">WELCOME: {currentUser.username}</h1>
  </div>
  )
}
