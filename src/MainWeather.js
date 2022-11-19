import React from "react";
import "./MainWeather.css";

export default function MainWeather() {
  return (
    <div className=" MainWeather shadow">
      <div className="date-today">Sept 5, Monday 14:29</div>
      <h1 className="city-name">YUKI</h1>
      <img src="icons/sunny-cloudy.svg" alt="sunny-cloudy" width="135px" />
      <div className="weather-temperature p-2">
        <strong></strong>
        <span className="celFarh">
          <a href="#" className="celcius">
            ˚C{" "}
          </a>{" "}
          |
          <a href="#" className="farh">
            ˚F
          </a>
        </span>
      </div>
      <ul className="weather">
        <li className="today">Sunny</li>
        <li className="max-min">
          <strong>Max:</strong>
          <span className="temp-today"> 32˚</span>
          <strong>Min:</strong>
          <span> 27˚</span>
        </li>
      </ul>
    </div>
  );
}
