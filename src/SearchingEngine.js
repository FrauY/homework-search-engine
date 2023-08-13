import React from "react";

export default function SearchingEngine() {
  return (
    <form className="SearchingForm">
      <input type="text" placeholder="Enter the city" />
      <button className="search">Search</button>
    </form>
  );
}
