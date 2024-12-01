import React, { useEffect, useState } from 'react'
import './Products.css'
import Cards from './Cards'
import serum from '../assets/faceSerum.png'
import oil from '../assets/faceOil.png'
import tonor from '../assets/faceToner.png'
import moisturizer from '../assets/moisturizer.png'
import ExfoliatingGrain from '../assets/ExfoliatingGrain.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/getProducts')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className='Products'>
        <div className="CardContainer">

          {/* {
            products.map((products, index)=>{
              return(
                <Link to={`/Item/${product.id}`} key={product.id}>
                  <Cards title={products.title} img={serum}/>
                </Link>
              )
            })
          } */}
                <Link to={`/Item`}>
                  <Cards title="Face Serum" img={serum}/>
                </Link>

            <Cards title="Face Oil" img={oil}/>
            <Cards title="Face Toner" img={tonor}/>
            <Cards title="Moisturizer" img={moisturizer}/>
            {/* <Cards title="Exfoliating" img={ExfoliatingGrain}/> */}
        </div>
    </div>
  )
}

export default Products