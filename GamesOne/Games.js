// Interactive Game

let playGame = confirm("Shall we play rock, paper, or scissors?")
if(playGame){
    let playChoice = prompt("Please enter rock, paper, or scissors.")
    if(playChoice){
        let playerOne = playChoice.trim().toLowerCase()
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1)

            console.log(computerChoice)

            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper" 
            : "scissors"
            //  if(computer === playChoice){
            //     alert("You just won $5 keep playing and win more")
            //  }else{
            //     alert("Sorry, try again")
            //  }
            //  console.log(computer)
            
            // Here is a ternary operator (if( playerOne ==== computer then))
            let result = playerOne === computer ? "Tie game!"
            : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            :  playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            :  playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer} \nPlayerOne wins!`
            alert(result)
            let playAgain = confirm("Do you want to play again?")
            // ternary operator i.e if playAgain = true location.reload
            playAgain ? location.reload() : alert("Ok, thank for playing")
        } else {
            alert("You didn't enter rock, paper, scissor.")
        }
    }else{
        alert(" I guess you changed your mind. Maybe next time")
    }
}else {
    alert("Ok, maybe next time.")
}