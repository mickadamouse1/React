import React, { Component } from 'react';

import './styles/Contact.css';

class Contact extends Component {
    render() {
        return (
            <section className="sectionContact">
                <div className="container flex">
                    <div className="contactIntro">
                        <h1 className="header">Book an Appointment</h1>
                        <p>To book an appointment you can get in touch with us in a number of ways. </p>
                    </div>
                    <div className="contactGroup">
                        <div className="contactInfo">
                            <h1>Contact Info</h1>
                            <hr/>
                            <p><strong>Visit our office at:</strong></p>
                            <p>Hoylake, Wirral</p>
                            <p>38 Market Street</p>
                            <p>CH47 2AF</p>
                            <hr/>
                            <p>T: 0151 632 3298</p>
                            <p>E: mjloughrey@accountant.com</p>
                        </div>
                        <div className="maps"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;