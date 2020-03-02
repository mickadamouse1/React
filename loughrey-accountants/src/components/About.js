import React, { Component } from 'react';

import svg from './images/svg/about.svg';
import './styles/About.css';

class About extends Component {
    render() {
        return (
            <section className="sectionAbout">
                <div className="container flex">
                    <div className="aboutContents">
                        <h1>About Us -</h1>
                        <p><strong>Loughrey & Co. Accountants is a local accountancy firm based in Hoylake.</strong></p>
                        <p>Loughrey & Co can trace its roots back to 1978 when accountants Robert Youds and Richard Ellison decided to work together and form a partnership called Youds, Ellison & Co. In 1999 Mark Loughrey joined the practice in 1999 and after retirement and personnel moving on the practice became Loughrey and Co in 2005.</p>
                        <p>Still located in Hoylake, Wirral the firm provides a complete range of accountancy services for personal and corporate clients. As a small firm we have always prided ourselves on providing a personal service whether you are a commercial business, 'not for profit' organisation or an individual. Importantly our accountancy service is cost effective and we have a range of options, which allows you to choose how involved you would like us to be. </p>
                    </div>
                    <img src={svg} alt=""/>
                </div>
            </section> 
        );
    }
}

export default About;