getComputerChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection)
    return `It's a tie! You both used ${playerSelection}...`;
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") return "You lose! Paper beats rock...";
    else return "You won! Rock beats paper!";
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors")
      return "You lose! Scissor beats paper...";
    else return "You win! Paper beats rock!";
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") return "You lose! Rock beats scissors...";
    else return "You win! Scissors beats paper!";
  } else
    return `Do you even know how to play rock, paper, scissors??? You have to choose either rock, paper, or scissors... not ${playerSelection}`;
};
