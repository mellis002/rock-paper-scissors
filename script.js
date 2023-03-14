//setup the game div for input
const game = document.querySelector('#game');

// setup the score div
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
let playerScoreNum = 0;
let computerScoreNum = 0;

// setup the match div
const match = document.querySelector('#match');

// setup the buttons for input
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // run the game and update the outcome
        let result = playRound(button.id,getComputerChoice());
        game.textContent = result;

        // update the score
        if (result.includes("Win")) {
            playerScoreNum = ++playerScoreNum;
        } else if (result.includes("Lose")) {
            computerScoreNum = ++computerScoreNum;
        }
        playerScore.textContent = "Player Score: " + playerScoreNum;
        computerScore.textContent = "Computer Score: " + computerScoreNum;

        // final match report
        if (playerScoreNum===5 | computerScoreNum===5) {
            match.textContent = "The final score is Computer: " + computerScoreNum + " vs Player: " + playerScoreNum;
            buttons.forEach(button => button.disabled = "true");
        }
    })
})


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie Game!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i=0; i<5; i++) {
        
//         playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors");
//         computerSelection = getComputerChoice();

//         let result = playRound(playerSelection,computerSelection);
//         console.log(result);
//         if (result.includes("Win")) {
//             playerScore = ++playerScore;
//         } else if (result.includes("Lose")) {
//             computerScore = ++computerScore;
//         }
//         if (i===4) {
//             console.log("The final score is Computer: " + computerScore + " vs Player: " + playerScore)
//         }
//     }
// }


