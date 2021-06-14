import React from 'react';
import '../css/Header.css';
import logo from '../weather-forecast.png';
import searchIcon from '../magnifying-glass.png';
import SearchBar from './SearchBar';

function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="title">React Weather</div>
            <SearchBar />
            <img className="search-icon" src={searchIcon} alt="SearchIcon"/>
        </div>
    );
}

export default Header;