import React from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  let [count, setCount] = React.useState(0);
  let [lock, setLock] = React.useState(false);
  let titleRef = React.useRef(null);

  // Referencias para las casillas
  let box1Ref = React.useRef(null);
  let box2Ref = React.useRef(null);
  let box3Ref = React.useRef(null);
  let box4Ref = React.useRef(null);
  let box5Ref = React.useRef(null);
  let box6Ref = React.useRef(null);
  let box7Ref = React.useRef(null);
  let box8Ref = React.useRef(null);
  let box9Ref = React.useRef(null);

  // Array de referencias
  let box_array = [
    box1Ref,
    box2Ref,
    box3Ref,
    box4Ref,
    box5Ref,
    box6Ref,
    box7Ref,
    box8Ref,
    box9Ref,
  ];

  const toggle = (e, num) => {
    // lock: si está activado, no hace nada.
    if (lock) {
      return 0;
    }
    // Si la casilla ya tiene contenido, no hace nada.
    if (data[num] !== "") {
      return; // Ya tiene un elemento, no hacer nada
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
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Player <img src=${circle_icon} alt="circle" /> Won!`;
    } else {
      titleRef.current.innerHTML = `Player  <img src=${cross_icon} alt="cross" />  Won!`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe Game In  <span> React</span>";
    box_array.map((el) => {
      el.current.innerHTML = "";
    });
  };
  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
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
            ref={box1Ref}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={box2Ref}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={box3Ref}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={box4Ref}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={box5Ref}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={box6Ref}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={box7Ref}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={box8Ref}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={box9Ref}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};
