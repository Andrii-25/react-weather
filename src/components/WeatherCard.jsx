import React, { useState, useEffect } from 'react';
import '../css/WeatherCard.css';
import { Cloud, Sun } from '../icons/weather';

function WeatherCard() {
    const [data, setData] = useState({});
    const [querry, setQuerry] = useState('Lviv');
    const [isLoaded, setLoaded] = useState(false);
    const API_KEY = 'd59f4924123076df608199b4d5280705';

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${querry}&cnt=5&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
            setData(result);
            setLoaded(true);
            console.log(result);
        })
        }, []);

        const dateBuilder = (d) => {
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let date = new Date(d * 1000);
            return days[date.getDay()];
          }

    if(!isLoaded){
        return <div>Loading...</div>
    }

    const cardList = data.list.map(card => {
        
        return (
        <div className="card" key={data.list.dt_txt}>
            <div id="day">{dateBuilder(data.list[0].dt)}</div>
            <img className="weather-icon" src={Sun} />
        </div>
        )
    })

    return (
        <>
            {cardList}
        </>
    )
}

export default WeatherCard;
