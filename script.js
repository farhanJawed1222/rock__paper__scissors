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
        display_message.textContent = `you won ${humanChoice} beats ${computerChoice}`;

    }
    // computer winning condition
    else {
        computerScore += 1;
        display_message.textContent = `you lost ${computerChoice} beats ${humanChoice}`;
    }

    display_score.textContent = `Human: ${humanScore} and Computer: ${computerScore}`;


    if (computerScore === 5 || humanScore === 5) {
        if (humanScore > computerScore) {
            display_message.textContent = "You are the winner";
            // appending the reset button to paragraph
            display_message.appendChild(reset_span);
        }
        else {
            display_message.textContent = "You have lost the game ";
            // appending the reset button to paragraph
            display_message.appendChild(reset_span);
        }
        buttons.removeEventListener("click", handleClick);
    }
}

//creating a reset button

// create a span and button and append it to display_message(p)
const reset_span = document.createElement("span");
reset_span.classList.add("reset__container");

const reset_btn = document.createElement("button");
reset_btn.classList.add("reset__button");
reset_btn.textContent = "Restart";
reset_span.appendChild(reset_btn);


// function to restart game
function restart() {
    humanScore = 0;
    computerScore = 0;
    display_message.textContent = "";
    display_score.textContent = `Human: ${humanScore} and Computer: ${computerScore}`;
    buttons.addEventListener("click", handleClick);
}

// attach restart event listener to reset_btn
reset_btn.addEventListener("click", restart);