# 🕹️ Tic Tac Toe

A simple yet fully functional **Tic Tac Toe game** built as part of [The Odin Project’s JavaScript curriculum](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe).  
This project focuses on **factory functions**, the **module pattern**, and **DOM manipulation** to manage game state and interactions.

---

## 🧠 Project Overview

The goal of this project was to:

- Build the game logic in **modular JavaScript** using IIFEs and factory functions.
- Practice **encapsulation** by separating data (gameboard), logic (game flow), and UI (DOM manipulation).
- Reinforce concepts like **closures**, **event handling**, and **state management**.
- Render the game dynamically in the browser and allow users to play interactively.

---

## 🧩 Features

✅ Modular structure using the **Module Pattern (IIFE)**  
✅ **Dynamic board rendering** via JavaScript (no hardcoded HTML)  
✅ **Two-player mode** with customizable player names  
✅ **Turn-based gameplay** with alternating signs (X / O)  
✅ **Winner and draw detection** logic for all combinations  
✅ **Reset / restart** functionality  
✅ Clean and scalable architecture

---

## 🏗️ Built With

- **HTML5** – Structure
- **CSS3** – Basic styling
- **Vanilla JavaScript (ES6)** – Logic, DOM manipulation, and event handling

---

---

## ⚙️ How It Works

1. When the page loads, the browser prompts both players to enter their names.
2. The **3×3 board** is dynamically generated using JavaScript.
3. Each click calls the `play(row, col)` function — marking the active player’s move.
4. The game continuously checks for:
   - Three-in-a-row (win)
   - A full board (draw)
5. Upon win or draw, the game resets automatically (or via the “Reset” button).

---

## 🧩 Key Concepts Demonstrated

- **Encapsulation:** All state and logic are contained inside a single `gameboard` module.
- **Closures:** Variables like `board`, `winner`, and `activePlayer` are private and accessible only through returned functions.
- **Factory Functions:** Used to define player objects dynamically.
- **DOM Manipulation:** Dynamically generates the grid, handles button clicks, and updates the board UI.
- **Game Flow Control:** Alternates turns, validates moves, and resets board state cleanly.

---

## 🚀 Getting Started

### Clone this repository

```bash
git clone https://github.com/jaygiri-gosai/tic-tac-toe.git
cd tic-tac-toe
```
