export function initMainPage(params?) {
  const div = document.createElement("div");
  const imageURL = require("url:../images/fondo.jpg");

  div.innerHTML = `
  <div class="container">

  <div class="page-container">
  <custom-title>Piedra
  Papel o
  Tijera</custom-title>
  <custom-button class="start-button">Empezar</custom-button>
  <custom-play>  </custom-play>
  </div>

  </div>

  `;

  // div.style.backgroundImage = `url(${imageURL})`;

  const buttonEl = div.querySelector(".start-button");

  buttonEl.addEventListener("click", () => {
    params.goTo("/instructions");
  });

  return div;
}
