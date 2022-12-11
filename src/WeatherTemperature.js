import React, { useState }from "react";
import "./WeatherInfo.css";

export default function WeatherTemperature(props){
    const [unit, setUnit ] = useState("celcius");

    function showFahrenheit (event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function showCelcius (event){
        event.preventDefault();
        setUnit("celcius")
    }
 function fahrenheit (){
    return (props.celcius * 9) / 5 + 32;
 }
    if (unit === "celcius"){
    return (
      <div className="weather-temperature p-2">
        <strong>{Math.round(props.celcius)}</strong>
        <span className="celFarh">
            ˚C {" "}
          |
          <a href="/" className="farh" onClick={showFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
    } else {
        return (
          <div className="weather-temperature p-2">
            <strong>{Math.round(fahrenheit())}</strong>
            <span className="celFarh">
              <a href="/" className="celcius" onClick={showCelcius}>
                ˚C{" "}
              </a>{" "}
              |
                ˚F
            </span>
          </div>
        );
    }
}