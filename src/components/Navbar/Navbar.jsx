import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {  AiOutlineHeart } from 'react-icons/ai';
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineQuestionCircle} from 'react-icons/ai';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Elibrary</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "/book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><AiOutlineHome style={{position:"relative",top:"2px", marginRight:"5px"}}/>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><AiOutlineQuestionCircle style={{position:"relative",top:"2px", marginRight:"5px"}}/>about</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/account" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><VscAccount  style={{position:"relative",top:"2px", marginRight:"5px"}}/>account</Link>
            </li>
            <li className='nav-item'  style={{display:"flex", alignItems:"center"}}>
              <Link to = "/wishlist" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'><AiOutlineHeart style={{position:"relative",top:"2px", marginRight:"5px"}} />wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar