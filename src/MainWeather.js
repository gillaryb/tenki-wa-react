import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Features from "./Features";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./MainWeather.css";

export default function MainWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayResponse(response) {
    setWeatherData({
      ready: true,
      coords: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

   function handleLocation(event) {
     event.preventDefault();
     navigator.geolocation.getCurrentPosition(showLocation);
   }

   function showLocation(position) {
     const apiKey = "f0553e70ab5eb275ae36ae41c6ace9b0";
     let lat = position.coords.latitude;
     let lon = position.coords.longitude;
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(displayResponse);
   }

  function search() {
    const apiKey = "f0553e70ab5eb275ae36ae41c6ace9b0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);
  }


  if (weatherData.ready) {
    return (
      <div className="MainWeather pt-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <i className="fa fa-github" aria-hidden="true"></i>
              <input
                type="search"
                placeholder="Search for your city"
                size="40"
                autoFocus="on"
                className="search-field shadow-sm"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-input "
              />
              <input
                type="button"
                value="Current Location"
                className="btn btn-outline-primary search-button"
                onClick={handleLocation}
              />
            </div>
          </div>
        </form>
        <Features displayResponse={displayResponse}/>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coords}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
