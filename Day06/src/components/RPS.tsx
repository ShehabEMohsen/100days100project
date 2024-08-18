import React, { useEffect, useState } from "react";
import "./RPS.css";

export default function RPS() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [cpuChoice, setCpuChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  const cpuAnswer = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    setCpuChoice(choices[randomChoice]);
  };
  const round = () => {
    if (playerChoice === cpuChoice) {
      setResult("Tie!");
    } else if (
      (playerChoice === "rock" && cpuChoice === "paper") ||
      (playerChoice === "paper" && cpuChoice === "scissors") ||
      (playerChoice === "scissors" && cpuChoice === "rock")
    ) {
      setCpuScore((prevScore) => prevScore + 1);
      setResult(`You lost! ${cpuChoice} beats ${playerChoice}`);
    } else {
      setPlayerScore((prevScore) => prevScore + 1);
      console.log(playerScore);
      setResult(`You win! ${playerChoice} beats ${cpuChoice}`);
    }
  };

  useEffect(() => {
    if (playerChoice) {
      cpuAnswer();
      round();
    }
  }, [playerChoice]);
  return (
    <div className="container">
      <div className="title">Rock, Paper, Scissors</div>
      <div className="sub-title">Make your choice</div>
      <div className="choices">
        <ul>
          <li onClick={() => setPlayerChoice("rock")}>Rock</li>
          <li onClick={() => setPlayerChoice("paper")}>Paper</li>
          <li onClick={() => setPlayerChoice("scissors")}>Scissors</li>
        </ul>
      </div>
      <div className="result">{result}</div>
      <div className="scores">
        <div className="player-score">Player Score: {playerScore}</div>
        <div className="cpu-score">Computer Score: {cpuScore}</div>
      </div>
    </div>
  );
}
