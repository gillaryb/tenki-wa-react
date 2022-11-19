import React from "react";
import "./MenuBar.css";

export default function MenuBar() {
  return (
    <div className="Menubar pt-4">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Search for your city"
              size="40"
              autofocus="on"
              className="search-field shadow-sm"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary search-input "
            />
            <input
              type="submit"
              value="Current Location"
              className="btn btn-outline-primary search-button"
            />
        </div>
        </div>
      </form>
    </div>
  );
}
