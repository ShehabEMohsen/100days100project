import React from "react";

import "./Skillbar.css";

export default function Skillbar() {
  return (
    <div className="skill-bar">
      <div className="bar">
        <div className="percent">
          <span>HTML</span>
        </div>
        <div className="progress-line html">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="percent">
          <span>CSS</span>
        </div>
        <div className="progress-line css">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="percent">
          <span>Javascript</span>
        </div>
        <div className="progress-line js">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="percent">
          <span>React</span>
        </div>
        <div className="progress-line react">
          <span></span>
        </div>
      </div>
      <div className="bar">
        <div className="percent">
          <span>Vue</span>
        </div>
        <div className="progress-line vue">
          <span></span>
        </div>
      </div>
    </div>
  );
}
