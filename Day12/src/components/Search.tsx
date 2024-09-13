import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "../assets/Search.svg";
import Voice from "../assets/Voice.svg";

function Search() {
  const [active, setActive] = useState(true);
  return (
    <div className={`search-bar ${active ? "active" : ""}`}>
      <img
        src={SearchIcon}
        className="search-icon"
        onClick={() => {
          setActive(!active);
        }}
      />
      <input type="text" placeholder="Search.." />
      <img src={Voice} className="mic-icon" />
    </div>
  );
}

export default Search;
