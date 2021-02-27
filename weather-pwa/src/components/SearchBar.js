import React, { useState } from "react";
import fetchWeather from "../api/fetchWeather";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (!query) return;
    const data = await fetchWeather(query);
    console.log(data);
  };

  return (
    <form onSubmit={handleSearchClick}>
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
