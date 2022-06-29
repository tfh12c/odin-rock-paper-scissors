function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3); // generates random number 0-2
    
    // assigning random number to string value rock/paper/scissors
    switch (randomNumber) {
        case 0: 
            return "ROCK"
        case 1:
            return "PAPER"
        case 2: 
            return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection) {
        return "You tied."
    }
    if ( //Player Wins Logic
        (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK")
    ) {

        return `You win! ${playerSelection} beats ${computerSelection}!`
    }
    if ( //Computer Wins Logic
        (computerSelection === "ROCK" && playerSelection.toUpperCase() === "SCISSORS") ||
        (computerSelection === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection.toUpperCase() === "ROCK")
    ) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) { // for loop to create 5 round game

        // prompt user to pick rock/paper/scissors
        let playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
        
        // assign computerPlay() to local variable
        const computerSelection = computerPlay();

        // call playRound() and assign to local variable
        const currentRound = playRound(playerSelection, computerSelection);

        console.log(currentRound);
    }
}

game();