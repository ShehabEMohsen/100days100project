import React, { useEffect, useState } from "react";
import "./Dropdown.css";

export default function Dropdown() {
  const [rolledDown, setRolledDown] = useState(true);

  const handleReload = () => {
    setRolledDown(false);
    setTimeout(() => {
      setRolledDown(true);
    }, 1);
  };

  useEffect(() => {
    const listItems = document.querySelectorAll("#myList li");
    listItems.forEach((item, index) => {
      const delay = `${index / 4}s`;
      (item as HTMLElement).style.animationDelay = delay;
    });
  }, [rolledDown]);
  return (
    <div>
      <ul className={rolledDown ? "list" : ""} id="myList">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
        <li>Option 5</li>
        <li>Option 6</li>
        <li>Option 7</li>
        <li>Option 8</li>
      </ul>
      <button onClick={handleReload}>Reload it</button>
    </div>
  );
}
