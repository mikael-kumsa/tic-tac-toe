# Tic Tac Toe (React + Vite)

This repository contains a small Tic Tac Toe game built with React and Vite. It's a lightweight app intended for learning React hooks, context, and simple game logic.

## Features

- 2-player local game (X vs O)
- Tracks current turn and highlights status in color (red for X, blue for O)
- Shows a popup on win/draw with an option to play again
- Simple scoreboard that increments when a player wins
- Responsive board and accessible buttons (aria-label on squares)

## Demo / How to play

1. Run the dev server (see setup below).
2. Click a square to place X (X goes first) or O.
3. The app will detect three-in-a-row wins or a draw and show a popup.
4. Close the popup to reset the board and increment the winner's score.

## Tech stack

- React 18+ (hooks and context)
- Vite for development and build
- Plain CSS for styling

## Setup (Windows PowerShell)

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173) in your browser.

## Available scripts

- `npm run dev` — start the Vite dev server  
- `npm run build` — build for production  
- `npm run preview` — locally preview the production build  

## Project structure (important files)

- `src/`
  - `main.jsx` — app entry and ReactDOM bootstrapping
  - `App.jsx` — top-level app component
  - `Components/Index.jsx` — main game UI (board, squares, popup)
  - `Context/GameContext.jsx` — game state and logic (board, turns, winner calculation)
  - `index.css` / `App.css` — styling

## Contributing

This is a small learning project — contributions are welcome. Ideas:

- Add an AI opponent (minimax or simple heuristics)
- Persist scoreboard in localStorage
- Add animations and improved responsive layout
- Add tests (Jest / React Testing Library) for `getWinner` and components

If you make changes, open a pull request with a short description of the change.

## License

This project is provided as-is for learning and demo purposes. Feel free to reuse the code in your own projects.
