import "./App.css";
import MainWeather from "./MainWeather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app p-4 m-3 shadow">
          <MainWeather defaultCity="Tokyo" />
        </div>
      </div>
    </div>
  );
}
