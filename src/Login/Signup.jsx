import React, { useState } from 'react'
import registerImg from '../assets/GCU.png'
import './Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

  const [name, setName] = useState()
  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get('http://localhost:3001/register', {name, contact, email, password})
    .then(result => console.log("result" + result))
    .catch(err=>console.log(err))
  }


  return (
    <div className='Register'>
      <form className="left" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text" name="name" id="name" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" name="contact" id="contact" placeholder='Phone' onChange={(e) => setContact(e.target.value)} />
        <input type="email" name="email" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" id="password" placeholder='Password'onChange={(e) => setPassword(e.target.value)} />
        <p>Already have an account? <Link to="/login">Login</Link></p>
        <button type='submit'>Register</button>
      </form>
      <div className="right">
        <img src={registerImg} alt="" />
      </div>
    </div>
  )
}

export default Signup