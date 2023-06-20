let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
            console.log('The result is a draw!');
            return -1;
    }

    switch(playerSelection) {

        case 'rock':
            console.log(computerSelection === 'scissors' ? 'You Win! Rock beats Scissors.' : 'You Lose! Paper beats Rock.');
            return computerSelection === 'scissors' ? 1 : 0;

        case 'paper':
            console.log(computerSelection === 'rock' ? 'You Win! Paper beats Rock.' : 'You Lose! Scissors beats Paper.');
            return computerSelection === 'rock' ? 1 : 0;
        
        case 'scissors':
            console.log(computerSelection === 'paper' ? 'You Win! Scissors beats Paper.' : 'You Lose! Rock beats Scissors.');
            return computerSelection === 'paper' ? 1 : 0; 
    }
};

let declareWinner = (playerScore, computerScore) => {
    if (playerScore > computerScore) {
        console.log('You win!');
    } else if (playerScore < computerScore) {
        console.log('Computer wins!');
    } else {
        console.log('The overall result is a Draw!');
    }
};

let getComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

let runGame = () => {
    let playerScore = 0,
    computerScore = 0,
    draws = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Pick Rock, Paper or scissors:').toLowerCase(),
        result = playRound(playerSelection, getComputerChoice());
        switch(result) {
            case 1:
                playerScore += 1;
                continue;
            case 0:
                computerScore += 1;
                continue;
            default:
                draws += 1;
        }
    }
    declareWinner(playerScore, computerScore)
};

runGame()