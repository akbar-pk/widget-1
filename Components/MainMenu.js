const template = document.createElement("template");
template.innerHTML = `
<style>button {color: red}</style>
<button onclick="attributeChangedCallback()">
    <input type="checkbox" />
    <slot></slot>
</button>`;

class MainMenu extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));
        
        
    }

    static get observedAttributes() {
        return ["checked"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === "checked") {
            this.updateChecked(newValue);
        }
        console.log("name, oldValue, newValue", name, oldValue, newValue)
    }

    connectCallback() {
        console.log("Connected");
    }

    disconnectCallback() {
        console.log("disconnected");
    }

    updateChecked(value) {
        this.checkbox.checked = value != null && value !== "false"
    }

    alertFunc() {
        alert("testing....");
    }
}

customElements.define("main-menu", MainMenu);