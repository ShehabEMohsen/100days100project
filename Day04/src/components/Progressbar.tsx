import { useState } from "react";
import "./Progressbar.css";

export default function Progressbar() {
  const [progress, setProgress] = useState(1);

  const handleProgressClickNext = () => {
    if (progress < 5) {
      setProgress(progress + 1);
    }
    console.log(progress);
  };
  const handleProgressClickPrev = () => {
    if (progress > 1) {
      setProgress(progress - 1);
    }
    console.log(progress);
  };
  return (
    <div className="container">
      <div className="progress-container">
        <hr className="progress-bar-back" />
        <hr
          className="progress-bar-front"
          style={{ width: ((progress - 1) / 4) * 100 + "%" }}
        />
        <div className="step checked">
          <small>Start</small>
        </div>
        <div className={`step ${progress > 1 ? "checked" : ""}`}></div>
        <div className={`step ${progress > 2 ? "checked" : ""}`}></div>
        <div className={`step ${progress > 3 ? "checked" : ""}`}></div>
        <div className={`step ${progress > 4 ? "checked" : ""}`}></div>
      </div>
      <div
        style={{
          justifyContent: "space-around",
          width: "150px",
          display: "flex",
        }}
      >
        <button
          onClick={handleProgressClickPrev}
          className="nav-btn"
          disabled={progress == 1}
        >
          -
        </button>
        <button
          onClick={handleProgressClickNext}
          className="nav-btn"
          disabled={progress == 5}
        >
          +
        </button>
      </div>
    </div>
  );
}
