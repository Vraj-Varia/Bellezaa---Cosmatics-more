import React from 'react'
import './Add.css'
import img from '../assets/LiquidLiner.png'

const Add = (props) => {
  return (
    <div className='Add'>
        <div className="imgSection">
            <img src={img} alt="" />
        </div>
        <div className="textSection">
            <h1>LIQUID LINER</h1>
            <P>Shop the laser-sharp liquid eyeliner that delivers long-lasting, intense color payoff for all your holiday makeup moments.</P>
            <button>SHOP</button>
        </div>
    </div>
  )
}

export default Add