import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const Product = (props) => {

    const {img,name,seller,wholePrice,star,starCount,key}=props.Product;
    return (
        <div class="product-items">
             <div class="image-parts">
            <img src={img} alt=''/>
            </div>
            <div class="Text-parts">
            <h5 class="name"><Link to={"/Product/"+key}>{name}</Link></h5>
            <p>{seller}</p>
            <p>wholePrice:${wholePrice}</p>
            <p>Star:{star} <span class="lighter">Star-Count:</span>{starCount}</p>
            <button class="cart_button"
            onClick={()=>props.handleAddproduct(props.Product)}
            ><FontAwesomeIcon icon={faShoppingCart}/>Add To Cart</button>
            </div>
           
        </div>
    );
};

export default Product;