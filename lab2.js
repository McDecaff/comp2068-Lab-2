/**
 * Created by mcdec on 2016-09-15.
 */

var userChoice;
var userChoice ;
var computerChoice ;
var winner = "";
var playerWins = 0;
var cpuWins = 0;
var draws = 0;
var choiceCheck ;
var endless = false;

    choiceCheck=false;
    userChoice = prompt("Rock, Paper, or Scissors?")
    computerChoice = Math.floor((Math.random() * 3) + 1);

    while (choiceCheck==false) {
        if (userChoice == "rock" || userChoice == "Rock" || userChoice == "r" || userChoice == "R") {
            userChoice = 'Rock';
            choiceCheck=true;
        } else if (userChoice == "paper" || userChoice == "Paper" || userChoice == "p" || userChoice == "P") {
            userChoice = 'Paper';
            choiceCheck=true;
        } else if (userChoice == "scissors" || userChoice == "Scissors" || userChoice == "s" || userChoice == "S") {
            userChoice = 'Scissors';
            choiceCheck=true;
        }else{
            choiceCheck=false;
            userChoice = prompt("Invalid Response! \nRock, Paper, or Scissors?")
        }
    }


    if (computerChoice == 1) {
        computerChoice = "Rock";
    } else if (computerChoice == 2) {
        computerChoice = "Paper";
    } else if (computerChoice == 3) {
        computerChoice = "Scissors";
    }

    console.log("You: " + userChoice);
    console.log("Computer: " + computerChoice);

    function compare(player, cpu) {
        if (player == "Rock") {
            if (cpu == "Rock") {
                console.log("The result is a draw!");
                return ("draw");
            } else if (cpu == "Paper") {
                console.log("Paper wins!");
                return ("cpu");
            } else if (cpu == "Scissors") {
                console.log("Rock Wins!");
                return ("player");
            }
        } else if (player == "Paper") {
            if (cpu == "Rock") {
                console.log("Paper wins!");
                return ("player");
            } else if (cpu == "Paper") {
                console.log("The result is a draw!");
                return ("draw");
            } else if (cpu == "Scissors") {
                console.log("Scissors wins!");
                return ("cpu");
            }
        } else if (player == "Scissors") {
            if (cpu == "Rock") {
                console.log("Rock wins!");
                return ("cpu");
            } else if (cpu == "Paper") {
                console.log("Scissors Wins!");
                return ("player");
            } else if (cpu == "Scissors") {
                console.log("The result is a draw!");
                return ("draw");
            }
        }
    }

    winner = compare(userChoice, computerChoice);

    if (winner == "player") {
        playerWins += 1;
        winner = "";
    } else if (winner == "cpu") {
        cpuWins += 1;
        winner = "";
    } else if (winner == "draw") {
        draws += 1;
    }

    console.log("*************************\n* You: " + playerWins + " CPU: " + cpuWins + " Draw: " + draws + " *\n*************************");
