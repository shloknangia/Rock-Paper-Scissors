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
	const userChoiceDiv = document.getElementById(user).classList;
	userScores++;
	userScore_span.innerHTML = userScores;
	result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}. You
	 Win!!`;
	userChoiceDiv.add('green-glow');
	setTimeout(() => userChoiceDiv.remove('green-glow'), 300)
}

function lose(user, comp){
	console.log("USER LOSES");
	const userChoiceDiv = document.getElementById(user).classList;
	compScores++;
	compScore_span.innerHTML = compScores;
	result_div.innerHTML = `${convertToWord(user)}${smallUserWord} looses to ${convertToWord(comp)}${smallCompWord}. You lose!!`;
	userChoiceDiv.add('red-glow');
	setTimeout(() => userChoiceDiv.remove('red-glow'), 300)
}

function draw(user, comp){
	console.log("DRAW");	
	const userChoiceDiv = document.getElementById(user).classList;
	result_div.innerHTML = `${convertToWord(user)}${smallUserWord} and ${convertToWord(comp)}${smallCompWord} are same. Its A Draw!!`;
	userChoiceDiv.add('gray-glow');
	setTimeout(() => userChoiceDiv.remove('gray-glow'), 300)
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
	rock_div.addEventListener('click', () => {
		console.log("rock clicked");
		game("r");
	})

	paper_div.addEventListener('click', () => {
		console.log("paper clicked");
		game("p");
	})
	scissor_div.addEventListener('click', () => {
		console.log("scissor clicked");
		game("s");
	})

}

main();