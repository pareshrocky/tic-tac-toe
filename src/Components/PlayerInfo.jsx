import React from "react";
export default function PlayerInfo(props) {
  return (
    <div>
      <p
        className="playerTurn"
        style={{ display: (props.winner !== "" || props.tie) && "none" }}
      >
        {props.pInfo} will Start the game
      </p>
      {props.winner !== "" || props.tie ? (
        <p className="result">
          <strong>
            {props.tie
              ? "Oops, It's a Tie. Click the Restart button to play again. "
              : "Congratulation!! " + props.winner + ", you won the Game."}
          </strong>
        </p>
      ) : (
        <p className="Turn">
          <strong>
            Current Turn:{props.turn === "Cross" ? "Player 1" : "Player 2"}
          </strong>
        </p>
      )}
    </div>
  );
}
