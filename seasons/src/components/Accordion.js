import React from "react";
import { GoChevronDown } from "react-icons/go";

export default function Accordion({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="title">
              <GoChevronDown></GoChevronDown>
              <h4>{item.title}</h4>
            </div>
            <div className="content">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
