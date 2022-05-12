const choices = ['rock', 'paper', 'scissors'];

let randomIndex = Math.floor(Math.random() * 3); // 0 - 2;
let computerChoice = choices[randomIndex];


let computerScore = 0;
let userScore = 0;

let scoreDiv = document.querySelector("#score");
let buttons = document.querySelectorAll('.btn')


function score() {
  scoreDiv.innerHTML = `${userScore} - ${computerScore}`
}

setInterval(score, 50);

function convert(word) {
  if(word === 'rock') return '<i class="fa-solid fa-hand-back-fist"></i>';
  if(word === 'paper') return '<i class="fa-solid fa-hand"></i>'
  if(word === 'scissors') return '<i class="fa-solid fa-hand-scissors"></i>'
}

function game(userChoice) {
  let box = document.querySelector(".challenge");
  box.style.display = 'flex';

  // display player choice
  const playerObject = document.querySelector('.user-object');
  playerObject.innerHTML = convert(userChoice)

  // display computer choice
  const computerObject = document.querySelector('.computer-object');
  computerObject.innerHTML = convert(computerChoice);
}
