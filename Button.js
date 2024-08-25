// Button.js
class MaterialButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .material-button {
                    display: inline-block;
                    margin: 8px;
                    font-weight: 500;
                    color: #fff;
                    background-color: #eb6e75;
                    text-align: center;
                    text-decoration: none;
                    border: none;
                    border-radius: 4px;
                    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                    transition: background-color 0.3s, box-shadow 0.3s;
                }

                .material-button:hover {
                    background-color: #c95f63;
                    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
                }

                .material-button:active {
                    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
                }

                .small {
                    padding: 12px 24px;
                    font-size: 16px;
                }

                .medium {
                    padding: 16px 32px;
                    font-size: 18px;
                }

                .large {
                    padding: 20px 40px;
                    font-size: 24px;
                }
            </style>
            <a href="#" class="material-button"><slot></slot></a>
        `;
    }

    connectedCallback() {
        const link = this.shadowRoot.querySelector('a');
        if (this.hasAttribute('href')) {
            link.setAttribute('href', this.getAttribute('href'));
        }
        if (this.hasAttribute('size')) {
            link.classList.add(this.getAttribute('size'));
        }
        if (this.hasAttribute('new-window')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    }
}

customElements.define('material-button', MaterialButton);