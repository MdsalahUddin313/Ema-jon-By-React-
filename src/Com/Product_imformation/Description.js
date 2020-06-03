import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import './Pdescription.css'

const Description = () => {
     const {Description}=useParams(); 
     const Product_details=fakeData.find(pd=>pd.key===Description);
     console.log(Product_details);
    return (
        <div class="container">
           <h1 class="header_part">Your <span class="lighter">Product</span> </h1>
           <div>
           <img class="images" src={Product_details.img} alt=""></img>
           </div>
           <div class="center">
           <h2 class="name">{Product_details.name}</h2>
            <h4>Seller:{Product_details.seller}</h4>
            <h4>Shipping:{Product_details.shipping}</h4>
            <p>Star:{Product_details.star}</p>
            <p>Star Count:{Product_details.starCount}</p>
            <p>Stock:{Product_details.stock}</p>
            <p>Whole Price:{Product_details.wholePrice}</p>
            <p>Price:{Product_details.price}</p>
            </div>
           <div class="center">
            <button class="btn"><a href={Product_details.url}>Visit Sites</a></button>
            </div>
         
            
        </div>
    );
};

export default Description;


/*

  <Product 
           showButton={false}
           Product={Product_details}></Product>

price: 169.99
priceFraction: "99"
seller: "Nikon"
shipping: 3.99
star: 0
starCount: 1665
stock: 99
url: "https://www.amazon.com/Nikon-Coolpix-L340-Digital-3-0-Inch/dp/B071Z19L5T/ref=sr_1_15?s=electronics&ie=UTF8&qid=1499124549&sr=1-15&keywords=camera"
wholePrice:
*/