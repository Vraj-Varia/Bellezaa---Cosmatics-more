import React from 'react'
import './Add.css'
import LiquidLiner from '../assets/LiquidLiner.png'

const Add = () => {
  return (
    <>
      <div className='Add'>
        <div className="imgSection">
          <img src={LiquidLiner} alt="" />
        </div>
        <div className="textSection">
          <h3>NEW/</h3>
          <h1>LIQUID LINER</h1>
          <h2>Shop the laser-sharp liquid eyeliner that delivers long-lasting, intense color payoff for all your holiday makeup moments.</h2>
          <button>SHOP</button>
        </div>
      </div>
    </>
  )
}

export default Add