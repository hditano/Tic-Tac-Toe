// Main GameBoard

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const setBoard = (index, choice) => {
    board.splice(index, 1, choice);
    return board;
  };

  return { board, setBoard };
})();

// Player Setup

const player = (name) => {
  return { name };
};

// displayController (To render)

const displayController = (() => {

  const itemSelection = () => {
    document.addEventListener("click", (e) => {
      if (e.target.matches(".item-box")) {
        let dataID = e.target.dataset.id;
        playGame.renderBox(e.target);
        gameBoard.setBoard(dataID, dataID);
        playGame.playerMoves(dataID);
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
    Markings: 'X',
  };
  const playerTwo = {
    Name: "Sebastian",
    Moves: [],
    Markings: 'O',
  };

  let currentPlayer;
  currentPlayer = playerOne;

  const renderHtml = () => {
    let div = document.querySelector('.board');
    for(let i = 0; i < gameBoard.board.length; i++) {
      let para = document.createElement('p');
      let tempNode = document.createTextNode(gameBoard.board[i]);
      para.setAttribute('data-id', i);
      para.classList.add('item-box');
      para.appendChild(tempNode);
      div.appendChild(para);

    }
  }

  const renderBox = (target) => {
    (currentPlayer === playerOne) ? target.textContent = playerOne.Markings : target.textContent = playerTwo.Markings;
  };

  const playerMoves = (dataID) => {
    (currentPlayer === playerOne) ? playerOne.Moves.push(dataID) : playerTwo.Moves.push(dataID);
    console.log('playerOne', playerOne.Moves, "", 'playerTwo', playerTwo.Moves ); 
  }

  const switchPlayer = () => {
    (currentPlayer === playerOne) ? currentPlayer = playerTwo : currentPlayer = playerOne;
    console.log(currentPlayer)
  };

  renderHtml();
  displayController.itemSelection(currentPlayer);
  return { currentPlayer, renderBox, switchPlayer, playerMoves };
})();
