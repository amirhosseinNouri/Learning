import React, { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState("");
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
