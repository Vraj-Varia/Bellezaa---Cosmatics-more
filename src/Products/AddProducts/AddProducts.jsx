import React, {  } from 'react'
import './AddProducts.css'

const AddProducts = () => {
  return (
    <div className='AddProducts'>
        <form method="post">
            <h1>Add Products</h1>
            <input type="text" name="productName" id="productName" placeholder="Product Name" />
            <input type="text" name="productPrice" id="productPrice" placeholder='Product Price'/>
            <input type="text" name="productDescription" id="productDescription" placeholder='Product Description' />
            <select name="productCatagory" id="catagory">
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
            <input type="submit" value="Add Product" id='addBtn'/>
        </form>
    </div>
  )
}

export default AddProducts