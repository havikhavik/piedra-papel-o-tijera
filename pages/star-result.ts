const lose = require("url:../images/lose-star.png");
const win = require("url:../images/win-star.png");
const tie = require("url:../images/tie-star.png");

customElements.define(
  "result-img",
  class extends HTMLElement {
    shadow: ShadowRoot;
    result: "win" | "lose" | "tie";

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.result = this.getAttribute("result") as "win" | "lose" | "tie";
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
            *{
                box-sizing: border-box;
            }
            div{
                width: 254px;
                height: 259px;
            }
            .result{
                width: 100%;
                height: 100%;
            }
            .text{
                position: relative;
                text-align: center;
                top: -166px;
                right: -67px;
                font-weight: normal;
                font-family: Odibee Sans;
                font-size: 55px;
                color: #fff;
                display: inline;
                margin: 0;
            }
            `;
      const div = document.createElement("div");
      var imageURL: string = "";
      if (this.result == "win") {
        imageURL = win;
      } else if (this.result == "lose") {
        imageURL = lose;
      } else {
        imageURL = tie;
      }
      div.innerHTML = `
                <img class="result" src="${imageURL}">
                `;

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
);
