const score = JSON.parse(localStorage.getItem('score')) || 
  {
    'Win': 0,
    'Lose': 0,
    'Tie': 0
  };

  
function updateScoreDisplay() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score['Win']}, Losses: ${score['Lose']}, Ties: ${score['Tie']}`;
}

function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = '';

  if (computerMove === playerMove) {
    result = "It's a Tie!";
    score['Tie'] += 1;
  } else if (
    (playerMove === 'Rock' && computerMove === 'Scissor') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissor' && computerMove === 'Paper')
  ) {
    result = "You win!";
    score['Win'] += 1;
  } else {
    result = "You lose!";
    score['Lose'] += 1;
  }

  moveDisplay(playerMove, computerMove);
  resultDisplay(result);

  updateScoreDisplay();

  console.log(JSON.stringify(score));

  localStorage.setItem('score', JSON.stringify(score));
  console.log(JSON.parse(localStorage.getItem('score')));


}

function reset(){
  score.Win = 0;
  score.Lose = 0;   
  score.Tie = 0;

  document.querySelector('.js-moves')
    .innerHTML = ' ';
  document.querySelector('.js-result')
    .innerHTML = ' ';

  console.log(JSON.stringify(score));
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreDisplay();
}

function pickComputerMove() {
  const randomNum = Math.random();
  if  (randomNum < 0.33) {
    return 'Rock';
  }
  else if (randomNum < 0.66) {
    return 'Paper';
  }
  else {
    return 'Scissor';
  }
}

function moveDisplay(playerMove, computerMove) {
  document.querySelector('.js-moves')
    .innerHTML = `You

      <img class="move-icon" src="images/${playerMove.toLowerCase()}-emoji.png">

      <img class="move-icon"src='images/${computerMove.toLowerCase()}-emoji.png'> 

      Computer`;
  }

function resultDisplay(result){
  document.querySelector('.js-result')
    .innerHTML = result;
}