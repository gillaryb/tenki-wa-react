import "./App.css";
import MenuBar from "./MenuBar";
import Features from "./Features";
import MainWeather from "./MainWeather";
import WeatherForecast from "./WeatherForecast";
import Advisory from "./Advisory";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app p-4 m-3 shadow">
          <MenuBar />
          <Features />
          <MainWeather defaultCity="Tokyo"/>
          <WeatherForecast />
          <Advisory />
        </div>
      </div>
    </div>
  );
}
