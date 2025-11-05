import { createContext, useContext, useState } from "react";

const GameContext = createContext();
export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = getWinner(board);

    const handleClick = (i) =>{
        if(board[i] || winner) return;
        const next =[...board];
        next[i] = isXNext ? "X" : "O";
        setBoard(next);
        setIsXNext(!isXNext);
    };


    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    }

    return (
        <GameContext.Provider
            value={{ board, isXNext, winner, handleClick, resetGame }}
        >
            {children}
        </GameContext.Provider>
    )
}

function getWinner(b) {
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

    for (let [a, x, y] of lines) {
        if (b[a] && b[a] === b[x] && b[a] === b[y]) return b[a];
    }

    if (b.every((cell) => cell !== null)) {
        return 'Draw';
    }

    return null;
}