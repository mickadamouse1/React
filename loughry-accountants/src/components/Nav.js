import React, { Component } from 'react';

import './styles/Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="navContact">
                        <p>mjloughrey@accountant.com</p>
                        <p>0151 632 3298</p>
                    </div>
                    <div className="navMain">
                        <h1>Loughry & Co.<br></br>Accountants</h1>
                        <ul>
                            <li><a href="">Homepage</a></li>
                            <li><a href="">Our Services</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;