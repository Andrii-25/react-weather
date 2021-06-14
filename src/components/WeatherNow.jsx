import React, { useState, useEffect} from 'react';
import '../css/WeatherInfo.css';
import { Cloud } from '../icons/weather';

function WeatherNow() {
    const [weather, setWeather] = useState({});
    const [isLoaded, setLoading] = useState(false);
    const [querry, setQuerry] = useState('Lviv')

    const dateBuilder = (d) => {
        let date = new Date(d * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      }

    const API_KEY = 'd59f4924123076df608199b4d5280705';

      useEffect(() => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${querry}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
          setWeather(result);
          setLoading(true);
          console.log(result);
      })
      }, []);
    
      if(!isLoaded){
          return <div>Loading...</div>
      }

    return (
        <div className="wrapper">
            <img id="icon" src={Cloud} />
            <span id="temperature">{Math.round(weather.main.temp)}°c<br/>{weather.name}, {weather.sys.country}<br/>{dateBuilder(weather.dt)}</span>
            {/* <span id="location">Los Angeles, USA</span>
            <span id="date">Wednesday, 22:18</span> */}
            <div className="block">Min & Max<br/> temperature<br/>
                <span className="txt">{Math.round(weather.main.temp_min)}°c & {Math.round(weather.main.temp_max)}°c</span>
            </div>
            <div className="block">Wind Status<br/><br/>
                <span className="txt">{weather.wind.speed} km/h</span>
            </div>
            <div className="block">Humidity<br/><br/>
                <span className="txt">{weather.main.humidity}%</span>
            </div>
            <div className="block">Sunrise & Sunset<br/><br/>
                <span className="txt">{dateBuilder(weather.sys.sunrise)} & {dateBuilder(weather.sys.sunset)}</span>
            </div>
        </div>
    )
}

export default WeatherNow;
