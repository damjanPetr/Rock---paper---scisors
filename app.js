const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const i = Math.floor(Math.random() * options.length);
  const result = options[i];
  return result;
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput === false) {
    const input = prompt("Enter your choice: ");
    if (input === null) {
      continue;
    }
    const inputLower = input.toLowerCase();
    if (options.includes(inputLower)) {
      validatedInput = true;
      return inputLower;
    }
  }

  // return ;
}
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && playerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
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
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    console.log(playRound(playerSelection, computerSelection));

    if (checkWinner(playerSelection, computerSelection) == "Player") {
      playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      computerScore++;
    }
  }
  console.log("GAMEOVER");
  if (playerScore > computerScore) {
    return "Player WINS";
  } else {
    return "Computer WINS";
  }
}

game();
