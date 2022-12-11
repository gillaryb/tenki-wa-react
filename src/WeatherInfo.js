import React from "react"
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo rounded bshadow">
        <div className="date-today">
          {" "}
          <FormattedDate date={props.data.date} />
        </div>
        <h1 className="city-name">{props.data.city}</h1>
        <WeatherIcon code={props.data.icon} size={110} />
        <WeatherTemperature celcius={props.data.temperature} />
        <ul className="weather">
          <li className="today">{props.data.description}</li>
          <li className="max-min">
            <strong>Max:</strong>
            <span className="max-temp">
              {" "}
              {Math.round(props.data.max)}˚
            </span>{" "}
            <strong>Min:</strong>
            <span className="min-temp"> {Math.round(props.data.min)}˚</span>
          </li>
        </ul>
      </div>
    );
}