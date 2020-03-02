import React from 'react';

const Location = (props) => {

    const Container = {
        textAlign: 'center',
    }

    const city = {
        fontSize: '1.5rem'
    }

    const country = {
        fontWeight: '400'
    }

    return (
        <div style={Container}>
             <h1 style={city}>Liverpool</h1>
            <h3 style={country}>UK</h3>
        </div>
    );
}

export default Location;