export function init() {
  class TitleEl extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      let titleEl = document.createElement("h1");
      let style = document.createElement("style");
      titleEl.textContent = this.textContent;
      titleEl.className = "title-style";
      style.textContent = `
           
            .title-style{
            text-align: center;
            font-size: 69px;
            margin: 0px;
            padding:0px;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            color: #009048;


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

                .title-style {
                    font-size: 80px;
                }
                
            `;
      this.shadow.appendChild(style);
      this.shadow.appendChild(titleEl);
    }
  }

  customElements.define("custom-title", TitleEl);
}
