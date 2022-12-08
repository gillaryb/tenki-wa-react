import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  function displayWeatherForecast(response) {
    console.log();
  }
console.log(props);
  let longitude = props.coords.lon;
   let latitude = props.coords.lat;
  const apiKey = "a43564c91a6c605aeb564c9ed02e3858";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherForecast);

  return (
    <div className="WeatherForecast">
      <h4 className="forecast-heading">Weather Forecast</h4>
      <div className="row week">
        <div className="col-2 shadow-sm day">
          <h5>Monday</h5>
          <div className="date">Sept 6</div>
          <img
            src="icons/drizzle.svg"
            alt="drizzle"
            className="weather-icon"
            width="110px"
          />
          <div className="temperature">28˚/ 22˚</div>
          <div className="forecast">Rain</div>
        </div>
      </div>
    </div>
  );
}
