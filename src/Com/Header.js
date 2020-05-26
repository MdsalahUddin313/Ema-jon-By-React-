import React from 'react';
import logo from '../Images/logo.png'
import './Assets/style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div class="header">
            <img class="images" src={logo} alt=""/>
<Router><div>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Review">Order Review</a>
                <a href="/Manage">Manage Inventory</a>
            </nav>
            </div></Router>
            </div>
        </div>
    );
};

export default Header;