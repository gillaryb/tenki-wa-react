import React from "react";

export default function MenuBar() {
  return (
    <div className="Menubar">
      <form>
        <input
          type="text"
          placeholder="Search for your city"
          size="40"
          autofocus="on"
        />
        <button class="btn btn-outline-primary shadow-sm search-button">
          Current Location
        </button>
      </form>
    </div>
  );
}
