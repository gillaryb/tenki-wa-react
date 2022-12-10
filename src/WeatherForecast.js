import React, { useState } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);


  function displayWeatherForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    const apiKey = "a43564c91a6c605aeb564c9ed02e3858";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h4 className="forecast-heading">Weather Forecast</h4>
        <div className="row week">
          {forecast.map(function (dailyForecastData, index) {
            if (index < 5) {
              return (
                <div className="col-2 shadow-sm day">
                  <DailyForecast data={dailyForecastData} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
}
