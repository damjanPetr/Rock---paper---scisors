const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const i = Math.floor(Math.random() * options.length);
  const result = options[i];
  return result;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function getPlayerChoice() {
  // let validatedInput = false;
  // while (validatedInput === false) {
  const input = prompt("Enter your choice: ");

  // if (input == null) {
  //   continue;
  // }

  const inputLower = input.toLowerCase();
  return inputLower;
  // if (options.includes(inputLower)) {
  //   validatedInput = true;
  //   return inputLower;
  // }
  // }
}

function checkWinner(playerSelection, computerSelection) {
  // let computerScore = 0;
  // let playerScore = 0;
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && playerSelection == "rock")
  ) {
    // playerScore++;
    return "Player";
  } else {
    // computerScore++;
    return "Computer";
  }
}

function playRound() {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie") {
    return "It's a Tie";
  } else if (result === "Computer") {
    return `Computer wins !!! ${computerSelection} beats ${playerSelection}`;
  } else if (result === "Player") {
    return `You win !!! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    const player = getPlayerChoice();
    const computer = getComputerChoice();
    console.log(playRound(player, computer));
    return;
  }
}

game();
