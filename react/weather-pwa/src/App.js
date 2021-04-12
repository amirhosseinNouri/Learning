import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import "./App.css";


export default function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="container">
      <SearchBar setLoading={setLoading} setWeather={setWeather}></SearchBar>
        <div className="loading content">
        <h1 className="loading__title">Loading...</h1>
       
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <SearchBar setLoading={setLoading} setWeather={setWeather}></SearchBar>
      {weather.main && <ResultCard weather={weather}></ResultCard>}
    </div>
  );
}
