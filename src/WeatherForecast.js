import React from 'react'
import "./WeatherForecast.css";

export default function WeatherForecast(){
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
              class="weather-icon"
              width="110px"
            />
            <div className="temperature">28˚/ 22˚</div>
            <div className="forecast">Rain</div>
          </div>
        </div>
      </div>
    );
}