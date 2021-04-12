import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) search();
  }, [debouncedTerm]);

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

      {results.map((item) => {
        return (
          <div className="result" key={item.pageid}>
            <div className="result__title">
              {item.title}
              <a
                className="go-link"
                href={`https://en.wikipedia.org?curid=${item.pageid}`}
              >
                Go
              </a>
            </div>
            <div
              className="result__snippet"
              dangerouslySetInnerHTML={{ __html: item.snippet }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
