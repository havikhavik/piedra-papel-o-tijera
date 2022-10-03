export function init() {
  class PlayEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      let shadow = this.attachShadow({ mode: "open" });
      let style = document.createElement("style");

      let containerEl = document.createElement("div");
      containerEl.className = "container";

      const rockURL = require("url:../images/piedra.png");
      const paperURL = require("url:../images/papel.png");
      const scissorsURL = require("url:../images/tijera.png");

      let rockEl = document.createElement("img");
      rockEl.className = "rock-style";
      rockEl.src = rockURL;

      let paperEl = document.createElement("img");
      paperEl.className = "paper-style";
      paperEl.src = paperURL;

      let scissorsEl = document.createElement("img");
      scissorsEl.className = "scissors-style";
      scissorsEl.src = scissorsURL;

      style.textContent = `

            .container{
                display:flex;
                flex-direction:row;
                justify-content:center;
            }
  
  
              .rock-style{
                width:56px;
                height:125px;
                margin:  0px 46px;

  
              }
              .paper-style{
                width:56px;
                height:125px;
  
              }
              .scissors-style{
                width:56px;
                height:125px;
  
              }

              @media (min-width: 960px) {

                html, body {
                  margin: 0;
                  padding: 0;
                
                  width: 100%;
                  height: 100%;
                  overflow-y: hidden;
                  overflow-x: hidden;

                
                }
                .rock-style, .paper-style, .scissors-style {
                    width:79px;
                    height:181px;

                }

                .rock-style{
                    margin:  0px 70px;

                }

                }
  
  
  
  
              `;

      shadow.appendChild(style);
      shadow.appendChild(containerEl);
      containerEl.appendChild(scissorsEl);
      containerEl.appendChild(rockEl);
      containerEl.appendChild(paperEl);
    }
  }

  customElements.define("custom-play", PlayEl);
}
