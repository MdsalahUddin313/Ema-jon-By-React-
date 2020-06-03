import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {

    const  {cart,setCart}=useState([]);

    useEffect(()=>{
          const savedCart=getDatabaseCart();
          const ProductKeys=Object.keys(savedCart);

          const cartProducts=ProductKeys.map(key=>{
                 const product=fakeData.find(pd=>pd.key===key);
                 product.quantity=savedCart[key];
                 return product;
                    })
          console.log(ProductKeys);
    }
    )
    return (
        <div>
               <h1>Riview part</h1>            
        </div>
    );
};

export default Review;