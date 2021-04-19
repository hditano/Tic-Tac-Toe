// Main GameBoard

const gameBoard = (() => {
  let board = ["X", "X", "X", "X", "", "", "", "", ""];

  const getBoardIndex = (choice) => {
    return board[choice];
  };

  const loopBoard = () => {
    for(let i = 0; i < board.length; i) {
      return board[i];
    }
  };

  return {board, getBoardIndex, loopBoard};
})();

console.log(gameBoard.loopBoard);
