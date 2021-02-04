import React from "react";
import { FaSnowflake, FaSun } from "react-icons/fa";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default function SeasonDisplay({ lat }) {
  const season = getSeason(lat, new Date().getMonth());
  return (
    <div className="center">
      <div className={season === 'winter' ? "icon icon--top snow" : "icon icon--top sun"}>
        {season === "winter" ? <FaSnowflake></FaSnowflake> : <FaSun></FaSun>}
      </div>
      <h1>
        {season === "winter" ? "Burr, it is chilly" : "Lets hit the beach"}
      </h1>
      <div className={season === 'winter' ? "icon icon--bottom snow" : "icon icon--bottom sun"}>
        {season === "winter" ? <FaSnowflake></FaSnowflake> : <FaSun></FaSun>}
      </div>
    </div>
  );
}
