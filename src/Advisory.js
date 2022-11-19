import React from "react";

export default function Advisory(){
    return (
      <div className="Advisory">
        <div class="row one">
          <div class="col shadow advisory precipitation">
            <h5>
              Precipitation
              <div>60%</div>
            </h5>
          </div>
          <div class="col shadow advisory humidity">
            <h5>
              Humidity
              <div>
                <span id="humidity"></span> %
              </div>
            </h5>
          </div>
          <div class="col shadow advisory wind">
            <h5>
              Wind
              <div>
                <span id="wind"></span> m/s
              </div>
            </h5>
          </div>
        </div>
      </div>
    );
}