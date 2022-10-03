export function init() {
  class CountdownEl extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    timeleft: string;

    constructor() {
      super();
      this.render();
    }
    render() {
      let countdownEl = document.createElement("div");

      let timeLeft = 3;
      let timer = setInterval(function () {
        if (timeLeft <= 0) {
          clearInterval(timer);
        }
        countdownEl.textContent = timeLeft.toString();
        timeLeft -= 1;
      }, 1000);

      this.timeleft = `${timeLeft.toString()}`;

      let style = document.createElement("style");
      countdownEl.className = "countdown";
      this.textContent = style.textContent = `
             
              .countdown{
              text-align: center;
              font-size: 75px;
              margin: 0px;
              padding:0px;
              font-family: 'Poppins', sans-serif;
              font-weight: bold;
              margin-bottom: 25px;
              color: #009048;
  
  
              }
  
              @media (min-width: 960px) {
                  .countdown {
                      font-size: 80px;
                  }
              `;
      this.shadow.appendChild(style);
      this.shadow.appendChild(countdownEl);
    }
  }

  customElements.define("custom-countdown", CountdownEl);
}
