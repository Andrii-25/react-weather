import React, { useState, useEffect} from 'react';
import '../css/WeatherInfo.css';
// import { Cloud } from '../icons/weather';

function WeatherNow() {
    const [data, setData] = useState({});
    const [isLoaded, setLoaded] = useState(false);
    const [querry, setQuerry] = useState('Lviv');

    const dateBuilder = (d) => {
        let date = new Date(d * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      }

    const API_KEY = 'd59f4924123076df608199b4d5280705';

      useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lviv&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
          setData(result);
          setLoaded(true);
        //   console.log(data);
      })
      }, []);
    
      if(!isLoaded){
          return <div>Loading...</div>
      }

      const iconCode = data.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;

    return (
        <div className="wrapper">
            <img id="icon" src={iconURL} />
            <span id="temperature">{Math.round(data.main.temp)}°c<br/>{data.name}, {data.sys.country}<br/>{dateBuilder(data.dt)}</span>
            {/* <span id="location">Los Angeles, USA</span>
            <span id="date">Wednesday, 22:18</span> */}
            <div className="block">Min & Max<br/> temperature<br/>
                <span className="txt">{Math.round(data.main.temp_max)}°c & {Math.round(data.main.temp_max)}°c</span>
            </div>
            <div className="block">Wind Status<br/><br/>
                <span className="txt">{data.wind.speed} km/h</span>
            </div>
            <div className="block">Humidity<br/><br/>
                <span className="txt">{data.main.humidity}%</span>
            </div>
            <div className="block">Sunrise & Sunset<br/><br/>
                <span className="txt">{dateBuilder(data.sys.sunrise)} & {dateBuilder(data.sys.sunset)}</span>
            </div>
        </div>
    )
}

export default WeatherNow;
