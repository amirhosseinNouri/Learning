import React, { useState } from "react";
import DropDown from "./Dropdown";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

export default function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div className="translate">
      <div className="search__control">
        <label htmlFor="text">Enter some text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <DropDown
        options={options}
        open={language}
        setOpen={setLanguage}
      ></DropDown>
    </div>
  );
}
