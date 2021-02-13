class Footer extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
               color: #fff;
           }
           :host {
               display: block;
               background-color: #34495e;
               color: white;
               width: 100%;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h4 {
               padding: 15px;
           }
       </style>
       <h4>&copy;2020.Build with <a href="http://github.com/muhammadluth" target="_blank"><strong>Muhammad Luthfi</strong></a></h4>`;
    }
}

window.customElements.define("footer-bar", Footer);