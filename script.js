function getComputerChoice() {
    // gives random number between 0, 1 and 2
    let random_number = Math.floor(Math.random() * 3);
    if (random_number == 0) {
        return "Rock";
    }
    else if (random_number == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// function to take human choice
function getHumanChoice() {
    let choice = prompt("Enter choice (rock/paper/scissors)").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    }
    else {
        return "Invalid choice";
    }
}

function playRound() {
    // store computer choice that will return from getComputerChoice()
    const computer_selection = getComputerChoice().toLowerCase();

    // store human choice that will return from getHumanChoice()
    const human_selection = getHumanChoice();

    // If human has input invalid choice
    if (human_selection === "Invalid choice") {
        return "Invalid choice";
    }
    // tie case
    else if (human_selection === computer_selection) {
        // no change
    }

    // check for all the combination in which human will win
    else if (human_selection === "rock" && computer_selection === "scissors" || human_selection === "paper" && computer_selection === "rock" || human_selection === "scissors" && computer_selection === "paper") {
        Human_score += 1;
    }

    //check for all the combination in which computer will win
    else {
        Computer_score += 1;
    }
}

// function to run this game for n number of time and decide winner
function playGame() {
   
    // call playRound function 5 time
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Human: " + Human_score + " Computer: " + Computer_score);
    }

    if (Human_score == Computer_score) {
        console.log("Its a tie");
    }
    else if (Human_score > Computer_score) {
        console.log("You won the game by " + Human_score + " vs " + Computer_score);
    }
    else {
        console.log("YOU lost the game by " + Human_score + " vs " + Computer_score);
    }
}

 // store points for Human and computer
let Human_score = 0, Computer_score = 0;

playGame();