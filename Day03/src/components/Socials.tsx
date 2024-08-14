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
    setIsOpened(!isOpened);
  };
  const handleClose = () => {
    setIsOpened(false);
  };
  return (
    <div className={`container ${isOpened ? "open" : ""}`} onClick={handleOpen}>
      <button className="share-btn">
        <img src={Share} />
      </button>
      <div className="twitter-div">
        <a>
          <img src={Twitter} />
        </a>
      </div>
      <div className="facebook-btn">
        <a>
          <img src={Facebook} />
        </a>
      </div>
      <div className="close-btn" onClick={isOpened ? handleClose : () => {}}>
        <a>
          <img src={Close} />
        </a>
      </div>
      <div className="instagram-btn">
        <a>
          <img src={Instagram} />
        </a>
      </div>
      <div className="linkedin-btn">
        <a>
          <img src={LinkedIn} />
        </a>
      </div>
    </div>
  );
}
