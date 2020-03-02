import React from 'react';

const Condition = (props) => {

    const condition = {
        fontWeight: '400'
    }

    return (
        <>
            <h1 style={condition}>20°C</h1>
            <h3 style={condition}>Clouds</h3>
        </>
    );
}

export default Condition;