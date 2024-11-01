import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Logo'>
            <img src={logo} alt="" />
        </div>
        <div className="navElements">
            <li><a href='#'>FREE TRIAL</a></li>
            <li><a href='#'>SUPPORT</a></li>
            <li><a href='#'>ONLINE DOCUMENTATION</a></li>
            <li><a href='#'>PRODUCTS</a></li>
        </div>
        <div className="login">
          <button>LOGIN | SIGNIN</button>
        </div>
        <div className="burger">
            <li></li>
            <li></li>
            <li></li>
        </div>
    </div>
  )
}

export default Navbar