# Tic Tac Toke — React Tic-Tac-Toe

A minimal, polished Tic-Tac-Toe game built with React.  
Dark neon theme, image icons for X/O, win highlighting and a simple scoreboard.

---

## Demo

Add a hosted demo link here (Vercel / Netlify / GitHub Pages) once deployed.

---

## Features

- Two-player local Tic-Tac-Toe (X vs O)
- Win detection with highlighted winning boxes
- Scoreboard (tracks X wins, O wins, draws)
- Reset button to clear board (keeps scoreboard)
- Image-based icons for X and O
- Clean, componentized code structure — easy to extend

---

## Project structure (your project)

.
├─ public/
│ └─ index.html
├─ src/
│ ├─ Assets/
│ │ ├─ circle.png # O icon (imported in TicTacToe)
│ │ └─ cross.png # X icon (imported in TicTacToe)
│ ├─ Components/
│ │ └─ TicTacToe/
│ │ ├─ TicTacToe.js # main component you provided
│ │ └─ TicTacToe.css # the CSS you pasted earlier (rename accordingly)
│ ├─ App.js # renders <TicTacToe />
│ ├─ index.js # React entry (you provided)
│ ├─ index.css # global CSS (referenced by index.js)
│ └─ reportWebVitals.js # optional (referenced by index.js)
├─ package.json
└─ README.md

yaml
Copy code

> Note: Your TicTacToe component imports `./TicTacToe.css` and icons from `../Assets/`. Make sure those exact files/paths exist.

---

## Installation

**Prereqs:** Node.js (v16+) and npm or yarn.

```bash
# clone your repo
git clone <repo-url>
cd <repo-folder>

# install deps
npm install
# or
yarn

# start dev server
npm start
# or
yarn start