import FormattedDate from "./FormattedDate";
import "./MainWeather.css";

export default function MainWeather(props) {
    return (
      <div className=" MainWeather shadow rounded">
        <div className="date-today"> <FormattedDate date={props.data.date} />
        </div>
        <h1 className="city-name">{props.data.city}</h1>
        <img src={props.data.icon} alt={props.data.description} width="135px" />
        <div className="weather-temperature p-2">
          <strong>{Math.round(props.data.temperature)}</strong>
          <span className="celFarh">
            <a href="null" className="celcius">
              ˚C{" "}
            </a>{" "}
            |
            <a href="null" className="farh">
              ˚F
            </a>
          </span>
        </div>
        <ul className="weather">
          <li className="today">{props.data.description}</li>
          <li className="max-min">
            <strong>Max:</strong>
            <span className="temp-today"> {Math.round(props.data.max)}˚</span> {" "}
            <strong>Min:</strong>
            <span> {Math.round(props.data.min)}˚</span>
          </li>
        </ul>
      </div>
    );
}
