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
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Route>
      <Switch>
                <Route path='/home'> 
                  {/* <link to='/trial'>FREE TRIAL</link> */}
                  <Home />
                </Route>
                <Route path='support'>
                  {/* <link to='/support'>SUPPORT</link> */}
                  <Support />
                </Route>
                <Route path='service'>
                  {/* <link to='/documentation'>ONLINE DOCUMENTATION</link> */}
                  <Services />
                </Route>
                <Route path='products'>
                  {/* <link to='/products'>PRODUCTS</link> */}
                  <Products />
                </Route>
        </Switch>
        {/* <Navbar />
        <Home />
        <Products />
        <Services />
        <Support />
        <Add />
        <Footer />
        <Login />
        <Signup /> */}
      </Route>
  )
}

export default App
