import { state } from "../src/state";

export function initPlay(params?) {
  const div = document.createElement("div");
  const imageURL = require("url:../images/fondo.jpg");

  div.innerHTML = `
      <div class="container">
    
      <custom-header></custom-header>
      <div class="page-container__countdown">
     
      <custom-countdown class="countdown"></custom-countdown>





      <div class="move__player-hands">
      <my-hands class="move__player-play" material="piedra"></my-hands>
      <my-hands class="move__player-play" material="papel"></my-hands>
      <my-hands class="move__player-play" material="tijeras"></my-hands>
      </div>


      </div>
    
      </div>
    
      `;

  const style = document.createElement("style");
  style.innerHTML = `
            .player-play.selected {
                animation: move-up 300ms forwards;
            }
            @keyframes move-up {
                0% {
                    opacity: 0.5;
                    transform: translateY(0);
                }
                100% {
                    opacity: 1;
                    transform: translateY(-40px);
                }
            }
            
            .player-play{
              cursor: pointer;
                position: relative;
                top: 15px;
                opacity: 0.5;
            }
        `;

  div.querySelector(".move__player-hands").appendChild(style);

  const playerPlaysArray = div.querySelector(".move__player-hands").children;
  for (let p of playerPlaysArray) {
    p.classList.add("player-play");

    p.addEventListener("click", (e) => {
      const thisPlayEl: any = e.target;
      if (thisPlayEl.classList.contains("selected")) {
        thisPlayEl.classList.remove("selected");
      } else {
        for (let i of playerPlaysArray) {
          if (i.classList.contains("selected")) {
            i.classList.remove("selected");
          }
        }
        thisPlayEl.classList.add("selected");
        const playerPlay = thisPlayEl.material;
        state.setPlayerPlay(playerPlay);
      }
    });
  }

  function checkPlayerHasPlayed() {
    let cs = state.getState();

    const playerPlay = cs.game.miPlay;

    if (playerPlay == "") {
      params.goTo("/instructions");

      bodyEl = document.querySelector("body");

      bodyEl.style.display = "flex";
      bodyEl.style.justify.content = "center";
      bodyEl.style.align.items = "flex-end";
    }
  }

  function resultCountDown() {
    let timeLeft = 2;

    let timer = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timer);

        params.goTo("/result");
      }
      timeLeft -= 1;
    }, 1000);
  }

  function countDown() {
    let timeLeft = 3;

    let timer = setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timer);
        state.setComputerPlay();

        let currentState = state.getState();

        let result = state.whoWins(currentState.game);

        checkPlayerHasPlayed();

        const playerPlay = currentState.game.miPlay;
        const computerPlay = currentState.game.computerPlay;

        div.innerHTML = `
        <div class="hands-container">

        <div class="move__hands-selected game__animation-down">
            <my-hands material="${computerPlay}" computer="true"></hands>
        </div>
        <div class="move__hands-selected game__animation-up">
            <my-hands material="${playerPlay}"></my-hands>
        </div>
        </div>

        `;

        state.scoreModifier(result);

        resultCountDown();
      }
      timeLeft -= 1;
    }, 1000);
  }

  countDown();

  // div.style.backgroundImage = `url(${imageURL})`;
  div.style.height = "100vh";

  return div;
}
