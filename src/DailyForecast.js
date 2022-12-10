import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  const date = new Date(props.data.dt * 1000);

  function day() {
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function dateForecast() {
    let months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[date.getMonth()];
    let today = date.getDate();

    return `${month} ${today}`;
  }

  function maxTemperature (){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`
  }

  function minTemperature(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`
  }

  return (
    <div className="DailyForecast">
      {" "}
      <h5>{day()}</h5>
      <div className="date">{dateForecast()}</div>
      <WeatherIcon code={"01d"} size={55} />
      <div className="temperature">
        {maxTemperature()}˚/ {minTemperature()}˚
      </div>
      <div className="forecast">{props.data.weather[0].description}</div>
    </div>
  );
}
