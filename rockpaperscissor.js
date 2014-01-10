/*var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}*/

var compare = function(choice1,choice2){ 
    if(choice2 == choice1){
        
        return 'The result is a tie!'; 
    }

    }
if (choice1 == "rocks") {
     if (choice2 == "scissors") {
         return "scissors wins";
     } else {
         return "paper wins";
}
}
if(choice1 == "paper" ){
            if(choice2 == "scissors"){
                return "scissors wins";
            }
            else if(choice2 == "rock"){
                return "paper wins";
            }
        }
