// import { increment, decrement, store, state } from "../store/counterSlice.js"

class MainMenuListItem extends HTMLLIElement {
    constructor() {
        super();
        this.style.position = "relative";
        this.toggleBtn = document.createElement("button");
        this.toggleBtn.style.position = "absolute";
        this.toggleBtn.style.border = "none";
        this.toggleBtn.style.background = "transparent";
        this.toggleBtn.style.width = "100%";
        this.toggleBtn.style.height = "100%";
        this.toggleBtn.style.left = "0";
        this.toggleBtn.style.top = "0px";
        this.toggleBtn.style.cursor = "pointer";
        this.toggleBtn.innerText = "";
        this.toggleBtn.addEventListener("click", () => {
            // this.dataset.expanded = !this.isExpanded;
            // store.dispatch(increment());
            
            // const state = store.getState();
            // store.subscribe((state) => {
            //     console.log("state", state);
            // })
            
            this.isExpanded
        });
        this.appendChild(this.toggleBtn);
        
    }

    get isExpanded() {
        console.log("this.dataset.id", this.dataset.id);
        return this.dataset.id
        // return this.dataset.expanded !== "false" && this.dataset.expanded != null;
    }

    static get observedAttributes() {
        return ["data-expanded"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // if(name === "checked") {
        //     this.updateChecked(newValue);
        // }
        console.log("name EXP, oldValue EXP, newValue EXP", name, oldValue, newValue);
        this.updateStyles()
    }

    connectedCallback() {
        this.updateStyles()
    }

    updateStyles() {
        console.log("coming");
        // const transform = this.isExpanded ? "rotate(90deg)" : "";
        // this.toggleBtn.style.transform = transform;
        // ;[...this.children].forEach(child => {
        //     if(child !== this.toggleBtn) {
        //         child.style.display = this.isExpanded ? "" : "none";
        //     }
        // })
    }
}

customElements.define("menu-list-item", MainMenuListItem, {
    extends: "li"
})