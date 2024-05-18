import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../constants";
import { canMoveKnight } from "../../App/Game";

export default function Square({
  black = false,
  children,
  x,
  y,
  setKnightPosition,
  knightPosition,
}: {
  knightPosition: number[];
  black?: boolean;
  children?: React.ReactNode;
  x: number;
  y: number;
  setKnightPosition: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => {
        if (canMoveKnight(knightPosition, { toX: x, toY: y }))
          setKnightPosition([x, y]);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [x, y]
  );
  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: "yellow",
          }}
        />
      )}
    </div>
  );
}
