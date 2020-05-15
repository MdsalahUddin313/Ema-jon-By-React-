import React from 'react';
import logo from '../Images/logo.png'
import './Assets/style.css'

const Header = () => {
    return (
        <div>
            <div class="header">
            <img class="images" src={logo} alt=""/>

            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Review">Order Review</a>
                <a href="/Manage">Manage Inventory</a>
            </nav>
            </div>
        </div>
    );
};

export default Header;