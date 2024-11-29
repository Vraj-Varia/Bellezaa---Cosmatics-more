import React, { useState } from 'react'
import './AddProducts.css'
import axios from 'axios'
import { Form } from 'react-router-dom'

const AddProducts = () => {
  const [productName, setProductName] = useState('')
  const [ProductPrice, setProductPrice] = useState('')
  const [ProductDescription, setProductDescription] = useState('')
  const [ProductCategory, setProductCategory] = useState('')
  const [productImage, setProductImage] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const handleAddproduct = (e) => {
    e.preventDefault()
    setLoading(true);

    const formData = new FormData;
    formData.append(`${productName}`, productName);
    formData.append('', ProductPrice);
    formData.append('', ProductDescription);
    formData.append('', ProductCategory);
    if (productImage) {
      formData.append('', productImage); // Include the image file if it exists
    }

    // axios.post('http://localhost:3001/addproducts', {productName, ProductPrice, ProductDescription, ProductCategory})
    axios.post('http://localhost:3001/addproducts', formData, {
      _headers: {
        'Content-Type': 'multipart/form-data',
      },
      get headers() {
        return this._headers
      },
      set headers(value) {
        this._headers = value
      },
    })
    .then(product => {
      console.log("result", product);
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
                <option value="Face Products">Face Products</option>
                <option value="Gifts">Gifts</option>
            </select>
            <input type="file" name="productImage" id="productImage" onChange={(e) => setProductImage(e.target.files[0])} />
            {/* <input type="submit" value="Add Product" id='addBtn' /> */}
            <button type='submit' id='addBtn' disabled={loading || !productName || !ProductPrice || !ProductDescription || !ProductCategory} >{loading ? 'Verifying Details...' : 'Next'}</button>
        </form>
    </div>
  )
}

export default AddProducts