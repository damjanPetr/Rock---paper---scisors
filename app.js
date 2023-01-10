function getComputerChoice() {
  const rock = ["rock", "paper", "scissors"];

  const choiceArrayIndex = Math.floor(Math.random() * rock.length);
  let result = rock[choiceArrayIndex];
  return result;
}

const computerSelection = getComputerChoice();

const playerSelection = prompt("Please enter the player's choice:");

function playRound(playerSelection, computerSelection) {
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore += 1;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    return "Draw";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "Draw";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "Draw";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else {
    return console.log("bakaka");
  }
  console.log(computerScore);
  console.log(playerScore);
  return;
}
playRound();
// function game() {
//   let compWin = 0;
//   let playerWin = 0;

//   for (let i = 0; i < 5; i++) {
//     playRound();

//     return;
//   }
// }
