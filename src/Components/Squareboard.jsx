import React, { useState } from "react";
import Cross from "./Cross";
import Circle from "./Circle";
import PlayerInfo from "./PlayerInfo";
import ScoreCard from "./ScoreCard";
import "../styles.css";
export default function SquareBoard(props) {
  const [data, setData] = useState(new Array(9).fill());
  const [turn, setTurn] = useState(
    props.player === "PLAYER1" ? "Cross" : "Circle"
  );
  const [winner, setWinner] = useState({ winPlayer: "", indexes: [] });
  const [tieMatch, setTieMatch] = useState(false);
  function renderSVG(svg) {
    if (svg === "Cross") {
      return <Cross size={40} />;
    } else if (svg === "Circle") {
      return <Circle size={40} />;
    } else {
      return null;
    }
  }
  function handleClick(index) {
    setData((prevData) => {
      if (winner.winPlayer === "" && !prevData[index]) {
        prevData[index] = turn;
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        lines.forEach((line) => {
          const [a, b, c] = line;
          if (
            prevData[a] &&
            prevData[a] === prevData[b] &&
            prevData[a] === prevData[c]
          ) {
            if (turn === "Cross") {
              setWinner({ winPlayer: "PLAYER 1", indexes: line });
            } else {
              setWinner({ winPlayer: "PLAYER 2", indexes: line });
            }
          } else {
            if (!data.includes(undefined) && winner.winPlayer === "") {
              setTieMatch(true);
            }
          }
        });
        setTurn((prevValue) => (prevValue === "Cross" ? "Circle" : "Cross"));
        return prevData;
      } else {
        return prevData;
      }
    });
  }
  return (
    <div className="bigContainer">
      <div className="Container">
        {data.map((value, index) => {
          const isWinningIndex = winner.indexes.includes(index);
          return (
            <button
              className={isWinningIndex ? "winner" : null}
              id="btn-class"
              key={index}
              onClick={() => handleClick(index)}
            >
              {renderSVG(value)}
            </button>
          );
        })}
        <PlayerInfo
          turn={turn}
          pInfo={props.player}
          winner={winner.winPlayer}
          tie={tieMatch}
        />
      </div>
      <ScoreCard
        winnerPlayer={winner.winPlayer}
        setWinner={setWinner}
        setData={setData}
        setTieMatch={setTieMatch}
      />
    </div>
  );
}
