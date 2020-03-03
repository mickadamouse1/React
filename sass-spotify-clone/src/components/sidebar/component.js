import React from 'react';

import './component.scss';

const sideBar = (props) => {

    const style = {
        background: 'red',
        width: '10rem',
        height: '10rem'
    }

    return(
        <div className="section">
            <h1><i class="fab fa-spotify"></i>Spotify™</h1>
            <ul className="nav">
                <li className="home"><i class="fas fa-home"></i>Home</li>
                <li><i class="fas fa-search"></i>Search</li>
                <li><i class="fas fa-book"></i>Your Library</li>
            </ul>
            <h3>Playlists</h3>
            <ul className="playlistNav">
                <li><i className="fas fa-plus plus"></i>Create Playlist</li>
                <li><i className="fas fa-heart liked"></i>Liked Songs</li>
            </ul>
            <hr/>
            <ul className="playlist">
                <li>Void</li>
                <li>K-pop</li>
                <li>Jazz</li>
                <li>Rock</li>
                <li>Samba</li>
                <li>Dance</li>
                <li>Void</li>
                <li>K-pop</li>
                <li>Jazz</li>
                <li>Rock</li>
                <li>Samba</li>
                <li>Dance</li>
            </ul>
        </div>
    );
}

export default sideBar;