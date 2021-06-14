import React from 'react';
import '../css/WeatherCard.css';
import { Cloud, Sun } from '../icons/weather';

function WeatherCard() {
    return (
        <div className="card">
            <div id="day">Thursday</div>
            <img className="weather-icon" src={Sun} />
        </div>
    )
}

export default WeatherCard;
