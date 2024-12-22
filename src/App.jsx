import './App.css'
import Support from './Support/Support'
import Login from './Login/Login'
import Signup from './Login/Signup'
import ActualHome from './Home/abc'
import Board from './DASHBOARD/board'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Items from './Products/Items/Items'
import Cart from './Cart/Cart'


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
        <Route path='/Item' element={<Items />}></Route>
        <Route path='/Support' element={<Support />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/dashboard' element={<Board />}></Route>
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
