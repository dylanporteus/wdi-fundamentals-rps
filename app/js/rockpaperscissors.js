////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


var move;
var playerMove;
var computerMove;
var winner;
var playerWins;git 
var computerWins;
var tie;

function getPlayerMove(move) {
      return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")) {
    return (winner = "Player");
    }
    else if ((playerMove === "rock" && computerMove === "paper") ||
             (playerMove === "paper" && computerMove === "scissors") ||
             (playerMove === "scissors" && computerMove === "rock")) {
    return (winner = "Computer");
    }
    else if (playerMove === computerMove) {
        return (winner = "Tie");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner(getPlayerMove(), getComputerMove());
    while (playerWins <= 5 || computerWins <= 5) {
        if (winner === "player") {
          return playerWins += 1;
        }      
        else if (winner === "computer") {
            return computerWins += 1;
        }
    }
    console.log("Player chose" + " " + playerMove + " " + "while computer chose" + " " + computerMove + ".");
    console.log("The score is currently:" + " " + "player" + " " + playerWins + "," + " " + "computer" + " " + computerWins + ".");
    return [playerWins, computerWins]; 
}

