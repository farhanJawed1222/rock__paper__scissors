// get the reference of all three buttons
const buttons = document.querySelector(".rps__container");

//name the handler function so both calls can reference it.
function handleClick(e) {
    e.preventDefault();
    // storing human choice
    const btn = e.target.closest("button");
    // no button was clicked — do nothing, no error
    if (btn === null) return;

    let humanChoice = btn.textContent;
    // storing computer choice
    let computerChoice = getComputerChoice();

    playRound(computerChoice, humanChoice);

}

// add event listener to button parent div
buttons.addEventListener("click", handleClick);

// get computer choice
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

const message_container = document.querySelector(".message__container");

// creating a p element to display message
const display_message = document.createElement("p");
display_message.classList.add("display__winner");
message_container.appendChild(display_message);

// creating a p element to display score
const display_score = document.createElement("p");
display_score.classList.add("display__score");
message_container.appendChild(display_score);


//creating a reset button

const reset_container = document.querySelector(".reset__container");

const reset_btn = document.createElement("button");
reset_btn.classList.add("reset__button");
reset_btn.textContent = "Restart";


// function to restart game
function restart() {
    humanScore = 0;
    computerScore = 0;
    display_message.textContent = "";
    display_score.textContent = `Human: ${humanScore} and Computer: ${computerScore}`;
    buttons.addEventListener("click", handleClick);
    reset_btn.remove();
}

// attach restart event listener to reset_btn
reset_btn.addEventListener("click", restart);
// scores for both human and computer
let humanScore = 0, computerScore = 0;

// function gives the winner for each round
function playRound(computerChoice, humanChoice) {

    // tie condition
    if (computerChoice === humanChoice) {
        display_message.textContent = `Its a tie`;
    }

    // human winning condition
    else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore += 1;
        display_message.textContent = `You won ${humanChoice} beats ${computerChoice}`;

    }
    // computer winning condition
    else {
        computerScore += 1;
        display_message.textContent = `You lost ${computerChoice} beats ${humanChoice}`;
    }

    display_score.textContent = `Human: ${humanScore} and Computer: ${computerScore}`;

    // check for max 5 round win
    if (computerScore === 5 || humanScore === 5) {
        if (humanScore > computerScore) {
            display_message.textContent = "You are the winner";

        }
        else {
            display_message.textContent = "You have lost the game ";
        }
        reset_container.appendChild(reset_btn);
        buttons.removeEventListener("click", handleClick);
    }
}

