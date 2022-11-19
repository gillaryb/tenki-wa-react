import React from "react";
import "./Advisory.css";

export default function Advisory() {
  return (
    <ul className="Advisory row">
      <li className="col-2 shadow precipitation">
        <h5>
          Precipitation
          <div>60%</div>
        </h5>
      </li>
      <li className=" col-2 shadow humidity">
        <h5>
          Humidity
          <div>
            <span></span> %
          </div>
        </h5>
      </li>
      <li className=" col-2 shadow wind">
        <h5>
          Wind
          <div>
            <span></span> m/s
          </div>
        </h5>
      </li>
    </ul>
  );
}
