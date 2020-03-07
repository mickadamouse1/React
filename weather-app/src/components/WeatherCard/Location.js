import React from 'react';

const Location = ({city, country}) => {

    const Container = {
        textAlign: 'center',
    }

    const cityStyle = {
        fontSize: '1.5rem'
    }

    const countryStyle = {
        fontWeight: '400'
    }

    return (
        <div style={Container}>
             <h1 style={cityStyle}>{city}</h1>
            <h3 style={countryStyle}>{country}</h3>
        </div>
    );
}

export default Location;