// console.log("Hello");
let userScores = 0;
let compScores = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sup();
const smallCompWord = "comp".fontsize(3).sup();	

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if(letter === 'r') return "Rock";
	if(letter === 'p') return "Papers";
	if(letter === 's') return "Scissors";
}

function win(user, comp){
	console.log("USER WINS");
	userScores++;
	userScore_span.innerHTML = userScores;
	result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}. You
	 Win!!`
}

function lose(user, comp){
	console.log("USER LOSES");
	compScores++;
	compScore_span.innerHTML = compScores;
	result_div.innerHTML = `${convertToWord(user)}${smallUserWord} looses to ${convertToWord(comp)}${smallCompWord}. You lose!!`
}

function draw(user, comp){
	console.log("DRAW");
	result_div.innerHTML = `${convertToWord(user)}${smallUserWord} and ${convertToWord(comp)}${smallCompWord} are same. Its A Draw!!`
}

function game(userChoice){
	// console.log(userChoice);
	const computerChoice = getComputerChoice();
	console.log(computerChoice)
	switch(userChoice + computerChoice){
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice , computerChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice , computerChoice)
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice , computerChoice);
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