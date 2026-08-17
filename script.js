// get the reference of all three buttons
const rock_btn = document.querySelector(".rock__btn");
const paper_btn = document.querySelector(".paper__btn");
const scissors_btn = document.querySelector(".scissors__btn");


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

    //this loop will keep executing until the choice is between rock/ paper/scissors
    while(true){

        // Enter your correct choice
        let choice = prompt("Enter choice (rock/paper/scissors)").toLowerCase();
        if(choice == "rock" || choice == "paper" || choice == "scissors"){
            return choice;
        }
        else{
            // Ask for valid choice
             console.log("Invalid choice! Try again.");
        }
    }
}

// function to run this game for n number of time and decide winner
function playGame() {

    // store points for Human and computer
    let Human_score = 0, Computer_score = 0;

    // function to give the winner for each round
    function playRound(computerChoice, humanChoice) {

        // check for tie case
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }

        // check for all the combination in which human will win
        else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
            Human_score += 1;
            console.log("you won " + humanChoice + " beats " + computerChoice);
        }

        //check for all the combination in which computer will win
        else {
            Computer_score += 1;
            console.log("you lost " + computerChoice + " beats " + humanChoice);
        }
    }
    // call playRound function 5 time
    // for (let i = 0; i < 5; i++) {

        // store computer choice that will return from getComputerChoice()
        const computer_selection = getComputerChoice().toLowerCase();

        // store human choice that will return from getHumanChoice()
        const human_selection = getHumanChoice();

        // call playRound function
        playRound(computer_selection, human_selection);
        console.log("Human: " + Human_score + " Computer: " + Computer_score);
    // }

    // give the final result
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

playGame();