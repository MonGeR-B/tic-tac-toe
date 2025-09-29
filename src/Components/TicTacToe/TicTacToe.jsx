import React, { useState, useEffect } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ x: 0, o: 0, draw: 0 });
  const [winningCombo, setWinningCombo] = useState([]);

  useEffect(() => {
  checkWinner();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [board]);

  const checkWinner = () => {
    for (const combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setWinningCombo(combo);
        updateScore(board[a]);
        return;
      }
    }
    if (!board.includes('') && !winner) {
      setWinner('draw');
      updateScore('draw');
    }
  };

  const updateScore = (winner) => {
    setScore((prev) => {
      const newScore = { ...prev };
      if (winner === 'x') newScore.x += 1;
      else if (winner === 'o') newScore.o += 1;
      else newScore.draw += 1;
      return newScore;
    });
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'x' : 'o';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setWinningCombo([]);
    setIsXTurn(true);
  };

  const getIcon = (val) => {
    if (val === 'x') return <img src={cross_icon} alt="X" />;
    if (val === 'o') return <img src={circle_icon} alt="O" />;
    return null;
  };

  return (
    <div className='container'>
      <h1 className='title'>
        Tic Tac Toe Gaming <span>React</span>
      </h1>

      <div className='scoreboard'>
        <div><strong>X</strong>: {score.x}</div>
        <div><strong>O</strong>: {score.o}</div>
        <div><strong>Draws</strong>: {score.draw}</div>
      </div>

      <div className='board'>
        {board.map((val, idx) => (
          <div
            key={idx}
            className={`boxes ${winningCombo.includes(idx) ? 'winner' : ''}`}
            onClick={() => handleClick(idx)}
          >
            {getIcon(val)}
          </div>
        ))}
      </div>

      <div className='status'>
        {winner === 'draw'
          ? "It's a Draw!"
          : winner
          ? `Winner: ${winner.toUpperCase()}`
          : `Turn: ${isXTurn ? 'X' : 'O'}`}
      </div>

      <button className='reset' onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
