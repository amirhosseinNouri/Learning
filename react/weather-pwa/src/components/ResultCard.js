import React from "react";

export default function ResultCard({ weather }) {
  return (
    <div className="result content">
      <div className="result__title">
        <h2 className="result__city">{weather.name}</h2>
        <span className="result__country">{weather.sys.country}</span>
      </div>

      <h1 className="result__temperature">
        {Math.round(weather.main.temp)}&deg;<span className="result__centi">C</span>
      </h1>
      <img
        className="result__icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p className="result__status">{weather.weather[0].description}</p>
    </div>
  );
}
