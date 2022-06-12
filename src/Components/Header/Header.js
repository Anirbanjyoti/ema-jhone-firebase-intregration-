import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Product'>Product</Link>
                <Link to='/Orders'>Orders</Link>
                <Link to='/Registration'>Registration</Link>
                <Link to='/Login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;