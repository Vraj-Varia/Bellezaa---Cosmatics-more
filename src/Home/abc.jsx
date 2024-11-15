import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from './Home'
import Products from '../Products/Products'
import Services from '../Services/Services'
import Support from '../Support/Support'
import Add from '../Add/Add'
import Footer from '../Footer/Footer'

const ActualHome = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Products />
        <Services />
        <Support />
        <Add />
        <Footer />
    </div>
  )
}

export default ActualHome