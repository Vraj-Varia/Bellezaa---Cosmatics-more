import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'
import customers from '../assets/customers.png'

const Services = () => {
  return (
    <>
      <div className='divider'></div>
      <div className='ServicesContainer'>
        <div className="left">
          <h1>Explore the latest cosmatic products at our online store! Shop the best makeup and skincare products online by Sonoman.</h1>
        </div>
        <div className="right">
          <ServiceCard image={customers} />
        </div>
      </div>
    </>
  )
}

export default Services