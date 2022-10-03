export function initInstructions(params?) {
  const div = document.createElement("div");
  const imageURL = require("url:../images/fondo.jpg");

  div.innerHTML = `
    <div class="container">
  
    <div class="page-container">
    <another-title>Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</another-title>
    <custom-button class="play-button">¡Jugar!</custom-button>
    <custom-play>  </custom-play>
    </div>
  
    </div>
  
    `;

  // div.style.backgroundImage = `url(${imageURL})`;

  const buttonEl = div.querySelector(".play-button");

  buttonEl.addEventListener("click", () => {
    const bodyEl = document.querySelector("body");

    params.goTo("/play");
    bodyEl.style.display = "initial";
  });

  return div;
}
