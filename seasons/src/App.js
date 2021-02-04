import React from "react";
import "./App.css";
import Accordian from "./components/Accordion";

import items from './Items'


export default function App() {
  return (
    <div className="center">
      <Accordian items={items}></Accordian>
    </div>
  );
}
