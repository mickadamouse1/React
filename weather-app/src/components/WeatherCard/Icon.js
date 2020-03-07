import React from 'react';

const Icon = (props) => {

    const iconStyle = {
        fontSize: '2.5rem'
    }

    let icon;
    switch (props.condition) {
        case "Clear":
            icon = 'fas fa-sun';
            break;
        case "Clouds":
            icon = 'fas fa-cloud';
            break;
        default:
            break;
    }
    return (
        
        <i className={icon} style={iconStyle}></i> 
    );
}

export default Icon;