import React, { useState } from "react";
import "./styles/RockPaper.css";

export default function RockPaper() {
  const [playerVal, setPlayerVal] = useState(null);
  const [computerVal, setComputerVal] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [comScore, setComScore] = useState(0);

  const logic = (player, computer) => {
    if (player === computer) return 0;

    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    ) {
      return 1;
    }
    return -1;
  };

  const decision = (playerChoice) => {
    const choices = ["Rock", "Paper", "Scissors"];
    const comChoice = choices[Math.floor(Math.random() * choices.length)];

    const val = logic(playerChoice, comChoice);

    setPlayerVal(playerChoice);
    setComputerVal(comChoice);

    if (val === 1) {
      setPlayerScore(playerScore + 1);
    } else if (val === -1) {
      setComScore(comScore + 1);
    }
  };

  return (
    <div className="head-title">
      <h2 className="title">Welcome to Rock Paper Scissors Game</h2>

      <button onClick={() => decision("Rock")}>
        <i className="fas fa-hand-rock"></i> Rock
      </button>

      <button onClick={() => decision("Paper")}>
        <i className="fas fa-hand-paper"></i> Paper
      </button>

      <button onClick={() => decision("Scissors")}>
        <i className="fas fa-hand-scissors"></i> Scissors
      </button>

      <div className="output">
        <h2>Your choice: {playerVal}</h2>
        <h2>Computer choice: {computerVal}</h2>
        <h2>Your score: {playerScore}</h2>
        <h2>Computer score: {comScore}</h2>
      </div>
    </div>
  );
}
