function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;

  if (compChoice === 1) {
    return "rock";
  } else if (compChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Enter rock, paper or scissors: ");

  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  let player = humanChoice.toLowerCase();
  let cpu = computerChoice;

  if (player === "rock" && cpu === "scissors") {
    console.log("You win! Rock beats Scissors");
    return "playerWins";
  } else if (player === "rock" && cpu === "paper") {
    console.log("You lose, Paper beats Rock");
    return "cpuWins";
  } else if (player === "rock" && cpu === "rock") {
    console.log("It's a tie");
    return "tie";
  } else if (player === "paper" && cpu === "scissors") {
    console.log("You lose, Scissors beats paper");
    return "cpuWins";
  } else if (player === "paper" && cpu === "paper") {
    console.log("It's a tie");
    return "tie";
  } else if (player === "paper" && cpu === "rock") {
    console.log("You win! Paper beats Rock");
    return "playerWins";
  } else if (player === "scissors" && cpu === "scissors") {
    console.log("It's a tie");
    return "tie";
  } else if (player === "scissors" && cpu === "paper") {
    console.log("You win! Scissors beats Paper");
    return "playerWins";
  } else if (player === "scissors" && cpu === "rock") {
    console.log("You lose, Rock beats Scissors");
    return "cpuWins";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    if (result === "playerWins") {
      humanScore++;
    } else if (result === "cpuWins") {
      computerScore++;
    } else {
      tieScore++;
    }
  }
  if (humanScore > computerScore) {
    console.log(
      `Player wins: ${humanScore} to ${computerScore} with ${tieScore} ties`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer wins: ${computerScore} to ${humanScore} with ${tieScore} ties`,
    );
  } else {
    console.log(
      `It's a tie: ${humanScore} to ${computerScore} with ${tieScore} ties`,
    );
  }
}

playGame();
