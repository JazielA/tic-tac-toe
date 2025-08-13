import React from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  let [count, setCount] = React.useState(0);
  let [lock, setLock] = React.useState(false);
  const toggle = (e, num) => {
    // lock: si está activado, no hace nada.
    if (lock) {
      return 0;
    }

    /*
    -count % 2 === 0: si es turno par, dibuja círculo; si es impar, cruz.
    -e.target.innerHTML: cambia el contenido de la casilla (directamente en el DOM).
    -data[num]: guarda si la casilla es "x" o "o".
    -setCount(++count): aumenta el contador.
    * */
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${circle_icon} alt="circle" />`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src=${cross_icon} alt="cross" />`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data);
    }
  };
  const won = (winner) => {
    setLock(true);
  };
  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>

      {/* Estructura del tablero */}
      {/* 
      -Se crean tres filas (row1, row2, row3).
      -Cada fila tiene tres divs (boxes) que representan las casillas.
      -e: el evento del clic.
      -num: la posición en el array data (0 a 8).
      */}
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
};
