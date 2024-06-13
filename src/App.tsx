import React from "react";
import "./App.css";
import Board from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DNDList from "./components/DNDList";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DNDList />
      <Board />
    </DndProvider>
  );
}

export default App;
