import { useState } from "react";
import "./Progressbar.css";

export default function Progressbar() {
  const [progress, setProgress] = useState("1");
  return (
    <div className="progress-container">
      <hr className="progress-bar-back" />
      <hr className="progress-bar-front" />
      <div className="step checked">
        <small>Start</small>
      </div>
      <div className="step"></div>
      <div className="step"></div>
      <div className="step"></div>
      <div className="step"></div>
      <button className="nav-btn"></button>
      <button className="nav-btn"></button>
    </div>
  );
}
