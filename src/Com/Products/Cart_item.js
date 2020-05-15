import React from 'react';

const Cart_item = (props) => {
    const Cart=props.Cart;
    console.log(Cart);
    let total=0;

    for(let i=0;i<Cart_item.length;i++){
        const product=Cart[i];
        total=total+product.price;
    }
    return (
        <div>
            <h5>Total Price:{total}</h5>
            
        </div>
    );
};

export default Cart_item;