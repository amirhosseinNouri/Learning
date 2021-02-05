import React from "react";
import { GoChevronDown } from "react-icons/go";

export default function Dropdown({ options, open, setOpen }) {
  const [selected, setSelected] = React.useState({ label: "Select a color" });
  const ref = React.useRef();

  React.useEffect(() => {
    console.log("use effect");
    const onBodyClick = (e) => {
      document.body.removeEventListener("click", onBodyClick);
      return;
      if (!ref.current) {
      }
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
  }, []);
  const itemsClassName = open ? "options__item show" : "options__item";

  const toggleDropDown = () => {
    setOpen(!open);
  };
  return (
    <>
      <h3>Select a color</h3>

      <div className="options" ref={ref}>
        <div className="selected" onClick={toggleDropDown}>
          <span>{selected.label}</span>
          <GoChevronDown></GoChevronDown>
        </div>
        {options.map((item, index) => {
          if (item.label !== selected)
            return (
              <div
                key={index}
                className={itemsClassName}
                onClick={() => {
                  setSelected(item);
                  setOpen(!open);
                }}
              >
                {item.label}
              </div>
            );
        })}
      </div>
      <h3
        className="selected__result"
        style={{ backgroundColor: `${selected.value}` }}
      >
        Selected Color : {selected.label}
      </h3>
    </>
  );
}
