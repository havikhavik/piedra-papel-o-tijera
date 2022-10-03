import { state } from "../src/state";

export function initResult(params?) {
  const div = document.createElement("div");
  const currentState = state.getState();
  let playerWon = currentState.scores.win;
  let playerLose = currentState.scores.lose;
  let playerTie = currentState.scores.tie;
  let result = state.whoWins(currentState.game);

  function resultsToString() {
    playerWon = playerWon.toString();
    playerLose = playerLose.toString();
    playerTie = playerTie.toString();

    if (playerWon == 1) {
      playerWon = playerWon + " vez";
    } else {
      playerWon = playerWon + " veces";
    }
    if (playerLose == 1) {
      playerLose = playerLose + " vez";
    } else {
      playerLose = playerLose + " veces";
    }

    if (playerTie == 1) {
      playerTie = playerTie + " vez";
    } else {
      playerTie = playerTie + " veces";
    }
  }

  resultsToString();

  div.innerHTML = `
    <div class="container ${result}">
  
    <div class="page-container__result">

    <div class="result__container-star">
    <result-img result='${result}'>Perdiste</result-img>
    </div>


    <div class="result__container-score">
    <custom-anothertext>
    RESULTADOS:
    Ganaste: ${playerWon} <br> 
    Perdiste: ${playerLose}
    Empataste: ${playerTie}
    </custom-anothertext>
    </div>

    



    <custom-button class="start-button">Volver a Jugar</custom-button>
    </div>
  
    </div>
  
    `;

  state.refreshPlayerPlay();

  const buttonEl = div.querySelector(".start-button");

  buttonEl.addEventListener("click", () => {
    params.goTo("/instructions");
  });

  return div;
}
