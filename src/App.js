import React, { useState } from "react";
import "./styles.css";
import Squareboard from "./Components/Squareboard";
export default function App() {
  const [displaySelection, setDisplaySelection] = useState(false);
  const [p, setP] = useState(" ");
  function handleClick(event) {
    const name = event.target.name;
    setDisplaySelection((prev) => !prev);
    setP(name);
  }
  return (
    <div className="App">
      <h1 className="welcome" style={{ marginTop: displaySelection ? "7%" : "13%" }}>
        !! Welcome to TiC TaC ToE !!
      </h1>
      {displaySelection ? (
        <Squareboard player={p} />
      ) : (
        <div className="front-div">
          <h4 className="small-heading">Choose PLAYER 1 or PLAYER 2</h4>
          <button className="player-btn" name="PLAYER1" onClick={handleClick}>
            PLAYER 1
          </button>
          <button className="player-btn" name="PLAYER2" onClick={handleClick}>
            PLAYER 2
          </button>
        </div>
      )}
    </div>
  );
}
