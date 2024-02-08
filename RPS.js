var choices = ['Rock','Paper','Scissors'];
var playerScore = 0;
var computerScore = 0;
var playerChoice;
var computerChoice;

var playerChoiceImage = document.getElementById('player-choice');
var computerChoiceImage = document.getElementById('computer-choice');
var playerTotalScore = document.getElementById('player-total-score');
var computerTotalScore = document.getElementById('computer-total-score');
var result = document.getElementById('result');


function setPlayerChoice(playerChoiceId) {
    playerChoice = playerChoiceId;
    if(playerChoice == 'Rock'){
        playerChoiceImage.src = '../assets/images2/Rock.png';
    }
    else if(playerChoice =='Paper') {
        playerChoiceImage.src = '../assets/images2/Paper.png';
    }
    else if(playerChoice =='Scissors') {
        playerChoiceImage.src = '../assets/images2/Scissors.png';
    }
}

function setComputerChoice() {
    var randomChoice = Math.floor(Math.random() * 3);
    computerChoice = choices[randomChoice];
    if(computerChoice == 'Rock'){
        computerChoiceImage.src = '../assets/images2/Rock.png';
    }
    else if(computerChoice =='Paper') {
        computerChoiceImage.src = '../assets/images2/Paper.png';
    }
    else if(computerChoice =='Scissors') {
        computerChoiceImage.src = '../assets/images2/Scissors.png';
    }
}

function checkWinner() {
    if(playerChoice == computerChoice) {
        result.innerText = 'Draw';
        result.style.color = 'aqua';
    }
    else if((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice == 'Scissors' && computerChoice == 'Paper')) {
        result.innerText = 'You Win!';
        result.style.color = 'lime';
        playerScore++;
        playerTotalScore.innerText = playerScore;
    }
    else if((playerChoice == 'Scissors' && computerChoice == 'Rock') || (playerChoice == 'Rock' && computerChoice == 'Paper') || (playerChoice == 'Paper' && computerChoice == 'Scissors')) {
        result.innerText = 'You lose...';
        result.style.color = 'red';
        computerScore++;
        computerTotalScore.innerText = computerScore;
    }
}

function playGame(playerChoiceId) {
    setPlayerChoice(playerChoiceId);
    setComputerChoice();
    checkWinner();
}

function resetGame() {
    var isReset = confirm('Are you sure that you want to reset ?');
    if(isReset == true) {
        playerChoiceImage.src = '';
        computerChoiceImage.src = '';
        playerScore = 0;
        computerScore = 0;
        playerTotalScore.innerText = playerScore;
        computerTotalScore.innerText = computerScore;
        result.innerText = 'Reset';
        result.style.color = 'gray';
    }
}
