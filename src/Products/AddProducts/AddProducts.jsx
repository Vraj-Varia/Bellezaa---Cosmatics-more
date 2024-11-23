import React, { useState } from 'react'
import './AddProducts.css'
import axios from 'axios'

const AddProducts = () => {
  const [productName, setProductName] = useState()
  const [ProductPrice, setProductPrice] = useState()
  const [ProductDescription, setProductDescription] = useState()
  const [ProductCategory, setProductCategory] = useState()
  const [loading, setLoading] = useState(false)
  
  const handleAddproduct = (e) => {
    e.preventDefault()
    setLoading(true);
    axios.post('http://localhost:3001/addproducts', {productName, ProductPrice, ProductDescription, ProductCategory})
    .then(result => {
      console.log("result", result);
    })
    .catch(err=>{
      console.log(err);
      console.log("Addition failed, please try again!!");
    })
    .finally(()=>{
      setLoading(false);
    })
  }

  return (
    <div className='AddProducts'>
        <form method="post" onSubmit={handleAddproduct}>
            <h1>Add Products</h1>
            <input type="text" name="productName" id="productName" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)}/>
            <input type="text" name="productPrice" id="productPrice" placeholder='Product Price' onChange={(e) => setProductPrice(e.target.value)}/>
            <input type="text" name="productDescription" id="productDescription" placeholder='Product Description' onChange={(e) => setProductDescription(e.target.value)}/>
            <select name="productCatagory" id="catagory" onChange={(e) => setProductCategory(e.target.value)}>
                <option value="Blush">Blush</option>
                <option value="Serum">Serum</option>
                <option value="Trending on social">Trending on social</option>
                <option value="Sale">Sale</option>
                <option value="Clean + Planet aware of Sephora">Clean + Planet aware of Sephora</option>
                <option value="Black Owned Brands">Black Owned Brands</option>
                <option value="Foundations">Foundations</option>
                <option value="Gifts">Gifts</option>
            </select>
            <input type="file" name="productImage" id="productImage" />
            {/* <input type="submit" value="Add Product" id='addBtn' /> */}
            <button id='addBtn' disabled={loading || !productName || !ProductPrice || !ProductDescription || !ProductCategory} >{loading ? 'Adding Products...' : 'Add Product'}</button>
        </form>
    </div>
  )
}

export default AddProducts