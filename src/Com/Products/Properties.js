import React from 'react';
import './product.css'
const Properties = (props) => {
    const cart=props.Cart;
    console.log({cart});
    let total=0;

    let shipping=0;
            
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;

        if(total<10){
            shipping=0;
        }
        else if(total>15){
           shipping =12.35
        }

    }

    return (
        <div>
            <h3>Items:<span class="light">{cart.length}</span></h3>
            <h3>Shipping:{shipping}$</h3>
            <h3>Total Order:{total}$</h3>
        </div>
    );
};

export default Properties;