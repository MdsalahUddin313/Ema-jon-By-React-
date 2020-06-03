import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const Description = () => {
     const {Description}=useParams(); 
     const Product_details=fakeData.find(pd=>pd.key===Description);
     console.log(Product_details);
    return (
        <div>
           <h1>Your Product </h1>
           <Product 
           showButton={false}
           Product={Product_details}></Product>
            
        </div>
    );
};

export default Description;