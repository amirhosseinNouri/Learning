import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("car");
  const [results , setResults] = useState([])

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search)
      console.log(results);
    };
    if(term){
        search();

    }
  }, [term]);
  return (
    <div className="search">
      <div className="search__control">
        <label htmlFor="term">Enter Search Term</label>
        <input
          type="text"
          name="term"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
