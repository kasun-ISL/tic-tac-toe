import { useState, useEffect, useRef } from "react";
import "./style.css";

import cross from "./images/cross.png";
import circle from "./images/circle.png";

export default function App() {
  const [board, setBoard] = useState([
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N"
  ]);

  const [user, setUser] = useState("X");
  const isMounted = useRef(false);

  const [result, setResult] = useState("No winner");

  useEffect(() => {
    if (isMounted.current) {
      if (user === "X") {
        setUser("O");
      } else {
        setUser("X");
      }
    } else {
      isMounted.current = true;
    }
  }, [board]);

  useEffect(() => {
    let valuesX = board.filter((stu) => stu.username === "X");
    let valuesY = board.filter((stu) => stu.username === "O");
    let positionsX = [];
    let positionsO = [];

    valuesX.map((square) => {
      positionsX.push(square.id);
      return positionsX;
    });
    valuesY.map((square) => {
      positionsO.push(square.id);
      return positionsO;
    });

    FindWinner(positionsX);
    FindWinner(positionsO);
  }, board);

  function FindWinner(selectedValues) {
    Patterns.forEach((positions) => {
      let isSubArr = positions.every((e) => selectedValues.includes(e));

      if (isSubArr) {
        const winner = `Winner is => (${user})`;
        setResult(winner);
        console.log("Oh  Yes");
      }
    });
  }

  const Patterns = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
  ];

  const handleClick = (e) => {
    e.preventDefault();

    // 1. Make a shallow copy of the array
    let temp_state = [...board];

    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[e.target.id] };

    // 3. Update the property you're interested in
    temp_element.counter = temp_element.counter + 1;

    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first

    temp_state[e.target.id] = { id: e.currentTarget.id, username: user };

    // 5. Set the state to our new copy
    setBoard(temp_state);
  };

  return (
    <div className="App">
      <div style={{ paddingTop: 20 }}>
        <h1 class="display-4">{result}</h1>
      </div>
      <div className="conatiner " style={{ paddingTop: 20, paddingLeft: 50 }}>
        <div class="container">
          <div class="row">
            <div
              id="0"
              class="box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[0] !== "N"
                    ? board[0].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
            <div
              id="1"
              class="box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[1] !== "N"
                    ? board[1].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
            <div
              id="2"
              class=" box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[2] !== "N"
                    ? board[2].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
          </div>
          <div class="row">
            <div
              id="3"
              class="  box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[3] !== "N"
                    ? board[3].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
            <div
              id="4"
              class="  box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[4] !== "N"
                    ? board[4].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
            <div
              id="5"
              class=" box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[5] !== "N"
                    ? board[5].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
          </div>
          <div class="row">
            <div
              id="6"
              class="box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[6] !== "N"
                    ? board[6].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
            <div
              id="7"
              class="box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[7] !== "N"
                    ? board[7].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
            <div
              id="8"
              class="box border border-primary "
              onClick={handleClick}
              style={{
                backgroundImage: `url(${
                  board[8] !== "N"
                    ? board[8].username === "X"
                      ? cross
                      : circle
                    : "YELLOW"
                }   )  `,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
