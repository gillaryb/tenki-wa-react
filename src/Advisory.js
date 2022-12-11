import React from "react";
import "./Advisory.css";

export default function Advisory() {
  return (
    <ul className="Advisory row">
      <li className="col-2 shadow precipitation">
        <h5>
          Precipitation
          <div>
            <span className="temperature">%</span>
          </div>
        </h5>
      </li>
      <li className=" col-2 shadow humidity">
        <h5>
          Humidity
          <div>
            <span className="temperature">%</span> 
          </div>
        </h5>
      </li>
      <li className=" col-2 shadow wind">
        <h5>
          Wind
          <div>
            <span className="temperature">m/s</span> 
          </div>
        </h5>
      </li>
    </ul>
  );
}
