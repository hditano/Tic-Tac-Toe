// Main GameBoard

const gameBoard = (() => {
  let board = ["X", "X", "X", "X", "O", "O", "O", "O", "O"];

  const getBoardIndex = (choice) => {
    return board[choice];
  };

  const setBoard = (index, choice) => {
    board.splice(index, 1, choice);
    return board;
  }

  return {board, getBoardIndex, setBoard};
})();

// displayController (To render)

const displayController = (() => {
  const para = document.querySelector('.test');

  const renderHtml = (content) => {
    para.textContent = content;
  }

  return {renderHtml};
})();

// Players Setup

const player = (name) => {

  return { name };
}

displayController.renderHtml(gameBoard.getBoardIndex(2));

