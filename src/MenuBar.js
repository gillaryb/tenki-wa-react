import React from "react";

export default function MenuBar() {
  return (
    <div className="Menubar pt-3">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Search for your city"
              size="40"
              autofocus="on"
            />
            <input type="submit" value="search" className="btn btn-primary " />
            <input
              type="submit"
              value="Current Location"
              className="btn btn-outline-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
