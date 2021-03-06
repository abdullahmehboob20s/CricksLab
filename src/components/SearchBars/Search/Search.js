import React from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";

function Search(props) {
  return (
    <div style={props.style} className="navbar_input">
      <input placeholder="Search" type="text" name="" id="" />
      <span className="navbar_input_icon">
        <FiSearch color="#6E7077" />
      </span>
    </div>
  );
}

export default Search;
