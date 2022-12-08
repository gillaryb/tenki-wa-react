import React from "react";
import axios from "axios";
import "./Features.css";

export default function Features({ displayResponse }) {

  function handleTokyoWeather(event) {
    event.preventDefault();
    const tokyoApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=f0553e70ab5eb275ae36ae41c6ace9b0&units=metric`;
    axios.get(tokyoApiUrl).then(displayResponse);
  }

  function handleManilaWeather(event) {
    event.preventDefault();
    const manilaApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=manila&appid=f0553e70ab5eb275ae36ae41c6ace9b0&units=metric`;
    axios.get(manilaApiUrl).then(displayResponse);
  }

  function handleNewYorkWeather(event) {
    event.preventDefault();
    const newYorkApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=f0553e70ab5eb275ae36ae41c6ace9b0&units=metric`;
    axios.get(newYorkApiUrl).then(displayResponse);
  }
  return (
    <ul className="Features d-flex ">
      <li>
        <a href="/" className="tokyo shadow-sm" onClick={handleTokyoWeather}>
          Tokyo
        </a>
      </li>
      <li>
        <a href="/" className="manila shadow-sm" onClick={handleManilaWeather}>
          Manila
        </a>
      </li>
      <li>
        <a href="/" className="new-york shadow-sm"  onClick={handleNewYorkWeather}>
          New York
        </a>
      </li>
    </ul>
  );
}
