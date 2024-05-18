import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Knight from "./components/Knight";
// import Square from "./components/Square";
import Board from "./components/Board";
import { observe } from "./App/Game";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Board />);
// root.render(
//   <React.StrictMode>
//     <Board knightPosition={[3, 4]} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
