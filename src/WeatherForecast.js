import React from 'react'

export default function WeatherForecast(){
    return (
      <div className="WeatherForecast">
        <h4>Weather Forecast</h4>
        <div className="row week">
          <div className="col shadow-sm day">
            <h5>Monday</h5>
            <div className="date">Sept 6</div>
            <img
              src="icons/drizzle.svg"
              alt="drizzle"
              class="weather-icon"
              width="110px"
            />
            <div className="temp-monday">28˚/ 22˚</div>
            <div className="weather-mon">Rain</div>
          </div>
        </div>
        <div clasName="col shadow-sm day">
          <h5>Tuesday</h5>
          <div className="date">Sept 7</div>
          <img
            src="icons/rain.svg"
            alt="rain"
            className="weather-icon"
            width="110px"
          />
          <div className="temp-tuesday">28˚/ 22˚</div>
          <div className="weather-tue">Rain</div>
        </div>
        <div className="col shadow-sm day">
          <h5>Wednesday</h5>
          <div className="date">Sept 8</div>
          <img
            src="icons/rain.svg"
            alt="rain"
            className="weather-icon"
            width="110px"
          />
          <div className="temp-wednesday">30˚/ 24˚</div>
          <div className="weather-wed">Rain</div>
        </div>
        <div className="col shadow-sm day">
          <h5>Thursday</h5>
          <div className="date">Sept 9</div>
          <img
            src="icons/drizzle.svg"
            alt="drizzle"
            className="weather-icon"
            width="110px"
          />
          <div className="temp-thursday">28˚/ 23˚</div>
          <div className="weather-thurs">Rain</div>
        </div>
        <div className="col shadow-sm day">
          <h5>Friday</h5>
          <div className="date">Sept 10</div>
          <img
            src="icons/drizzle.svg"
            alt="drizzle"
            className="weather-icon"
            width="110px"
          />
          <div className="temp-friday">28˚/ 22˚</div>
          <div className="weather-fri">Rain</div>
        </div>
      </div>
    );
}