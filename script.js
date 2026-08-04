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

