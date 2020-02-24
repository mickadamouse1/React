import React, { Component } from 'react';

import './styles/Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="container">
                    <div className="navContact">
                        <p><i className="fas fa-envelope"></i>mjloughrey@accountant.com</p>
                        <p><span>|</span></p>
                        <p><i className="fas fa-phone"></i>0151 632 3298</p>
                    </div>
                    <div className="navMain">
                        <h1>Loughrey & Co.<br></br>Accountants</h1>
                        <ul>
                            <li><i className="fas fa-home"></i><a href="http://localhost:3000/">Homepage</a></li>
                            <li><i className="fas fa-calculator"></i><a href="http://localhost:3000/">Our Services</a></li>
                            <li><i className="fas fa-user-tie"></i><a href="http://localhost:3000/">About Us</a></li>
                            <li><i className="fas fa-paper-plane"></i><a href="http://localhost:3000/">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;