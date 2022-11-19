import React from 'react';

export default function MainWeather(){
    return (
      <div className="MainWeather">
        <div className="date-today">Sept 5, Monday 14:29</div>
        <h1 className="city-name">YUKI</h1>
        <img src="icons/sunny-cloudy.svg" alt="sunny-cloudy" width="135px" />
        <div className="row temperature">
          <div className="col-6 current-temp" >
            32˚
          </div>
          <div className="col-4 celFarh-class">
            <span className="celFarh">
              <a href="" className="celcius" >
                ˚C{" "}
              </a>{" "}
              |
              <a href="" className="farh">
                ˚F
              </a>
            </span>
          </div>
          <ul className="weather">
            <li className="today" >
              Sunny
            </li>
            <li className="max-min">
              <strong>Max:</strong>
              <span className="temp-today" >
                {" "}
                32˚
              </span>
              <strong>Min:</strong>
              <span id="min"> 27˚</span>
            </li>
          </ul>
        </div>
      </div>
    );
}