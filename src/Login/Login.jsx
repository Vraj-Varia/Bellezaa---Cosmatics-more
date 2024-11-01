import React from 'react'
import './Login.css'
import loginImg from '../assets/login.png'

const Login = () => {
  return (
    <div className='Login'>
        <div className="left">
            <img src={loginImg} alt="" />
        </div>
        <div className="right">
            <h1>Login</h1>
            <input type="email" name="email" id="LoginEmail" />
            <input type="password" name="psw" id="psw" />
            <p>Don't have an account? Signup here</p>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Login