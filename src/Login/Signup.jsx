import React from 'react'
import registerImg from '../assets/signin.png'
import './Signup.css'

const Signup = () => {
  return (
    <div className='Register'>
      <div className="left">
        <h1>Register</h1>
        <input type="text" name="name" id="name" placeholder='Name' />
        <input type="text" name="contact" id="contact" placeholder='Phone' />
        <input type="email" name="email" id="email" placeholder='Email' />
        <input type="text" name="add" id="add" placeholder='Address' />
        <p>Already have an account? <a href='#'>Login</a></p>
        <button>Register</button>
      </div>
      <div className="right">
        <img src={registerImg} alt="" />
      </div>
    </div>
  )
}

export default Signup