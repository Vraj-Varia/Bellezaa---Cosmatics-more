import React from 'react'
import './Add.css'
import LiquidLiner from '../assets/LiquidLiner.png'
import LiquidLiner2 from '../assets/HolidayGiftGuide.png'
import LiquidLiner3 from '../assets/gift.png'
import LiquidLiner4 from '../assets/model2.png'

const Add = () => {
  return (
    <>
    <div className='Add'>
      <div className="textSection">
        <h3>GIFT/</h3>
        <h1>HOLIDAY GIFT'S</h1>
        <h2>Shop the laser-sharp liquid eyeliner that delivers long-lasting, intense color payoff for all your holiday makeup moments.</h2>
        <button>SHOP</button>
      </div>
      <div className="imgSection">
        <img src={LiquidLiner2} alt="" />
      </div>
    </div>
      <div className='Add'>
        <div className="imgSection">
          <img src={LiquidLiner3} alt="" />
        </div>
        <div className="textSection">
          <h3>NEW/</h3>
          <h1>SUGAR PRODUCTS</h1>
          <h2>Shop the laser-sharp liquid eyeliner that delivers long-lasting, intense color payoff for all your holiday makeup moments.</h2>
          <button>SHOP</button>
        </div>
      </div>
    </>
  )
}

export default Add