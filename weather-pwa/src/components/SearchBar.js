import React, { useState } from "react";
import fetchWeather from "../api/fetchWeather";

export default function SearchBar({ setWeather  , setLoading}) {
  const [query, setQuery] = useState("");

  const handleSearchClick = async (e) => {
    setLoading(true)
    e.preventDefault();
    if (!query) return;
    const data = await fetchWeather(query);
    console.log(data);
    setWeather(data);
    setQuery("");
    setLoading(false)
  };

  return (
    <form onSubmit={handleSearchClick}>
      <input
        className="searchbar__input content"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
