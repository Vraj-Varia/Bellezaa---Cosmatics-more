import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  return (
    <div to={'/Item'} className='Cards' >
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
    </div>
  )
}

export default Cards