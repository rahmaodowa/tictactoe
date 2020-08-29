// create a two player Tic-Tac-Toe game. The users should be able to click to place
// their X or O and if they win the program should mention their win in the DOM.
//
//A game of Tic Tac Toe that will be played between two players.
//One of the players will choose ‘O’ and the other ‘X’ to mark their cells.
//The game ends when one of the players has one whole row/ column/ diagonal filled with their character (‘O’ or ‘X’).
//If no one wins, there will be an alert that says DRAW!
//If someone wins it'll alert Winner!

// this is the winning combinations.



// The Selector Variables
const button = document.getElementById('restartButton')
const cells = [...document.getElementsByClassName('cell')]
const title = document.getElementById('title')

//the game object
const game = {

//Array represents initial gamestate that will change after each click
board: ['','','','','','','','',''],

  //Keeps track of Player turn
turn: 0,

//Adds all cell event listeners
addClickEvents: ()=>{
cells.forEach(x=>x.addEventListener('click', game.makeMoneyMove))
},

//removes all cell event listener
removeClickEvents: ()=>{
  cells.forEach(x=>x.removeEventListener('click', game.makeMoneyMove))
},

  // Allows Increments to turn after each click
nextTurn: ()=>{game.turn++},

//Resets gameState to initialState
restart: ()=>{
  game.board=['','','','','','','','','']
  game.turn = 0
  cells.forEach(x=>x.classList='cell')
  game.addClickEvents()
  button.style.display='none'
  title.innerHTML = 'Tic-Tac-Toe'
  delete game.win
},

  //Array of Winning Conditions
winState: [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
],

//Method that checks gamestate for wins
checkForWin: ()=>{

    //loops through the winning conditions
      for (var i = 0; i < 8; i++) {

//Combo is the current index of the winning condition
        let combo = game.winState[i]

      //Checks all winning conditionsto see if you won
        if ((game.board[combo[0]]=== game.board[combo[1]] && game.board[combo[1]]=== game.board[combo[2]]) && game.board[combo[0]]!==''){
game.win = 89
        //Changes Message at top
          title.innerHTML = (game.board[combo[0]]+' wins')

        //Removes all click events once your done
          game.removeClickEvents()

        //Makes restart button visible
          button.style.display='block'
          break
        }

      //Draw Conditions
        if((game.board.every(x=>x!==''))&&(!game.win)){

    //Changes Message at top
          title.innerHTML = ('Draw')

      //Makes restart button visible
          button.style.display='block'
          break;
      }
  }
},

//Each cell click is a MoneyMove
makeMoneyMove: (e)=>{
console.log(e.target.id)
  //Removes event listener, allowing only one click
  e.target.removeEventListener('click', game.makeMoneyMove )

  //Conditional that checks the game.turn
  if(game.turn%2){

    //Adds class that renders x img
    e.target.classList.add("x")

  //Declares Player Name
    game.board[e.target.id]='Player 2'

    game.checkForWin()
}
  else {
        //Adds class that renders circle img
        e.target.classList.add('circle')

    //Declares Player Name
        game.board[e.target.id]='Player 1'

    //Checks for winners
      game.checkForWin()
}
//iterates to the next turn
    game.nextTurn()
}
}

//Adds All cell Event Listeners
game.addClickEvents()
