function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0: 
            return "Rock"
        case 1:
            return "Paper"
        case 2: 
            return "Scissors"
    }
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("You tied.");
        return "You tied."
    }
    if ( //Player Wins Logic
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return `You win! ${playerSelection} beats ${computerSelection}!`
    }
    if ( //Computer Wins Logic
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Scissors" && playerSelection === "Paper") ||
        (computerSelection === "Paper" && playerSelection === "Rock")
    ) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "Paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));