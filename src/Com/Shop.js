import React, { useState } from 'react';
import fakeData from '../fakeData';
import './shop.css'
import Product from './Products/Product';
import Properties from './Products/Properties'
import Cart_item from './Products/Cart_item';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [Cart, setCart] = useState([]);


const handleAddproduct=(product)=>{
       const newCart=[...Cart,product];
       setCart(newCart);
}
    
    return (

    //<h1>
    
    <div class="product-container">
        <div class="product_details">
          {products.map(pd=><Product 
          showButton={true}
          handleAddproduct={handleAddproduct}
           Product={pd}></Product>)} 
        </div>
        <div class="product-properties-container">
          <h1><span class="lighter_shop">This is cart</span></h1>
           <Properties Cart={Cart}></Properties>
    
        </div>
    </div>
       //  </h1>

    );
};

export default Shop;