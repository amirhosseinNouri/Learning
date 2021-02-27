import React, { useState } from "react";
import fetchWeather from "../api/fetchWeather";

export default function SearchBar({ setWeather }) {
  const [query, setQuery] = useState("");

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (!query) return;
    const data = await fetchWeather(query);
    setWeather(data);
    setQuery("");
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
