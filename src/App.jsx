import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Products from './Products/Products'
import Services from './Services/Services'
import Support from './Support/Support'
import Add from './Add/Add'
import Footer from './Footer/Footer'
import Login from './Login/Login'
import Signup from './Login/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home />
    <Products />
    <Services />
    <Support />
    <Add />
    <Footer />
    <Login />
    <Signup />
    </>
  )
}

export default App
