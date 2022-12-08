import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props){
 function day (){
    let date = new Date (props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 return days[day];
 }
    return (
      <div className="DailyForecast">
        {" "}
        <h5>{day}</h5>
        <div className="date">Sept 6</div>
        <WeatherIcon code={"01d"} size={55} />
        <div className="temperature">28˚/ 22˚</div>
        <div className="forecast">Rain</div>
      </div>
    );
}