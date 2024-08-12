import React from "react";
import "./TestimonialCard.css";
import Person from "../assets/person.png";

export default function TestimonialCard(props: any) {
  return (
    <div className="testimonial-card">
      <div className="rating-area">{props.rating}</div>
      <div className="testimonial-text">{props.testimonial}</div>
      <div className="user-area">
        <div className="image-area">
          <img src={props.image} className="pfp" />
        </div>
        <div className="user-name">{props.userName}</div>
      </div>
    </div>
  );
}
