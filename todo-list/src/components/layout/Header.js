import React from 'react';
import { Link } from 'react-router-dom';

import '../styling/header.css'; // Styling

function Header() {

    return (
        <header className="header">
            <h1>TodoList</h1>
            <Link to="/" className="link">Home</Link> 
            <Link to="/about" className="link">About</Link> 
        </header>
    )
}

export default Header;