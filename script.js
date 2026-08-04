function getComputerChoice(){
    // gives random number between 0, 1 and 2
    let random_number = Math.floor(Math.random() * 3);
    if(random_number == 0){
        return "Rock";
    }
    else if(random_number == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
console.log(getComputerChoice());
