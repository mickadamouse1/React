import React from 'react';

import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

const WeatherCard = (prop) => {

    const red = 100;

    const Card = {
        margin: '0 auto',
        background: `linear-gradient(to top, rgba(${red},200,200), blue)`,
        width: '11rem',
        height: '15rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '.35rem',
        color: '#fff'
    }

    return(
        <div style={Card}>
            <Location />
            <Icon />
            <Condition />
        </div>
    );
}

export default WeatherCard;