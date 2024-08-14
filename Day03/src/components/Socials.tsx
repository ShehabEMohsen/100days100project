import React, { useState } from "react";
import "./Socials.css";

import Share from "../assets/Share.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Close from "../assets/close.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";

export default function Socials() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };
  const handleClose = () => {
    setIsOpened(false);
  };
  return (
    <div className={`container ${isOpened ? "open" : ""}`} onClick={handleOpen}>
      <button className="share-btn">
        <img src={Share} />
      </button>
      <a className="twitter-btn">
        <img src={Twitter} />
      </a>
      <a className="facebook-btn">
        <img src={Facebook} />
      </a>
      <div onClick={handleClose}>
        <a className="close-btn">
          <img src={Close} />
        </a>
      </div>
      <a className="instagram-btn">
        <img src={Instagram} />
      </a>
      <a className="linkedin-btn">
        <img src={LinkedIn} />
      </a>
    </div>
  );
}
