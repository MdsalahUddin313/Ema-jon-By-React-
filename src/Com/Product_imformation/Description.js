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
        <div>
           <h1>Your Product </h1>
           <img src={Product_details.img} alt=""></img>
           <Product 
           showButton={false}
           Product={Product_details}></Product>
            
        </div>
    );
};

export default Description;