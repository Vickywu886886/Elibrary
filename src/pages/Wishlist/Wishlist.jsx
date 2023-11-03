import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Wishlist.css"
import {  AiOutlineHeart } from 'react-icons/ai';


export default function Wishlist(){
    return(
        <div>
        <Navbar/>
        <div className="wishlist-page">
        <h1>Wishlist<AiOutlineHeart/></h1>
        </div>
        </div>
    )
}