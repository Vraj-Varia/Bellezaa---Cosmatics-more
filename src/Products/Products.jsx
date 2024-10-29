import React from 'react'
import './Products.css'
import Cards from './Cards'
import serum from '../assets/faceSerum.png'
import oil from '../assets/faceOil.png'
import tonor from '../assets/faceToner.png'
import moisturizer from '../assets/moisturizer.png'
import ExfoliatingGrain from '../assets/ExfoliatingGrain.png'

const Products = () => {
  return (
    <div className='Products'>
        <div className="CardContainer">
            <Cards title="Face Serum" img={serum}/>
            <Cards title="Face Oil" img={oil}/>
            <Cards title="Face Toner" img={tonor}/>
            <Cards title="Moisturizer" img={moisturizer}/>
            <Cards title="Exfoliating" img={ExfoliatingGrain}/>
        </div>
    </div>
  )
}

export default Products