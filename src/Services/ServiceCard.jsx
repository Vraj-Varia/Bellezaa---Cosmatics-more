import React from 'react'
import './ServiceCard.css'

const ServiceCard = (props) => {
  return (
    <div>
        <div className="card">
            <img src={props.image} alt="" />
            <div className="separator"></div>
            <div className="text">
                <h1>{props.title}</h1>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard