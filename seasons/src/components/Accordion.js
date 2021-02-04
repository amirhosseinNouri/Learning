import React , {useState} from "react";
import { GoChevronDown } from "react-icons/go";

export default function Accordion({ items }) {
    const [activeIndex , setActiveIndex] = useState(-1)
  const handleClick = (id) => {
    setActiveIndex(id)
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
          className={activeIndex === item.id ? "item item-show" : "item"}
            key={item.id}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <div className="title">
              <GoChevronDown></GoChevronDown>
              <h4>{item.title}</h4>
            </div>
            <div className={activeIndex === item.id ? "content content-show" : "content"}>{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
