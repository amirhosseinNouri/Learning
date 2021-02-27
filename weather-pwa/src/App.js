import React, { useState } from "react";
import fetchWeather from "./api/fetchWeather";

export default function App() {
  const [query, setQuery] = useState("");

  const handleSearchClick = async (e) => {
    e.preventDefault();
    console.log("enter");
    const data = await fetchWeather(query);
    console.log(data);
  };
  return (
    <div className="main-container">
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearchClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
