let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
const btn = document.querySelectorAll('.btn');
const scoreBoard = document.querySelector('#scoreboard');
const theScore = document.querySelector('#score');
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
      humanScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    } else if (player === "rock" && cpu === "paper") {
      computerScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    } else if (player === "rock" && cpu === "rock") {
      tieScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    } else if (player === "paper" && cpu === "scissors") {
      computerScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    } else if (player === "paper" && cpu === "paper") {
      tieScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    } else if (player === "paper" && cpu === "rock") {
      humanScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    } else if (player === "scissors" && cpu === "scissors") {
      tieScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    } else if (player === "scissors" && cpu === "paper") {
      humanScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    } else if (player === "scissors" && cpu === "rock") {
      computerScore++;
      theScore.textContent = `Player Wins: ${humanScore} Cpu Wins: ${computerScore} Ties: ${tieScore}`;
    }

    if(humanScore === 5){
      theWinner.textContent = `Player Wins!`;
      scoreBoard.appendChild(theWinner);
    } else if (computerScore === 5){
      theWinner.textContent = `CPU Wins!`;
      scoreBoard.appendChild(theWinner);
    }
  }

getHumanChoice();
