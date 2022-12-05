import React, { useState } from "react";
import "./MainWeather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function CurrentLocation(props) {
  const [location, setLocation] = useState({ ready: false });

  function displayResponse(response) {
    setLocation({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      icon: response.data.weather[0].icon,
    });
  }

  function handleLocation(event) {
    event.preventDefault();
    setLocation();
  }

  function showLocation(position) {
    const apiKey = "f0553e70ab5eb275ae36ae41c6ace9b0";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metrics`;
    axios.get(apiUrl).then(displayResponse);
  }
  navigator.geolocation.getCurrentPosition(showLocation);

  if (location.ready) {
    return (
      <div>
        <input
          type="submit"
          value="Current Location"
          className="btn btn-outline-primary search-button"
          onClick={handleLocation}
        />
        <div className="WeatherInfo rounded bshadow">
          <div className="date-today">
            {" "}
            <FormattedDate date={location.date} />
          </div>
          <h1 className="city-name">{location.city}</h1>
          <WeatherIcon code={location.icon} />
          <WeatherTemperature celcius={location.temperature} />
          <ul className="weather">
            <li className="today">{location.description}</li>
            <li className="max-min">
              <strong>Max:</strong>
              <span className="temp-today">
                {" "}
                {Math.round(location.max)}˚
              </span>{" "}
              <strong>Min:</strong>
              <span> {Math.round(location.min)}˚</span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    showLocation();
  }
}
