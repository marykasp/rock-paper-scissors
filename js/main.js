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

setInterval(score, 50)

function game(userChoice) {
  let box = document.querySelector(".challenge");
  box.style.display = 'flex';

  const playerObject = document.querySelector('.user-object');
  if(userChoice === 'rock') {
    playerObject.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
  } else if(userChoice === 'paper') {
    playerObject.innerHTML = '<i class="fa-solid fa-hand"></i>'
  } else if(userChoice === 'scissors') {
    playerObject.innerHTML = '  <i class="fa-solid fa-hand-scissors"></i>'
  }

  const computerObject = document.querySelector('.computer-object')
}
