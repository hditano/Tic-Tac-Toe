// Main GameBoard

const gameBoard = (() => {
  let board = ["X", "X", "X", "X", "O", "O", "O", "O", "O"];

  const getBoardIndex = (choice) => {
    return board[choice];
  };

  const setBoard = (index, choice) => {
    board.splice(index, 1, choice);
    return board;
  };

  return { board, getBoardIndex, setBoard };
})();

// displayController (To render)

const displayController = (() => {
  const renderHtml = () => {
    let fixedDiv = document.querySelector(".board");
    gameBoard.board.forEach((element) => {
      let tempPara = document.createElement("p");
      let tempNode = document.createTextNode(element);
      tempPara.classList.add("item-box");
      tempPara.appendChild(tempNode);
      fixedDiv.appendChild(tempPara);
    });
  };

  const itemSelection = () => {
    document.querySelectorAll('.item-box').forEach(element => {
      element.addEventListener('click', (e) => {
        console.log(e.target.textContent);
      });
    });
  };

  return { renderHtml, itemSelection };
})();

// game flow

const gameFlow = (() => {
  let counterRound = 0;

  const winingComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const playerTurn = () => {
    displayController.renderHtml(gameBoard.setBoard(1, "F"));
  };

  return { playerTurn };
})();

// Players Setup

const player = (name) => {
  return { name };
};

displayController.renderHtml();
displayController.itemSelection();
