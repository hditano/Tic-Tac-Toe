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

  const winningConditions = (() => {
    const winingComb = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ];

    const checkWinner = () => {

      console.log(playGame.currentPlayer.Name);
      
      
      for (let i = 0; i < winingComb.length; i++) {
        let check = winingComb[i].every(function (val) {
          return playGame.currentPlayer.Moves.indexOf(val) !== -1;
        });
        if(check) {
          let mainDiv = document.querySelector('.board');
          let div = document.createElement('div');
          div.classList.add('winner');
          div.style.display = 'flex';
          let para = document.createElement('p');
          let tempNode = document.createTextNode('Hernan Won!!');
          para.appendChild(tempNode);
          para.classList.add('winner-text');
          div.appendChild(para);
          mainDiv.appendChild(div);
          

        }

      }
  };

  return { checkWinner };
})();

const playGame = (() => {
  let playerOne = {
    Name: "Hernan",
    Moves: [],
    Markings: "X",
    Turn: 0,
  };
  let playerTwo = {
    Name: "Sebastian",
    Moves: [],
    Markings: "O",
    Turn: 1,
  };

  let currentPlayer = playerOne;

  const itemSelection = () => {
    document.addEventListener("click", (e) => {
      if (e.target.matches(".item-box")) {
        if (e.target.textContent !== "") return;
        let dataID = e.target.dataset.id;
        renderBox(e.target);
        gameBoard.setBoard(dataID, dataID);
        playerMoves(dataID);
        console.log(currentPlayer);
        winningConditions.checkWinner();
        switchPlayer();
      }
    });
  };

  const renderHtml = () => {
    let div = document.querySelector(".board");
    for (let i = 0; i < gameBoard.board.length; i++) {
      let para = document.createElement("p");
      let tempNode = document.createTextNode(gameBoard.board[i]);
      para.setAttribute("data-id", i);
      para.classList.add("item-box");
      para.appendChild(tempNode);
      div.appendChild(para);
    }
  };

  const renderBox = (target) => {
    currentPlayer === playerOne
      ? (target.textContent = playerOne.Markings)
      : (target.textContent = playerTwo.Markings);
  };

  const playerMoves = (dataID) => {
    currentPlayer === playerOne
      ? playerOne.Moves.push(dataID)
      : playerTwo.Moves.push(dataID);
    console.log("playerOne", playerOne.Moves, "", "playerTwo", playerTwo.Moves);
  };

  const switchPlayer = () => {
    (currentPlayer === playerOne)
      ? currentPlayer = playerTwo
      : currentPlayer = playerOne;
    console.log(currentPlayer);
  };

  renderHtml();
  itemSelection(currentPlayer);
  return {
    playerOne,
    playerTwo,
    currentPlayer,
    itemSelection,
    renderBox,
    switchPlayer,
    playerMoves,
  };
})();
