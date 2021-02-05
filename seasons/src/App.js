import React from "react";
import "./App.css";
import Accordian from "./components/Accordion";
import Search from './components/Search'

import items from './Items'


export default function App() {
  return (
    <div className="center">
      {/* <Accordian items={items}></Accordian> */}
      <Search></Search>
    </div>
  );
}
