import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'
import lips from '../assets/lipsStick.png'
import eyes from '../assets/darkeyes.png'
import bride from '../assets/wedding.png'
import makeup from '../assets/faceMakeup.png'

const Services = () => {
  return (
    <div className='ServicesContainer'>
        <div className="top">
            <ServiceCard image={lips} title="LipsSticks"/>
            <ServiceCard image={eyes} title="Kajal"/>
        </div>
        <div className="bottom">
            <ServiceCard image={bride} title="Bride"/>
            <ServiceCard image={makeup} title="MakeUp"/>
        </div>
    </div>
  )
}

export default Services