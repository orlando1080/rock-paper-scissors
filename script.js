let getComputerChoice = () => {
    let computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log('The result is a draw!');
        return -1;
    } 
    
    if (playerSelection === 'rock') {
        console.log(computerSelection === 'scissors' ? 'You win! Rock beats Scissors.' : 'You Lose! Paper beats Rock.');
        return computerSelection === 'scissors' ? 1 : 0;
    }
            
     if (playerSelection === 'paper')
        if (computerSelection === 'rock') {
            return 'You win! Paper beats Rock.';
            } else {
                return 'You Lose! Scissors beats Paper.';
            }
      
       if (playerSelection === 'scissors')
        if (computerSelection === 'paper') {
            return 'You win! Scissors beats Paper.';
            } else {
                return 'You Lose! Rock beats Scissors.';
            }
}

function game() {
    let playerScore = 0,
    computerScore = 0,
    draws = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Pick Rock, Paper or scissors:').toLowerCase(),
        result = playRound(playerSelection, getComputerChoice());
        if (result === 1) {
            playerScore += 1;
            continue
        } else if (result === 0) {
            computerScore += 1;
            continue
        } else {
            draws += 1;
        }
    }

    if (playerScore > computerScore) {
        console.log('You win!');
    } else if (playerScore < computerScore) {
        console.log('Computer wins!');
    } else {
        console.log('Draw!');
    }
}

game()