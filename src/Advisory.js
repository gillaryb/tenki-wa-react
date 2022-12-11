import React from "react";
import "./Advisory.css";

export default function Advisory(props) {
  return (
    <ul className="Advisory row">
      <li className="col-2 shadow cloudiness">
        <h5>
          Cloudiness
          <div>
            <span className="value">{props.data.cloud}%</span>
          </div>
        </h5>
      </li>
      <li className=" col-2 shadow humidity">
        <h5>
          Humidity
          <div>
            <span className="value">{props.data.humidity}%</span> 
          </div>
        </h5>
      </li>
      <li className=" col-2 shadow wind">
        <h5>
          Wind
          <div>
            <span className="value">{props.data.wind}m/s</span> 
          </div>
        </h5>
      </li>
    </ul>
  );
}
