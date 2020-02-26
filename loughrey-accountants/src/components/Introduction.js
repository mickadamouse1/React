import React, { Component } from 'react';
import './styles/Introduction.css';

class Introduction extends Component {
    render() {
        return (
            <section className="sectionIntroduction">
                <div className="container">
                    <div className="introductionIntro">
                        <h1>Why Choose Us?</h1>
                        <p><strong>Loughrey & Co accountants are based in Hoylake, Wirral and have provided tax and accountancy services to businesses for over 30 years.</strong></p>
                        <p>Our success has been built on developing long lasting relationships with every client. Our friendly, professional approach means that, we not only help you make your money work harder, but by understanding your business we can provide a clear, up-to-date, and comprehensive service according to your specific business.</p>
                        <p>Choosing Loughrey & Co means your financial affairs are in good hands. So contact us today to book an appointment with our friendly team. </p>
                        <p><strong>We look forward to working with you!</strong></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Introduction;