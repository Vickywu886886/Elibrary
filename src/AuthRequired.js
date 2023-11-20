import React from "react"
import { Navigate } from "react-router-dom"
import { Outlet } from 'react-router-dom';
 

export const isLoggedIn = false

export default function AuthRequired() {

 
  if (!isLoggedIn) {
   
      return <Navigate to="/account?message=You must log in to see the page"/>
  }
  return <Outlet />
}