import React, { useState } from "react";
import MainWeather from "./MainWeather";
import axios from "axios";
import "./MenuBar.css";

export default function MenuBar(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    // search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }
  if (weatherData.ready){
    return (
      <div className="Menubar pt-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
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
                type="submit"
                value="Current Location"
                className="btn btn-outline-primary search-button"
              />
            </div>
          </div>
        </form>
         <MainWeather data={weatherData} />
      </div>
    
    );
 } else {
    const apiKey = "f0553e70ab5eb275ae36ae41c6ace9b0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);

    return "Loading...";
  }

}
