import "./App.css";
import { useState } from "react";
import Board from "./compoenents/Board";
import ScoreBoard from "./compoenents/Scoreboard";
import Resetbutton  from "./compoenents/Resetbutton";

function App() {
  const [gameOver, setGameOver] = useState(false)
  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const WIN_CONDITITONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // eslint-disable-next-line no-unused-vars
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    // eslint-disable-next-line no-use-before-define
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let index = 0; index < WIN_CONDITITONS.length; index++) {
      const [x, y, z] = WIN_CONDITITONS[index];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }
    }
  };

  const resetBoard=()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver? resetBoard : handleBoxClick} />
      <Resetbutton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;