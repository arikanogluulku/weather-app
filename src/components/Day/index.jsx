import React from 'react'
function index({ day }) {
    return (
        <div className="weather-day">
            <h2 className="weather-date">{day.date}</h2>
            <img src={day.day.condition.icon} alt="icon" />
            <li className="weather-status">{day.day.condition.text}</li>
            <li className="weather-max">Max. Temp : {day.day.maxtemp_c}</li>
            <li className="weather-min">Min. Temp : {day.day.mintemp_c}</li>
        </div>
    )
}

export default index
