const choices = ['rock', 'paper', 'scissors'];

let randomIndex = Math.floor(Math.random() * 3); // 0 - 2;
let computerChoice = choices[randomIndex];


let computerPoints = 0;
let userPoints = 0;

let scoreDiv = document.querySelector("#score");
// let buttons = document.querySelectorAll('.btn');
let result = document.querySelector("#result");
const usernameInput = document.querySelector('#username');
let username = usernameInput.value
usernameInput.addEventListener("change", e => {
  username = e.target.value;
})
console.log(username)

localStorage.setItem('username', username)


function score() {
  scoreDiv.innerHTML = `${userPoints} - ${computerPoints}`
}

setInterval(score, 50);

function convert(word) {
  if(word === 'rock') return '<i class="fa-solid fa-hand-back-fist"></i>';
  if(word === 'paper') return '<i class="fa-solid fa-hand"></i>'
  if(word === 'scissors') return '<i class="fa-solid fa-hand-scissors"></i>'
}

function win(btn) {
  // alert("You win!")
  // increase userPoints
  userPoints += 1;
  // update result element
  result.innerHTML = `<p>You win!</p>`
  // pass in userChoice, use to get id of button to change the class
  let bn = document.querySelector(`#${btn}`);
  bn.classList.remove('btn');
  bn.classList.add('green');
  setTimeout(() => {
    bn.classList.add('btn');
    bn.classList.remove('green');
  }, 1200)

}

function lose(btn) {
  // alert('you lose!')
  // increase computerPoints
  computerPoints += 1;
  result.innerHTML = `<p>You lose...</p>`

  // change the userChoice to red
  let bn = document.querySelector(`#${btn}`);
  bn.classList.remove('btn');
  bn.classList.add('red');
  setTimeout(() => {
    bn.classList.add('btn');
    bn.classList.remove('red');
  }, 1200)
}

function draw(btn) {
  result.innerHTML = `<p>It's a tie!</p>`

  // change user choice to gray color
  let bn = document.querySelector(`#${btn}`);
  bn.classList.remove('btn');
  bn.classList.add('gray');
  setTimeout(() => {
    bn.classList.add('btn');
    bn.classList.remove('gray');
  }, 1200)
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

  // determine winner - set score
  if(userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper') {
    win(userChoice)
  } else if(userChoice === computerChoice) {
    draw(userChoice)
  } else {
    lose(userChoice);
  }

  function continueGame() {
    randomIndex = Math.floor(Math.random() * 3) // returns 0-2
    computerChoice = choices[randomIndex];
    box.style.display = "none";
  }

  setTimeout(continueGame, 1200)
}
