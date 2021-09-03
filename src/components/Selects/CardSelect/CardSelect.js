import React from "react";
import { FiChevronDown } from "react-icons/fi";

function CardSelect(props) {
  const { className, title, selectItems } = props;
  return (
    <div className={className}>
      <p className="title">{title}</p>
      <div className="icon">
        <FiChevronDown />
      </div>

      {/* <div className="dropdown">
        {selectItems.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div> */}
    </div>
  );
}

export default CardSelect;
