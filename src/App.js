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
        <MenuBar />
        <Features />
        <MainWeather />
        <WeatherForecast />
        <Advisory />
      </div>
    </div>
  );
}
