import React, { useEffect, useState } from "react";
import "./RPS.css";
import Rock from "../assets/rock.svg";
import Paper from "../assets/paper.svg";
import Scissors from "../assets/scissors.svg";

export default function RPS() {
  // const [playerChoice, setPlayerChoice] = useState("");
  // const [cpuChoice, setCpuChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  const cpuAnswer = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  };
  const handleChoice = (choice: string) => {
    const cpuChoice = cpuAnswer();
    if (choice === cpuChoice) {
      setResult("Tie!");
    } else if (
      (choice === "rock" && cpuChoice === "paper") ||
      (choice === "paper" && cpuChoice === "scissors") ||
      (choice === "scissors" && cpuChoice === "rock")
    ) {
      setCpuScore((prevScore) => prevScore + 1);
      setResult(`You lost! ${cpuChoice} beats ${choice}`);
    } else {
      setPlayerScore((prevScore) => prevScore + 1);
      setResult(`You win! ${choice} beats ${cpuChoice}`);
    }
  };

  // useEffect(() => {
  //   if (playerChoice) {
  //     cpuAnswer();
  //     round();
  //   }
  // }, [playerChoice]);
  return (
    <div className="container">
      <div className="title">Rock, Paper, Scissors</div>
      <div className="sub-title">Make your choice</div>
      <div className="choices">
        <ul>
          <li className="rock" onClick={() => handleChoice("rock")}>
            <img src={Rock} />
          </li>
          <li className="paper" onClick={() => handleChoice("paper")}>
            <img src={Paper} />
          </li>
          <li className="scissors" onClick={() => handleChoice("scissors")}>
            <img src={Scissors} />
          </li>
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
