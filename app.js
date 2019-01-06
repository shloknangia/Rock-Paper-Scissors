// console.log("Hello");
const userScores = 0;
const compScores = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}
getComputerChoice();

function game(userChoice){
	// console.log(userChoice);
	const computerChoice = getComputerChoice();
	console.log(computerChoice)
	switch(userChoice + computerChoice){
		case 'rs':
		case 'pr':
		case 'sp':
			console.log("USER WINS");
			break;
		case 'rp':
		case 'ps':
		case 'sp':
			console.log("USER LOSES");
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			console.log("DRAW");
			break;
	}

}


function main(){
	rock_div.addEventListener('click', function() {
		console.log("rock clicked");
		game("r");
	})

	paper_div.addEventListener('click', function() {
		console.log("paper clicked");
		game("p");
	})
	scissor_div.addEventListener('click', function() {
		console.log("scissor clicked");
		game("s");
	})

}

main();