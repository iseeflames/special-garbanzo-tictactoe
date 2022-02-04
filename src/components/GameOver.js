import React from "react";
import gameOver from "../images/gameOver.gif";
import "./GameOver.css";

export default function GameOver() {
  return (
    <div className="gameOver-container">
      <img src={gameOver} alt="game-over-img"></img>
    </div>
  );
}
