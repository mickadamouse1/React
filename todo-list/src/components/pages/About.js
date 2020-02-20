import React from 'react';

import '../styling/about.css'; // Styling


function About() {
    return (
        <React.Fragment>
            <div className="container">
                <h1>About</h1>
                <p>This is the TodoList app v1.0.0. It is a part of a React crash course.</p>
            </div>
        </React.Fragment>
    );
}

export default About;