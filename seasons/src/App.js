import React from "react";
import "./App.css";
import Translate from './components/Translate'
// import Accordian from "./components/Accordion";
// import Search from './components/Search'
// import Dropdown from "./components/Dropdown";

// import items from './Items'
import options from "./options";

export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="center">
      <Translate></Translate>
    </div>
  );
}
