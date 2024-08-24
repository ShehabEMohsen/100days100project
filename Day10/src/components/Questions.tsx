import React from "react";
import "./Questions.css";
import Question from "./Question";

export default function Questions() {
  return (
    <div className="questions-container">
      <h1 className="questions-title">Frequently Asked Questions</h1>
      <Question />
      <Question />
      <Question />
    </div>
  );
}
