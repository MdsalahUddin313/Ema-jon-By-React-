import React from 'react';
import logo from '../Images/logo.png'
import './Assets/style.css'

import Error_page from './Products/Error_page';

const Header = () => {
    return (
        <div>
            <div class="header">
            <img class="images" src={logo} alt=""/>
        
            <nav>
                <a href="/Shop"><link to="/Shop"></link>Shop</a>
                <a href="/Review"><link to="/Review"></link>Order Review</a>
                <a href="/Manage"><link to="/Manage"></link>Manage Inventory</a>
            </nav>
            
            
           
            </div>
        </div>
    );
};

export default Header;