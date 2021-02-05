import React from "react";
import "./App.css";
// import Accordian from "./components/Accordion";
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

// import items from './Items'
import options from './options'


export default function App() {
  return (
    <div className="center">
      {/* <Accordian items={items}></Accordian> */}
      {/* <Search></Search> */}
      <Dropdown options={options}></Dropdown>
    </div>
  );
}
