import React, { Component } from 'react';

import './styles/Services.css';

class Services extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="servicesHeader">Accountancy Services - Built Around You</h1>
                <div className="services">
                    <div className="service business">
                        <h1>Business</h1>
                        <ul>
                            <li>Book-keeping and Accountancy</li>
                            <li>Business Planning</li>
                            <li>Business Start-up</li>
                            <li>Company Secretarial and Formation</li>
                            <li>Corporate Tax Planning</li>
                            <li>Payroll</li>
                            <li>VAT</li>
                            <li>Sole Trader and Partnership</li>
                        </ul>
                    </div>
                    <div className="service personal">
                        <h1>Personal</h1>
                        <ul>
                            <li>Inheritance Tax Planning</li>
                            <li>Self Assessment and Personal Tax Returns</li>
                            <li>Trusts</li>
                            <li>HM Revenue Tax Enquiries</li>
                            <li>PAYE Tax Code Assistance</li>
                            <li>Estate and Probate</li>
                            <li>Independent Examination</li>
                            <li>Accounts</li>
                            <li>Charity Returns</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;