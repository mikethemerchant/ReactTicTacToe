//this is what chatGPT wrote..

import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [moves, setMoves] = useState([]);

  const handleSquareClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
    setMoves([...moves, { player: player, index: index }]);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleSquareClick(index)}>
        {board[index]}
      </button>
    );
  };

  const renderMoves = () => {
    return moves.map((move, index) => {
      const desc = index === 0 ? "Go to game start" : `Go to move #${index}`;
      return (
        <li key={index}>
          <button onClick={() => jumpTo(index)}>{desc}</button>
        </li>
      );
    });
  };

  const jumpTo = (move) => {
    const newBoard = board.slice(0, move + 1);
    setBoard(newBoard);
    setPlayer(move % 2 === 0 ? "X" : "O");
    setMoves(moves.slice(0, move + 1));
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${player}`;

  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{renderMoves()}</ol>
      </div>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default TicTacToe;
