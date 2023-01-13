const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const i = Math.floor(Math.random() * options.length);
  const result = options[i];
  return result;
}

function getPlayerChoice(choice) {
  // let temp = 0;

  // while (options.includes(inputLower) && temp < 0) {
  // temp++;

  const inputLower = choice.toLowerCase();
  // if (options.includes(inputLower) {
  return inputLower;
}

// return ;
//this is used to check who wins and who loses and only for that

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
    return `You lose !!! ${playerSelection} is beaten by ${computerSelection}`;
  } else if (result === "Player") {
    return `You win !!! ${playerSelection} beats ${computerSelection}`;
  }
}
let playerScore = 0;
let computerScore = 0;
let timer = 0;

function game(playerSelection, computerSelection) {
  // for (let i = 0; i < 5; i++) {
  // console.log(playRound(playerSelection, computerSelection));
  //
  if (checkWinner(playerSelection, computerSelection) == "Player") {
    playerScore++;
  } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
    computerScore++;
  } else {
    return "It's a Tie";
  }

  // }
  playRound(playRound, computerSelection);
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;

  if (timer > 5 || playerScore >= 3 || computerScore >= 3) {
    display.innerHTML = "Game Over!!!";

    if (playerScore > computerScore) {
      return "Player WINS";
    } else {
      return "Computer WINS";
    }
    return "Game Over!!!";
  }
}

const btn = document.querySelectorAll("button");
const display = document.querySelector(".displayResult");
const pScore = document.querySelector(".compScore");
const cScore = document.querySelector(".playerScore");

const buttons = Array.from(btn);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = e.target.innerText;
    display.textContent = game(getPlayerChoice(input), getComputerChoice());
    // display.append = playRound(getPlayerChoice(input), getComputerChoice());
    // console.dir(e);
  });
});
