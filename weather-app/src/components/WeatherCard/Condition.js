import React from 'react';

const Condition = ({temp, condition}) => {

    return (
        <>
            <h1>{temp}°C</h1>
            <h3>{condition}</h3>
        </>
    );
}

export default Condition;