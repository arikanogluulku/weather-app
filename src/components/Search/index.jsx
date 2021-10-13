import React, { useState } from 'react'
import WeatherService from '../../services/WeatherService'

function Index({ setWeather }) {
    const [city, setCity] = useState('');
    console.log(city)
    const search = (e) => {
        if (e.key === "Enter") {
            let weatherService = new WeatherService();
            weatherService.getWeather(city)
                .then(response => {
                    setWeather(response.data.forecast.forecastday);
                    setCity("");
                }).catch(e => {
                    console.log(e)
                    alert("Please Enter a Valid City Name.")
                })

        }
    }
    return (
        <div className="search">
            <input className="search-input" type="text" placeholder="enter city" onChange={(e) => setCity(e.target.value)} value={city} onKeyPress={search} />

        </div>
    )
}

export default Index
