let turnoActual = `Player X`;
let numberOfTurns = 0;
const winnerAnnounce = document.getElementById(`winAnnounce`);
const turnAnnounce = document.getElementById(`turnAnnounce`);
const boardButtons = document.querySelectorAll(`.boardButton`);

function playerChoice(e){
  const isPlayerXTurn = turnoActual == `Player X` && e.target.innerText == ``;
  const isPlayerOTurn = turnoActual == `Player O` && e.target.innerText == ``;
  const aChosenCell = e.target.innerText != `` && winnerAnnounce.innerText == `¿Jugamos?`;
  
  if(aChosenCell) alert(`Esta casilla ya esta elegida!!!`);
  if(isPlayerXTurn) {
    e.target.classList.remove(`O`);
    e.target.classList.add(`X`);
    e.target.innerText = `X`;
    numberOfTurns++;
    turnoActual = `Player O`;
    turnAnnounce.innerText = `Tu turno ${turnoActual}`;
  }
  if(isPlayerOTurn) {
    e.target.classList.remove(`X`);
    e.target.classList.add(`O`);
    e.target.innerText = `O`;
    numberOfTurns++;
    turnoActual = `Player X`;
    turnAnnounce.innerText = `Tu turno ${turnoActual}`;
  }
}

function winCheck(e){
    const winCondition1 = (boardButtons[0].innerText == boardButtons[1].innerText) && (boardButtons[1].innerText == boardButtons[2].innerText) && boardButtons[0].innerText != ``;
    const winCondition2 = (boardButtons[3].innerText == boardButtons[4].innerText) && (boardButtons[4].innerText == boardButtons[5].innerText) && boardButtons[3].innerText != ``;
    const winCondition3 = (boardButtons[6].innerText == boardButtons[7].innerText) && (boardButtons[7].innerText == boardButtons[8].innerText) && boardButtons[6].innerText != ``;
    const winCondition4 = (boardButtons[0].innerText == boardButtons[3].innerText) && (boardButtons[3].innerText == boardButtons[6].innerText) && boardButtons[0].innerText != ``;
    const winCondition5 = (boardButtons[1].innerText == boardButtons[4].innerText) && (boardButtons[4].innerText == boardButtons[7].innerText) && boardButtons[1].innerText != ``;
    const winCondition6 = (boardButtons[2].innerText == boardButtons[5].innerText) && (boardButtons[5].innerText == boardButtons[8].innerText) && boardButtons[5].innerText != ``;
    const winCondition7 = (boardButtons[0].innerText == boardButtons[4].innerText) && (boardButtons[4].innerText == boardButtons[8].innerText) && boardButtons[0].innerText != ``;
    const winCondition8 = (boardButtons[2].innerText == boardButtons[4].innerText) && (boardButtons[4].innerText == boardButtons[6].innerText) && boardButtons[2].innerText != ``;
    if(winCondition1 || winCondition2 || winCondition3 || winCondition4 || winCondition5 || winCondition6 || winCondition7 || winCondition8) {
      winnerAnnounce.classList.add(`${e.target.innerText}`)
      winnerAnnounce.innerText = `¡Has ganado player ${e.target.innerText}!`;
      turnAnnounce.classList.remove(`visible`)
      turnAnnounce.classList.add(`hidden`);
    }
}

function drawCheck(){
  const draw = winnerAnnounce.innerText == `¿Jugamos?` && numberOfTurns == 9;
  if(draw){
        winnerAnnounce.innerText = `Draw!!!`;
        turnAnnounce.classList.remove(`visible`)
        turnAnnounce.classList.add(`hidden`);
        setTimeout(()=>alert(`Habeis empatado!!! reseteando tabla....`),1000);
        setTimeout(()=>resetBoard(),1000);
      }
}

function endGame(){
  const endOfGame = winnerAnnounce.innerText.includes(`Has ganado`) || winnerAnnounce.innerText == `Draw!!!`;
  if(endOfGame) {
    alert(`La partida se ha terminado!`);
    resetBoard();
  }
}

function resetBoard(){
  for (const item of boardButtons) {
      item.innerText = ``;
  }
  winnerAnnounce.classList.remove(`X`, `O`);
  winnerAnnounce.innerText = `¿Jugamos?`;
  turnAnnounce.classList.add(`visible`);
  turnAnnounce.innerText = `Turno del player X`;
  turnoActual = `Player X`;
  numberOfTurns = 0;
}


document.querySelector(`#buttonsContainer`).addEventListener(`click`, playerChoice);
document.querySelector(`#buttonsContainer`).addEventListener(`click`, endGame);
document.querySelector(`#buttonsContainer`).addEventListener(`click`, winCheck);
document.querySelector(`#buttonsContainer`).addEventListener(`click`, drawCheck);
document.querySelector(`#resetButton`).addEventListener(`click`, resetBoard);




