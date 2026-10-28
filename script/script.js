let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
const btn = document.querySelectorAll('.btn');
const scoreBoard = document.getElementById('#scoreboard');
const theScore = document.getElementById('#score');
const theWinner = document.createElement('p');

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
  btn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selection = e.target.dataset.choice;
      playRound(selection, getComputerChoice());
    });
  });
}

function playRound(selection, cpuChoice) {
    const player = selection;
    const cpu = cpuChoice;

    console.log(player);
    console.log(cpu);

    if (player === "rock" && cpu === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    } else if (player === "rock" && cpu === "paper") {
      console.log("You lose, Paper beats Rock");
      computerScore++;
    } else if (player === "rock" && cpu === "rock") {
      console.log("It's a tie");
      tieScore++;
    } else if (player === "paper" && cpu === "scissors") {
      console.log("You lose, Scissors beats paper");
      computerScore++;
    } else if (player === "paper" && cpu === "paper") {
      console.log("It's a tie");
      tieScore++;
    } else if (player === "paper" && cpu === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (player === "scissors" && cpu === "scissors") {
      console.log("It's a tie");
      tieScore++;
    } else if (player === "scissors" && cpu === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else if (player === "scissors" && cpu === "rock") {
      console.log("You lose, Rock beats Scissors");
      computerScore++;
    }

    if(humanScore === 5){
      theWinner.textContent = `Player Wins!`;
      scoreBoard.appendChild(theWinner);
    } else if (computerScore === 5){
      theWinner.textContent = `CPU Wins!`;
      scoreBoard.appendChild(theWinner);
    }
  }

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   let tieScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     const result = playRound(humanSelection, computerSelection);

//     if (result === "playerWins") {
//       humanScore++;
//     } else if (result === "cpuWins") {
//       computerScore++;
//     } else {
//       tieScore++;
//     }
//   }
//   if (humanScore > computerScore) {
//     console.log(
//       `Player wins: ${humanScore} to ${computerScore} with ${tieScore} ties`,
//     );
//   } else if (computerScore > humanScore) {
//     console.log(
//       `Computer wins: ${computerScore} to ${humanScore} with ${tieScore} ties`,
//     );
//   } else {
//     console.log(
//       `It's a tie: ${humanScore} to ${computerScore} with ${tieScore} ties`,
//     );
//   }
// }

getHumanChoice();
