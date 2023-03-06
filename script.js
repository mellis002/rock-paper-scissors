game()

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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        
        playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors");
        computerSelection = getComputerChoice();

        let result = playRound(playerSelection,computerSelection);
        console.log(result);
        if (result.includes("Win")) {
            playerScore = ++playerScore;
        } else if (result.includes("Lose")) {
            computerScore = ++computerScore;
        }
        if (i===4) {
            console.log("The final score is Computer: " + computerScore + " vs Player: " + playerScore)
        }
    }
}


