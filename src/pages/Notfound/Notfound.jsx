import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import "./Notfound.css"


export default function Notfound(){
    return(
        <div>
        <Navbar/>
        <div className="content">
       
        <h1 className="overlay-text">404 Page Not Found</h1>
        </div>
        </div>
     
    )
}