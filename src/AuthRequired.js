import React from "react"
import { Navigate } from "react-router-dom"
import { Outlet } from 'react-router-dom';

export default function AuthRequired() {
  const isLoggedIn = false

 
  if (!isLoggedIn) {
   
      return <Navigate to="/account?message=You must log in to see the wishlist page"/>
  }
  return <Outlet />
}