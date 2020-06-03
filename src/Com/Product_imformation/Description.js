import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const Description = () => {
     const {Description}=useParams(); 
     const Product_details=fakeData.find(pd=>pd.key===Description);
     console.log(Product_details);
    return (
        <div>
           <h1>{Description}Description part</h1> 
           <img src={Product_details.img} alt=""></img>
    <h1>{Product_details.name}</h1>           
        </div>
    );
};

export default Description;