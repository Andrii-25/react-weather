import React, { useState, useEffect } from 'react';
import '../css/WeatherCard.css';
// import { Cloud, Sun } from '../icons/weather';

function WeatherCard() {
    let [data, setData] = useState([]);
    const [querry, setQuerry] = useState('Lviv');
    const [isLoaded, setLoaded] = useState(false);
    const API_KEY = 'c17139505b494caeaecfb8dbdcdd4f09';

    useEffect(() => {
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=Lviv,UA&key=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
            setData(result.data);
            setLoaded(true);
            // console.log(data);
        })
        }, []);

        const dateBuilder = (d) => {
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let date = new Date(d * 1000);
            return days[date.getDay()];
          }

        // const importAll = (r) => {
        //     let images = {};
        //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        //     return images;
        // }

        // const icons = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/));

        // let weather = data.weather;

        // const iconCode = data[0].weather.icon;
        // const iconURL = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;

    if(!isLoaded){
        return <div>Loading...</div>
    }

    const cardList = data.slice(0, 5).map(card => {
        const iconCode = card.weather.icon;
        const iconURL = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`; 
        return (
        <div className="card" key={card.ts}>
            <div id="day">{dateBuilder(card.ts)}</div>
            <img className="weather-icon" src={iconURL} />
            <pre><br/>       Min       Max</pre>
            <pre>       {card.app_min_temp}      {card.app_max_temp}           </pre>
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
