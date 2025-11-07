/* - Declare const ROWS & COLUMNS variable with value 3 for each variable */
const ROWS = 3;
const COLS = 3;

/* Create const gameBoard varaible and assign IIFE (module pattern) */
const gameboard = (function () {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let winner = "";
  let isDraw = false;

  let p1Name = window.prompt("Enter name of Player 1");
  let p2Name = window.prompt("Enter name of Player 2");

  /* Create const player1 object with id, name & sign property. Add a hardcoded values for now. */
  const player1 = {
    id: 1,
    name: p1Name,
    sign: "X",
  };

  /* Create const player2 object with id, name & sign property. Add a hardcoded values for now. */
  const player2 = {
    id: 2,
    name: p2Name,
    sign: "O",
  };

  /* Create an empty object called const activePlayer */
  let activePlayer = player1.sign;

  /* Create a const variable with function name playerTurn */
  const playerTurn = () => {
    return (activePlayer =
      activePlayer === player1.sign ? player2.sign : player1.sign);
  };

  /* Create a const variable with function play(cell) */
  const play = (row, column) => {
    if (winner || isDraw) {
      updateStatus("Game over.");
      resetGame();
      return;
    }

    if (board[row][column] !== "") {
      updateStatus("Pick another slot");
      return;
    }

    board[row][column] = activePlayer;
    updateBoardUI(row, column);
    updateStatus("");
    checkWinner();

    if (!winner && !isDraw) playerTurn(); // move turn only if game continues
  };

  const checkWinner = () => {
    const hasEmpty = board.some((row) => row.some((cell) => cell === ""));

    if (
      // All 3 row checking
      (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === "X") ||
      (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === "X") ||
      (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === "X") ||
      // All 3 column checking
      (board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X") ||
      (board[0][1] === "X" && board[1][1] === "X" && board[2][1] === "X") ||
      (board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X") ||
      // Diagonal checking
      (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") ||
      (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X")
    ) {
      winner = player1.name;
      updateStatus(winner + " won the game!");
      resetGame();
    } else if (
      // All 3 row checking
      (board[0][0] === "O" && board[0][1] === "O" && board[0][2] === "O") ||
      (board[1][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
      (board[2][0] === "O" && board[2][1] === "O" && board[2][2] === "O") ||
      // All 3 column checking
      (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O") ||
      (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === "O") ||
      (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O") ||
      // Diagonal checking
      (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") ||
      (board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O")
    ) {
      winner = player2.name;
      updateStatus(winner + " won the game!");
      resetGame();
    } else if (!hasEmpty && !winner) {
      isDraw = true;
      updateStatus("The game is a draw!");
      resetGame();
    }
  };

  const resetGame = () => {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    winner = "";
    isDraw = false;
    activePlayer = player1.sign;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        document.getElementById(`cell${row}${col}`).innerText = "Click Me";
      }
    }

    updateStatus("");
  };

  const createBoardUI = () => {
    let boardUI = document.getElementById("gameBoard");

    // Resets the board on the button click
    document
      .getElementById("reset")
      .addEventListener("click", () => resetGame());

    document
      .getElementById("newGame")
      .addEventListener("click", () => window.location.reload());

    // Dynamic row creation (total 3 rows)
    for (let row = 0; row < ROWS; row++) {
      let rowDiv = document.createElement("div");
      rowDiv.id = "row1";
      // Dynamic column creation each row (total 3 cols each row)
      for (let col = 0; col < COLS; col++) {
        const cell = document.createElement("button");
        cell.className = "cell";
        cell.id = `cell${row}${col}`;
        cell.innerText = "Click Me";
        cell.addEventListener("click", () => play(row, col));
        rowDiv.appendChild(cell);
      }
      boardUI.appendChild(rowDiv);
    }
  };

  const updateBoardUI = (row, column) => {
    document.getElementById("cell" + row + column).innerText = activePlayer;
  };

  const updateStatus = (message) => {
    document.getElementById("status").innerText = message;
  };

  return { play, createBoardUI };
})();

gameboard.createBoardUI();
