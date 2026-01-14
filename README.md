# 🧩 Sudoku Solver & Playable Game (Full Stack)

A full-stack **Sudoku Solver and Playable Web Application** built with  
**React + TypeScript (Frontend)** and **Node.js + Express (Backend)**.

The app allows users to play Sudoku, get hints, solve puzzles, and validate solutions
with real-time feedback and clean UX.

---

## 🚀 Live Demo

- **Frontend:** https://sudokuapp-six.vercel.app/
- **Backend API:** https://car-price-predict-flask-backend.onrender.com

---

## 🛠 Tech Stack

### Frontend
- React + TypeScript
- Vite
- Bootstrap
- REST API integration

### Backend
- Node.js
- Express.js
- Custom Sudoku Solver (Backtracking)
- RESTful API design

### Deployment
- Backend → Render
- Frontend → Vercel
- Environment variables for API configuration

---

## ✨ Features

- 🎮 Playable 9×9 Sudoku grid
- 🔒 Locked original puzzle cells
- 💡 Hint system (one correct cell)
- 🧠 Sudoku solver using backtracking algorithm
- ❌ Real-time conflict detection (row, column, 3×3 box)
- ✅ Game completion detection
- 🎯 Difficulty levels (Easy / Medium / Hard)
- ⚡ Fast UI with local state (no API calls per move)

---

## 🧠 Architecture Overview

React (TypeScript)
|
| REST API (JSON)
|
Node.js + Express
|
Sudoku Engine (Solver + Generator)

- Frontend handles UI, state, and validation feedback
- Backend handles puzzle generation, solving, and correctness
- Clean separation of concerns

---

## 🧩 Sudoku Solver Algorithm

- Uses **Depth-First Search (DFS) with Backtracking**
- Tries numbers 1–9 for each empty cell
- Prunes invalid states early using constraint checks
- Guarantees correct solution if solvable

---

## 📦 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/sudoku/new?difficulty=easy` | Generate new puzzle |
| POST | `/api/sudoku/solve` | Solve full board |
| POST | `/api/sudoku/hint` | Get one correct cell |
| POST | `/api/sudoku/validate` | Validate board |

---

## 🧪 Local Setup

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Create .env in frontend:
VITE_API_URL=http://localhost:5000/api/sudoku
