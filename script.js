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

// displayController (To render)

const displayController = (() => {

  const itemSelection = (currentPlayer) => {
    document.addEventListener("click", (e) => {
      if (e.target.matches(".item-box")) {
        let dataID = e.target.dataset.id;
        playGame.renderBox(currentPlayer, e.target);
        gameBoard.setBoard(dataID, dataID);
        playGame.switchPlayer();
      }
    });
  };

  return { itemSelection };
})();

// game flow

// const gameFlow = (() => {

//   const winingComb = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   let arrayP1 = [];
//   let arrayP2 = [];

//   const checkWinner = () => {

//   };

//   return {  };
// })();

const playGame = (() => {
  const playerOne = {
    Name: "Hernan",
    Moves: [],
  };
  const playerTwo = {
    Name: "Sebastian",
    Moves: [],
  };

  let currentPlayer;
  let player1;
  let player2;
  currentPlayer = player1;

  // const renderHtml = () => {
  //   let fixedDiv = document.querySelector(".board");
  //   gameBoard.board.forEach((element, index) => {
  //     let tempPara = document.createElement("p");
  //     tempPara.setAttribute("data-id", index);
  //     let tempNode = document.createTextNode(element);
  //     tempPara.classList.add("item-box");
  //     tempPara.appendChild(tempNode);
  //     fixedDiv.appendChild(tempPara);
  //   });
  //   playerTurn(playerOne);
  // };

  const renderHtml = () => {
    let div = document.querySelector('.board');
    for(let i = 0; i < gameBoard.board.length; i++) {
      let para = document.createElement('p');
      let tempNode = document.createTextNode(gameBoard.board[i]);
      para.setAttribute('data-id', '2');
      para.classList.add('item-box');
      para.appendChild(tempNode);
      div.appendChild(para);

    }
    displayController.itemSelection(currentPlayer);
  }

  const renderBox = (currentPlayer,target) => {
    currentPlayer === player1 ? target.textContent = 'X' : target.textContent = 'O';
  };


  const switchPlayer = () => {
    currentPlayer === playerOne ? currentPlayer === player2 : currentPlayer === player1;
  };

  renderHtml();
  return { renderBox, switchPlayer };
})();
