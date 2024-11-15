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
import ActualHome from './Home/abc'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    {/* <Navbar /> */}
    {/* <Home /> */}
    {/* <Products /> */}
    {/* <Services /> */}
    {/* <Support /> */}
    {/* <Add /> */}
    {/* <Footer /> */}


    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<ActualHome />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
