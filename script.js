let playRound = (playerSelection, computerSelection) => {
    const div = document.querySelector('div');
    const p = document.createElement('p');
    
    if (playerSelection === computerSelection) {
            p.textContent = 'The result is a draw!';
            div.appendChild(p);
            return -1;
    }

    switch(playerSelection) {

        case 'rock':
            p.textContent = computerSelection === 'scissors' ? 'You Win! Rock beats Scissors.' : 'You Lose! Paper beats Rock.';
            div.appendChild(p);
            console.log(computerSelection === 'scissors' ? 'You Win! Rock beats Scissors.' : 'You Lose! Paper beats Rock.');
            return computerSelection === 'scissors' ? 1 : 0;

        case 'paper':
            p.textContent = computerSelection === 'rock' ? 'You Win! Paper beats Rock.' : 'You Lose! Scissors beats Paper.';
            div.appendChild(p);
            console.log(computerSelection === 'rock' ? 'You Win! Paper beats Rock.' : 'You Lose! Scissors beats Paper.');
            return computerSelection === 'rock' ? 1 : 0;
        
        case 'scissors':
            p.textContent = computerSelection === 'paper' ? 'You Win! Scissors beats Paper.' : 'You Lose! Rock beats Scissors.';
            div.appendChild(p);
            console.log(computerSelection === 'paper' ? 'You Win! Scissors beats Paper.' : 'You Lose! Rock beats Scissors.');
            return computerSelection === 'paper' ? 1 : 0; 
    }
};

let declareWinner = (playerScore, computerScore) => {
    const div = document.querySelector('div');
    const p = document.createElement('p');
    if (playerScore === 5) {
        p.textContent = `You win, your score: ${playerScore} computer score ${computerScore}`;
        div.appendChild(p);
    } else if (playerScore < computerScore) {   
        p.textContent = `You lose, your score: ${playerScore} computer score ${computerScore}`;
        div.appendChild(p);
    } else {
        console.log('The overall result is a Draw!');
    }
};

let getComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// let runGame = () => {
//     let playerScore = 0,
//     computerScore = 0,
//     draws = 0;
    
//     for (let i = 0; i < 5; i++) {
//         let playerSelection;
//         do {
//             playerSelection = prompt('Pick Rock, Paper or scissors:').toLowerCase()
//         } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');
//         result = playRound(playerSelection, getComputerChoice());
        // switch(result) {
        //     case 1:
        //         playerScore += 1;
        //         continue;
        //     case 0:
        //         computerScore += 1;
        //         continue;
        //     default:
        //         draws += 1;
        // }
//     }
//     declareWinner(playerScore, computerScore)
// };

// runGame()

let playGame = () => {
    let playerScore = 0,
    computerScore = 0,
    draws = 0;
        // buttons is a node list. It looks and acts much like an array.
        const buttons = document.querySelectorAll('button');
        // we use the .forEach method to iterate through each button
        buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
            let result = playRound(button.id, getComputerChoice());
            switch(result) {
                case 1:
                    playerScore += 1;
                    break;
                case 0:
                    computerScore += 1;
                    break;
                default:
                    draws += 1;
            } 
            if (playerScore === 5 || computerScore === 5) {
                declareWinner(playerScore, computerScore);

            }   
        });
        
    });
};

playGame()