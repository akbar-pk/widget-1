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

    hiddenModules() {
        const allMainModules = document.querySelectorAll(".prognosis_main_module");
        allMainModules.forEach(item => {
            item.classList.add("hidden_module")
        });
    }

    get isExpanded() {
        const menuItems = document.querySelectorAll(".prognosis_main_nav_item");
        menuItems.forEach(item => item.classList.remove("active"));

        switch (this.dataset.id) {
            case "newChat":
                this.hiddenModules();
                document.getElementById("prognosis_consultation_holder").classList.remove("hidden_module");
                document.getElementById("menu_item_new_chat").classList.add("active");
                break;
            case "medicalCoding":
                this.hiddenModules();
                document.getElementById("prognosis_medical_coding_holder").classList.remove("hidden_module");
                document.getElementById("menu_item_medical_coding").classList.add("active");
                break;
            case "explain":
                this.hiddenModules();
                document.getElementById("prognosis_explain_holder").classList.remove("hidden_module");
                document.getElementById("menu_item_explain").classList.add("active");
                
                break;
            
        }
        
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