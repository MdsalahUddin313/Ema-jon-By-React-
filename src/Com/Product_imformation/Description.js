import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Description = () => {
     const {productKey}=useParams(); 
    return (
        <div>
           <h1>{productKey}Description part</h1>            
        </div>
    );
};

export default Description;