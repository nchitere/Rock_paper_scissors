game = ['rock','paper','scissors']
function getComputerChoice() {
    let computerIndex = Math.floor(Math.random()*3)
    return game[computerIndex]
}

const playerSelection = "paper";


function playRound(getComputerChoice, PlayerChoice) {
    // Normalize player selection to lowercase
  // playerSelection = playerSelection.toLowerCase()

    // Check if player selection is valid
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
      throw new Error(`Invalid player selection: ${playerSelection}`);
    }
  
    // Get the winning combinations
    const winningCombinations = {
      rock: ['paper'],
      paper: ['scissors'],
      scissors: ['rock'],
    };
  
    // Determine the winner
    if (playerSelection === computerSelection) {
      winner = 'Tie!';
    } else if (winningCombinations[playerSelection].includes(computerSelection)) {
      winner = 'You Win!';
    } else {
      winner = 'You Lose!';
    }
  
    // Return the winner declaration
    return `${winner} ${computerSelection} beats ${playerSelection}`;
}


const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));