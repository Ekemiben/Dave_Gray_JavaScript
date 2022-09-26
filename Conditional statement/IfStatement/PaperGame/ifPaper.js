

// Decision tree!
let playerOne = propmt("Enter name of your player")
let result

if (playerOne === computer){
    result = "You have won the game"
} else if (playerOne === "rock"){
    if(computer === "paper"){
        // Computer wins
    } else {
        // playerOne wins
    }
}else if (playerOne === "paper"){
    if(computer === "scissors"){
        // Computer wins
    } else {
        // playerOne wins
    }
}