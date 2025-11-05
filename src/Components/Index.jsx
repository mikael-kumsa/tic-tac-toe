import React, { useEffect, useState } from "react";
import { GameProvider, useGame } from './../Context/GameContext'

const Square = ({ i }) => {
    const { board, handleClick } = useGame();
    const value = board[i];
    const className = `square ${value === 'X' ? 'x' : value === 'O' ? 'o' : ''}`;
    return (
        <button
            className={className}
            onClick={() => handleClick(i)}
            aria-label={`square-${i}`}>
            {value}
        </button>
    );
}

// popup

const Popup = ({ message, onClose }) => (
    <div className="popup-overlay">
        <div className="popup">
            <h2>{message}</h2>
            <button onClick={onClose}>Play Again</button>
        </div>
    </div>
)

//board
const Board = () => {
    const { winner, isXNext, resetGame } = useGame();
    const [scores, setScores] = useState({ X: 0, O: 0 });
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (winner) {
            const t = setTimeout(() => setShowPopup(true), 500);
            return () => clearTimeout(t);
        }
    }, [winner]
    )
    const handleClosePopup = () => {
        // Only increment scores for X or O (case-sensitive keys)
        if (winner === "X" || winner === "O") {
            setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
        }
        setShowPopup(false);
        resetGame();
    };

    const isDraw = winner && winner.toString().toLowerCase() === 'draw';
    // determine status class: red for X, blue for O, neutral for draw
    let statusClass = '';
    if (isDraw) {
        statusClass = 'draw';
    } else if (winner) {
        statusClass = winner === 'X' ? 'x-turn' : 'o-turn';
    } else {
        statusClass = isXNext ? 'x-turn' : 'o-turn';
    }

    return (
        <div className="container">
            <h1 className="logo">
                Let's <span className="accent"> OX </span> !
            </h1>

            {/*win Qount */}
            <div className="scoreboard">
                <span className="x-score">X Wins! Score: {scores.X} </span>
                <span className="o-score">O Wins! Score: {scores.O} </span>
            </div>

            <h2 className={`status ${statusClass}`}>
                {winner
                    ? isDraw
                        ? "It's a draw!"
                        : `Winner: ${winner}`
                    : `Turn ${isXNext ? "X" : "O"}`}
            </h2>

            <div className="board">
                {Array.from({ length: 9 }, (_, i) => (
                    <Square key={i} i={i} />
                ))}
            </div>

            <button className="reset" onClick={resetGame}>Reset</button>
            {/* Popup*/}

            {showPopup && (
                <Popup
                    message={isDraw ? "Match is Drawn!" : `${winner} Wins!`}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    )
}

function Index() {
    return (
        <GameProvider>
            <Board/>
        </GameProvider>
    );
}

export default Index;