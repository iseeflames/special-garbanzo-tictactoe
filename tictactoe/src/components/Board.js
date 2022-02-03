import React, { useEffect } from "react";
import Square from "./Square";
import "./Board.css";
import { calculateWinner } from "../helpers/calculateWinner";

export default function Board({
  playerMovePositions,
  currentPlayer,
  setCurrentPlayer,
  setPlayerMovePosition,
  isOver,
  setGameOver,
}) {
  useEffect(() => {
    const result = checkWinner();
    if (result) {
      alert(`${result} has won the game!`);
      stopGame();
    }
    handleGameDraw(result, playerMovePositions);
  }, [playerMovePositions]);
  function handleClick(index) {
    //use a copy of the state to not mutate the state directly.
    if (!isOver) {
      const playerMoves = [...playerMovePositions];

      if (currentPlayer === "X") {
        playerMoves[index] = "X";
        setCurrentPlayer("O");
      } else {
        playerMoves[index] = "O";
        setCurrentPlayer("X");
      }

      setPlayerMovePosition(playerMoves);
    } else {
      alert("The game is over. Restart it to play again.");
    }
  }

  function checkWinner() {
    let winner = calculateWinner(playerMovePositions);
    if (winner === "X") {
      return winner;
    } else if (winner === "O") {
      return winner;
    }
    return winner;
  }

  function stopGame() {
    setGameOver(true);
  }

  function handleGameDraw(result, playerMovePositions) {
    let counter = 0;
    playerMovePositions.forEach((playerMark) => {
      if (playerMark === "X" || playerMark === "O") {
        counter++;
      }
    });

    if (result == null && counter === playerMovePositions.length) {
      stopGame();
      alert(
        `Match drawn. “For every action, there was an equal and opposite reaction.”`
      );
    }
  }

  return (
    <div>
      <h2>Player {currentPlayer} its your turn.</h2>
      <div className="board">
        {playerMovePositions.map((square, index) => {
          return (
            <Square
              value={index}
              key={index}
              action={handleClick}
              currentPlayer={currentPlayer}
              playerMovePositions={playerMovePositions}
            />
          );
        })}
      </div>
    </div>
  );
}
