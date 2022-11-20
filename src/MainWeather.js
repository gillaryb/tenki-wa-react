import React, { useState } from "react";
import axios from "axios";
import "./MainWeather.css";

export default function MainWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temperature,
      city: response.data.main.name,
      description: response.data.weather[0].description,
      max: response.data.temp_max,
      min: response.data.temp_min,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className=" MainWeather shadow">
        <div className="date-today">Sept 5, Monday 14:29</div>
        <h1 className="city-name">{weatherData.city}</h1>
        <img src={weatherData.icon} alt={weatherData.description} width="135px" />
        <div className="weather-temperature p-2">
          <strong>{weatherData.temperature}</strong>
          <span className="celFarh">
            <a href="null" className="celcius">
              ˚C{" "}
            </a>{" "}
            |
            <a href="null" className="farh">
              ˚F
            </a>
          </span>
        </div>
        <ul className="weather">
          <li className="today">{weatherData.description}</li>
          <li className="max-min">
            <strong>Max:</strong>
            <span className="temp-today">{weatherData.max}</span>
            <strong>Min:</strong>
            <span>{weatherData.min}</span>
          </li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "f0553e70ab5eb275ae36ae41c6ace9b0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);

    return "Loading...";
  }
}