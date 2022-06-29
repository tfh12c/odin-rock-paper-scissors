const computerChoice = ["Rock", "Paper", "Scissors"];

function computerPlay(computerChoice) {
    console.log(computerChoice[Math.floor(Math.random() * computerChoice.length)]);
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

computerPlay(computerChoice);