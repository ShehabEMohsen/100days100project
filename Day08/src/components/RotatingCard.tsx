import React from "react";
import PFP from "../assets/person.png";
import "./RotatingCard.css";

export default function RotatingCard() {
  return (
    <div className="card">
      <div className="card-inner-content">
        <div className="card-front">
          <img src={PFP} />
        </div>
        <div className="card-back">
          <div className="name">John Doe</div>
          <div className="title">Chief Executive</div>
          <div className="description">
            This is a test bio of the made up user John Doe and everything he
            has done
          </div>
        </div>
      </div>
    </div>
  );
}
