import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  link 
} from 'react-router-dom'



const Navbar = () => {
  return (
    <Router>
    <div className='Navbar'>
        <div className='Logo'>
            <img src={logo} alt="" />
        </div>
        <div className="navElements">
            <Switch>
              <li><link to='/trial'>FREE TRIAL</link></li>
              <li><link to='/support'>SUPPORT</link></li>
              <li><link to='/documentaton'>ONLINE DOCUMENTATION</link></li>
              <li><link to='/products'>PRODUCTS</link></li>
            </Switch>
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
    </Router>
  )
}

export default Navbar