let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById(".playerScore");
const computerScore_span = document.getElementById(".computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result");
const rock_div = document.querySelector("r");
const paper_div = document.querySelector("p");
const scissors_div = document.querySelector("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(player, computer) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(player)}$(smallPlayerWord) beats ${convertToWord(computer)}$(smallComputerWord). You win!`;
  playerChoice_div.classList.add('blue-glow');
  setTimeout(() => playerChoice_div.classList.remove('blue-glow'), 300);
}

function lose(player, computer) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  computerScore++;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(player)}$(smallPlayerWord) loses ${convertToWord(computer)}$(smallComputerWord). You lost...`;
  playerChoice_div.classList.add('red-glow');
  setTimeout(() => playerChoice_div.classList.remove('red-glow'), 300);
}

function draw(player, computer) {
  const smallPlayerWord = "player".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const playerChoice_div = document.getElementById(playerChoice);
  result_p.innerHTML = `${convertToWord(player)}$(smallPlayerWord) equals ${convertToWord(computer)}$(smallComputerWord). It's a draw.`;
  playerChoice_div.classList.add('grey-glow');
  setTimeout(() => playerChoice_div.classList.remove('grey-glow'), 300);
}


function game(playerChoice) {
  const computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case "rs":
    case "pr":    
    case "sp":
      win(playerChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(playerChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(playerChoice, computerChoice);
      break;
  }
}


function main() {
  rock_div.addEventListener('click', () => game("r"));

  paper_div.addEventListener('click', () => game("p"));

  scissors_div.addEventListener('click', () => game("s"));
}

main();
