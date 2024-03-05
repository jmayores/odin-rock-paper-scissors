let sel = document.querySelector("#selections");
let results = document.querySelector("#results");
let playerChoice = document.querySelector("#player-choice");
let computerChoice = document.querySelector("#computer-choice");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let pScore = 0;
let cScore = 0;
let result;

playerScore.textContent = pScore;
computerScore.textContent = cScore;

getPlayerChoice = (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      results.textContent = playRound("rock", getComputerChoice());
      break;
    case "paper":
      results.textContent = playRound("paper", getComputerChoice());
      break;
    case "scissors":
      results.textContent = playRound("scissors", getComputerChoice());
      break;
  }
};

sel.addEventListener("click", getPlayerChoice);

getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

playRound = (playerSelection, computerSelection) => {
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;

  if (playerSelection === computerSelection)
    result = `It's a tie! You both used ${playerSelection}...`;
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") result = "You lose! Paper beats rock...";
    else result = "You win! Rock beats paper!";
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors")
      result = "You lose! Scissor beats paper...";
    else result = "You win! Paper beats rock!";
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock")
      result = "You lose! Rock beats scissors...";
    else result = "You win! Scissors beats paper!";
  }

  if (result.substring(0, 7) === "You win") {
    pScore++;
    playerScore.textContent = pScore;
  } else if (result.substring(0, 8) === "You lose") {
    cScore++;
    computerScore.textContent = cScore;
  }

  if (pScore === 5) {
    result = "You got 5 points! You won the game!";
    sel.removeEventListener("click", getPlayerChoice);
  } else if (cScore === 5) {
    result = "The computer got 5 points... You lost the game!";
    sel.removeEventListener("click", getPlayerChoice);
  }

  return result;
};
