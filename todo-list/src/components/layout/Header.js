import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    backgroundImage: 'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
    color: '#fff',
    padding: '.5rem',
    fontSize: '1.25rem',
    borderTopRightRadius: '2.5rem',
    borderTopLeftRadius: '2.5rem',
    textAlign: 'center'
}

export default Header;