import React, { useState, useEffec } from 'react';
import '../css/WeatherInfo.css';
import { Cloud, Cold, Wind, Drop } from '../icons/weather';

function WeatherInfo() {
    

    return (
        <div className="wrapper">
            <img id="icon" src={Cloud} />
            <span id="temperature">25°C<br/>Lviv, UA<br/></span>
            {/* <span id="location">Los Angeles, USA</span>
            <span id="date">Wednesday, 22:18</span> */}
            <div className="block">Min & Max<br/> temperature<br/>
                <span className="txt">15°C & 30°C</span>
            </div>
            <div className="block">Wind Status<br/><br/>
                <span className="txt">2 km/h</span>
            </div>
            <div className="block">Humidity<br/><br/>
                <span className="txt">80%</span>
            </div>
            <div className="block">Sunrise & Sunset<br/><br/>
                <span className="txt">05:00 & 21:30</span>
            </div>
        </div>
    )
}

export default WeatherInfo;
