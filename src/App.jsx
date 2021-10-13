import React, { useState } from 'react'
import { Search, Weather } from './components'
import './style.scss'

function App() {
  const [weather, setWeather] = useState([]);
  return (
    <section className="base-container">
      <div className="header">Weather-App</div>
      <Search setWeather={setWeather} />
      <Weather weather={weather} />
    </section>
  )
}

export default App
