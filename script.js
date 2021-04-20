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

  const renderHtml = () => {
    let fixedDiv = document.querySelector('.board');
    gameBoard.board.forEach(element => {
      let tempPara = document.createElement('p');
      let tempNode = document.createTextNode(element);
      tempPara.classList.add('item-box');
      tempPara.appendChild(tempNode);
      fixedDiv.appendChild(tempPara);
      
    });
  }

  return {renderHtml};
})();

// Players Setup

const player = (name) => {

  return { name };
}

displayController.renderHtml(gameBoard.getBoardIndex(2));

