import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

const PrivateComp = () => {
    const auth = localStorage.getItem("user2")
  return auth ?<Outlet/>:<Navigate to ="/signup"/>
  
 
}

export default PrivateComp