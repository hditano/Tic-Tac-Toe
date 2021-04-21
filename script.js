// Main GameBoard

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoardIndex = (choice) => {
    return board[choice];
  };

  const setBoard = (index, choice) => {
    board.splice(index, 1, choice);
    return board;
  };

  return { board, getBoardIndex, setBoard };
})();

// Player Setup

const player = (name) => {
  return { name };
};

const player1 = player("Hernan");
const player2 = player("Sebastian");

// displayController (To render)

const displayController = (() => {
  const renderHtml = () => {
    let fixedDiv = document.querySelector(".board");
    gameBoard.board.forEach((element, index) => {
      let tempPara = document.createElement("p");
      tempPara.setAttribute("data-id", index);
      let tempNode = document.createTextNode(element);
      tempPara.classList.add("item-box");
      tempPara.appendChild(tempNode);
      fixedDiv.appendChild(tempPara);
    });
    gameFlow.playerTurn(player1);
  };

  const renderBox = (playerName, target) => {
    playerName === player1
      ? (target.textContent = "X")
      : (target.textContent = "O");
  };

    const itemSelection = (playerName) => {
      document.querySelectorAll('.item-box').forEach(element => {
        element.addEventListener('click', e => {
          e.preventDefault();
          console.log(e.target.dataset.id);
          let dataID = e.target.dataset.id;
          renderBox(playerName, element);
          gameBoard.setBoard(dataID, dataID);
          gameFlow.playerMoves(playerName, dataID);
        })
      })
    }

  return { renderHtml, renderBox, itemSelection };
})();

// game flow

const gameFlow = (() => {

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

  let arrayP1 = [];
  let arrayP2 = [];

  const playerMoves = (playerName, dataID) => {

    (playerName === player1) ? arrayP1.splice(dataID, 0, dataID) : arrayP2.splice(dataID, 0, dataID);
    console.log(arrayP1, arrayP2)
  };

  const playerTurn = (statusPlayer) => {
    statusPlayer == player1 ? displayController.itemSelection(player1) : displayController.itemSelection(player2);
  };

  return { playerTurn, playerMoves };
})();


displayController.renderHtml();
