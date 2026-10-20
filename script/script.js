let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3) + 1;
    
    if (compChoice === 1){
        return 'rock';
    } else if (compChoice === 2) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let userChoice = prompt('Enter rock, paper or scissors: ')

    return userChoice;
}

function playRound(humanChoice, computerChoice){
    let player = humanChoice.toLowerCase();
    let cpu = computerChoice

    if (player === 'rock' && cpu === 'scissors'){
        humanScore++;
        return 'You win! Rock beats Scissors';
    } else if (player === 'rock' && cpu === 'paper') {
        computerScore++;
        return 'You lose, Paper beats Rock';
    } else if (player === 'rock' && cpu === 'rock') {
        return "It's a tie"
    } else if (player === 'paper' && cpu === 'scissors'){
        computerScore++;
        return 'You lose, Scissors beats paper';
    } else if (player === 'paper' && cpu === 'paper'){
        return "It's a tie"
    } else if (player === 'paper' && cpu === 'rock'){
        humanScore++;
        return 'You win! Paper beats Rock';
    } else if (player === 'scissors' && cpu === 'scissors'){
        return "It's a tie"
    } else if (player === 'scissors' && cpu === 'paper'){
        humanScore++;
        return 'You win! Scissors beats Paper';
    } else if (player === 'scissors' && cpu === 'rock'){
        computerScore++;
        return 'You lose, Rock beats Scissors';
    }
}

playRound(humanSelection, computerSelection)

function playGame(playRound){
    for(let i = 0; i < 5; i++){
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore){
        return `Player wins: ${humanScore} to ${computerScore}`
    } else {
        return `Computer wins: ${computerScore} to ${humanScore}`
    }
}


