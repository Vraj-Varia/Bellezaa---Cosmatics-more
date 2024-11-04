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
              <li><a href='/home'>FREE TRIAL</a></li>
              <li><a href='/support'>SUPPORT</a></li>
              <li><a href='/service'>ONLINE DOCUMENTATION</a></li>
              <li><a href='/products'>PRODUCTS</a></li>
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