import React from "react";
import Square from "./Square";
import "./Board.css";

export default function Board() {
  return (
    <div>
      <Square playerMark="X" />
      <Square playerMark="X" />
      <Square playerMark="O" />
      <Square />
    </div>
  );
}
