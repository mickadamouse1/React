import React, { Component } from 'react';

import './styles/Services.css';

class Services extends Component {
    render() {
        return (
            <div className="container">
                <div className="servicesIntro">
                    <h1>Accountancy Services - Built Around You</h1>
                    <p>Loughrey & Co provides a range of accountancy services to businesses in Wirral wider Merseyside area:</p>
                </div>
                <div className="services">
                    <div className="service business">
                        <h1>Business</h1>
                        <hr/>
                        <ul>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Book-keeping and Accountancy</p>   
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Business Planning</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Business Start-up</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Company Secretarial and Formation</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Corporate Tax Planning</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Payroll</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>VAT</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Sole Trader and Partnership</p>
                            </li>
                        </ul>
                    </div>
                    <div className="service personal">
                        <h1>Personal</h1>
                        <hr/>
                        <ul>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Self Assessment and Personal Tax Returns</p>
                                
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Inheritance Tax Planning</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Trusts</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>HM Revenue Tax Enquiries</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>PAYE Tax Code Assistance</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Estate and Probate</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Independent Examination</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Accounts</p>
                            </li>
                            <li>
                                <i class="fas fa-check"></i>
                                <p>Charity Returns</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;