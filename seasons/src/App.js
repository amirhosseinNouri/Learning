import React from "react";
import "./App.css";
// import Accordian from "./components/Accordion";
// import Search from './components/Search'
import Dropdown from "./components/Dropdown";

// import items from './Items'
import options from "./options";

export default function App() {
  const [showDropdown, setShowDropdown] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  return (
    <div className="center">
      {/* <Accordian items={items}></Accordian> */}
      {/* <Search></Search> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle dropdown
      </button>
      {showDropdown ? (
        <Dropdown open={open} setOpen={setOpen} options={options}></Dropdown>
      ) : null}
    </div>
  );
}
