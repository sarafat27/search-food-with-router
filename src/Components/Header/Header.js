import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact us</Link>
        </nav>
    );
};

export default Header;