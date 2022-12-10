import "./App.css";
import MainWeather from "./MainWeather";
import Advisory from "./Advisory";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app p-4 m-3 shadow">
          <MainWeather defaultCity="Tokyo" />
          <Advisory />
        </div>
      </div>
    </div>
  );
}
