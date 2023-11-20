import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Wishlist.css"
import {  AiOutlineHeart } from 'react-icons/ai';


export default function Wishlist(){
    return(
        <div>
        <Navbar/>
        <div className="wishlist-page">
        <h1>You need to log in to see your wishlist</h1>
        </div>
        </div>
    )
}