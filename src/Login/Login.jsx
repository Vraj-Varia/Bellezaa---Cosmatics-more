import React from 'react'
import './Login.css'
import loginImg from '../assets/login.png'


let isLoggedin = false;

const handleLogin = () => {
  let isLoggedin = true;
}

const Login = () => {
  return (
    <div className='Login'>
      <div className="left">
        <img src={loginImg} alt="" />
      </div>
      <div className="right">
        <h1>Login</h1>
        <input type="email" name="email" id="LoginEmail" placeholder='Email' />
        <input type="password" name="psw" id="psw" placeholder='Password' />
        <p>Don't have an account? <a href='#'>Signup</a></p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login