import React from 'react';

import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

const WeatherCard = (props) => {

    let highColour;
    let lowColour;

    let bg;

    if (props.temp > 12) {
         highColour = (1 - ((props.temp - 12) / 28)) * 255;
         lowColour = highColour - 150;
         bg = `linear-gradient(
            to top, 
            rgba(255, ${highColour}, 0), 
            rgb(255, ${lowColour}, 0))`;
    } else if (props.temp <= 12) {
         highColour = (1 - ((props.temp + 20) / 32)) * 255 ;
         lowColour = highColour - 150;
         bg = `linear-gradient(
            to top, 
            rgba(0, ${highColour}, 255), 
            rgb(0, ${lowColour}, 255))`;
    }

    console.log(highColour);

    const Card = {
        margin: '0 auto',
        background: bg,
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