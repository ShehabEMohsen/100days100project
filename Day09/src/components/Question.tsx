import React, { useState } from "react";
import "./Question.css";

export default function Question() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${isExpanded ? "expanded-container" : "question-container"}`}
    >
      <div className="question">
        <div className="question-icon">?</div>
        <div className="question-title">Question A</div>
        <div className="expand-button">
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            +
          </button>
        </div>
      </div>
      {isExpanded && (
        <div>
          <div className="answer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aliquid magnam, blanditiis ullam assumenda doloribus eveniet
            reiciendis in necessitatibus laboriosam! Quibusdam rerum, ullam
            assumenda eius officia a nam quae repellat?
          </div>
        </div>
      )}
    </div>
  );
}
