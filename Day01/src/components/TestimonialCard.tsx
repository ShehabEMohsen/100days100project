import React from "react";
import "./TestimonialCard.css";
import Person from "../assets/person.png";

export default function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="rating-area">96</div>
      <div className="testimonial-text">
        Lorem ipsum dolor sit amet consectetur. Purus potenti feugiat aliquam
        sollicitudin tellus fermentum. Amet laoreet eget enim donec tempor vel
        varius quisque ac.
      </div>
      <div className="user-area">
        <div className="image-area">
          <img src={Person} className="pfp" />
        </div>
        <div className="user-name">John Doe</div>
      </div>
    </div>
  );
}
