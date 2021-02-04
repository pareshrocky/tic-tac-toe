import React, { useState } from "react";
export default function ScoreCard(props) {
  const [viewScore, setViewScore] = useState(false);
  const [p1, setp1] = useState(0);
  const [p2, setp2] = useState(0);
  function handleClick() {
    setViewScore((prevValue) => !prevValue);
    if (props.winnerPlayer !== "") {
      props.winnerPlayer === "PLAYER 1" ? setp1(p1 + 1) : setp2(p2 + 1);
    }
  }
  return (
    <div className="score">
      {viewScore ? (
        <div className="scoreContainer">
          <button
            className="crossBtn"
            onClick={() => setViewScore((prevValue) => !prevValue)}
          ></button>
          <div className="pScore">
            P1 Score {">>"} {p1}
          </div>
          <div className="pScore">
            P2 Score {">>"} {p2}
          </div>
          <button
            className="resetBtn"
            onClick={() => {
              props.setData(new Array(9).fill());
              props.setTieMatch((prevValue) => prevValue && !prevValue);
              props.setWinner({ winPlayer: "", indexes: [] });
            }}
          >
            RESTART
          </button>
          <p className="warning">Please close this tab before start playing</p>
        </div>
      ) : (
        <button className="viewScoreBtn" onClick={handleClick}>
          View Scores
        </button>
      )}
    </div>
  );
}
