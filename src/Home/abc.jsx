import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from './Home'
import Products from '../Products/Products'
import Add from '../Add/Add'
import Footer from '../Footer/Footer'
import './abc.css'
import Guidance from '../Guidance/Guidance'
// import discount from '../assets/GET 20% OFF.png'
// import hl from '../assets/HolidayGiftGuide.png'

const ActualHome = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Products />
        <Add />
        {/* <Add category="HOLIDAY" title="HOLIDAY GIFT'S" msg="Shop the laser-sharp liquid eyeliner that delivers long-lasting, intense color payoff for all your holiday makeup moments."/> */}
        <Products />
        <Products />
        <div className="divider"></div>
        <Products />
        <Guidance />
        {/* <Add category="NEW" title="BUY PREMIUM NOW AND GET 20% OFF" msg="Shop the laser-sharp liquid eyeliner that delivers long-lasting, intense color payoff for all your holiday makeup moments." img={discount}/> */}
        <Add />
        <Products />
        <Footer />

        <div className='cartButton'>
          
        </div>
    </div>
  )
}

export default ActualHome