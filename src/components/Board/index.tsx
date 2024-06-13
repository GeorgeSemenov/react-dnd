import { useState } from "react";
import Knight from "../Knight";
import Square from "../Square";

export default function Board() {
  const [knightPosition, setKnightPosition] = useState([0, 0]);
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, setKnightPosition));
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        fontSize: "50px",
      }}
    >
      {squares}
    </div>
  );
}

function renderSquare(
  i: number,
  knightPosition: number[],
  setKnightPosition: React.Dispatch<React.SetStateAction<number[]>>
) {
  const [knightX, knightY] = knightPosition;
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div
      key={i}
      style={{ width: "12.5%", height: "12.5%" }}
      // onClick={() => {
      //   if (canMoveKnight(knightPosition, { toX: x, toY: y }))
      //     setKnightPosition([x, y]);
      // }}
    >
      <Square
        black={black}
        x={x}
        y={y}
        knightPosition={knightPosition}
        setKnightPosition={setKnightPosition}
      >
        {piece}
      </Square>
    </div>
  );
}
