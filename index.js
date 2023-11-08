game = ['Rock','Paper','Scissors']
function getComputerChoice() {
    let computerIndex = Math.floor(Math.random()*3)
    return game[computerIndex]
}
console.log(getComputerChoice())

function getPlayerChoice() {
    let playerIndex = Math.floor(Math.random()*3)
    return game[playerIndex]
}
console.log(getPlayerChoice())