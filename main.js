// import * as Redux from "/store/Redux.js"
import { styles } from "./styles.js";
import { PROGNOSIS_AI_LOGO, CLOSE_ICON, MESSAGE_ICON, CHT_ICON, PROGNOSIS_LOGO, SMART_TASK_ICON, RIGHT_ARROW, LEFT_ARROW } from "./svgIcons.js";
// import "./Components/ExpandableList.js";
import "./Components/MainMenuListItem.js";
import "./Components/ChatModules/Consultation.js";
import "./Components/ChatModules/PreDefinedQuestions.js";
import "./Components/ChatModules/MedicalCoding.js";
import "./Components/ChatModules/Explain.js";
import "./Components/ChatModules/Guidelines.js";

class MessageWidget {
  constructor(options) { 
    this.from = options.from;
    this.defaultTheme = {
      primaryColor: "red",
      secondaryColor: "rgb(239, 241, 247)",
      sideMenuBgColor: "#F5F6F7",
      btnTextColor: "#ffffff",
      position: "bottom-right"
    }
    this.theme = options.theme ? options.theme : this.defaultTheme;
    localStorage.setItem("prognosisTheme", JSON.stringify(this.theme));
    console.log("options.prognosisOAKey", options);
    localStorage.setItem("prognosisOAKey", options.prognosisOAKey);
    this.position = this.getPosition(this.theme.position);
    this.open = false;
    this.initialize();
    this.injectStyles();
    this.mainWrapper = document.querySelector(".prognosis__wrapper");
    this.sideMenuWrapper = document.querySelector("#prognosis_side_bar_wrapper");
    this.sideMenuToggleBtn = document.querySelector("#prognosis_menu_collapse_btn");
    this.sideMenuToggleBtn.addEventListener("click", this.toggleSideMenu.bind(this));
    
   }

  position = "";
  open = false;
  widgetContainer = null;
  headerContainer = null;
  buttonContainer = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  toggleSideMenu(e) {
    console.log("e", e);
    console.log("e target", e.currentTarget);
    const elemnt = e.currentTarget;
    if(elemnt.classList.contains("collapsed")) {
      this.mainWrapper.classList.remove("collapsed");
      this.mainWrapper.classList.add("expanded");
      this.sideMenuWrapper.classList.remove("collapsed");
      this.sideMenuWrapper.classList.add("expanded");
      elemnt.classList.remove("collapsed");
      elemnt.classList.add("expanded");
    } else {
      this.mainWrapper.classList.remove("expanded");
      this.mainWrapper.classList.add("collapsed");
      this.sideMenuWrapper.classList.remove("expanded");
      this.sideMenuWrapper.classList.add("collapsed");
      elemnt.classList.remove("expanded");
      elemnt.classList.add("collapsed");
    }
  }

  async initialize() {
    window.TestFunc = function() {
      alert(window.PROGNOSIS_WID)
    }
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.zIndex = "123456789012";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);
    
    /**
    * Create chat header with expand and close button
    */

    this.headerContainer = document.createElement("div");
    this.headerContainer.classList.add("prognosis-chat-header");

    /** Maximize */
    const maximizeBtn = document.createElement("button");
    maximizeBtn.style.cursor = "pointer";
    maximizeBtn.style.marginRight = "20px";
    maximizeBtn.innerText = "<>";
    maximizeBtn.classList.add("prognosis-chat-maximize-header");
    maximizeBtn.classList.add("prognosis-chat-close-header");
    maximizeBtn.addEventListener("click", this.maximizeChatbox.bind(this));
    this.headerContainer.appendChild(maximizeBtn);

    const chatCloseBtn = document.createElement("button");
    chatCloseBtn.style.cursor = "pointer";
    chatCloseBtn.innerText = "x";
    chatCloseBtn.classList.add("prognosis-chat-close-header");
    chatCloseBtn.addEventListener("click", this.toggleOpen.bind(this));
    this.headerContainer.appendChild(chatCloseBtn);

    
    
    /**
     * Create a button element and give it a class of button__container
     */
    this.buttonContainer = document.createElement("button");
    this.buttonContainer.style.backgroundColor = this.theme.primaryColor;
    this.buttonContainer.classList.add("button__container");


    /**
     Submit button
     */
     const submitButton = document.createElement("button");
     submitButton.classList.add("submit__container");
     submitButton.innerHTML = "Submit";
     submitButton.addEventListener("click", function() {
      window.TestFunc()
     });

    /**
     * Create a span element for the widget icon, give it a class of `widget__icon`, and update its innerHTML property to an icon that would serve as the widget icon.
     */
    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = MESSAGE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    /**
     * Create a span element for the close icon, give it a class of `widget__icon` and `widget__hidden` which would be removed whenever the widget is closed, and update its innerHTML property to an icon that would serve as the widget icon during that state.
     */
    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    /**
     * Append both icons created to the button element and add a `click` event listener on the button to toggle the widget open and close.
     */
    this.buttonContainer.appendChild(this.widgetIcon);
    this.buttonContainer.appendChild(this.closeIcon);
    this.buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    /**
     * Create a container for the widget and add the following classes:- `widget__hidden`, `widget__container`
     */
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    // Create chat holder
    this.chatHolder = document.createElement("div");
    this.chatHolder.classList.add("prognosis_chat_main");

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content and the button to the container
     */
    
    container.appendChild(this.widgetContainer);
    container.appendChild(this.buttonContainer);

    // Open chat by default
    setTimeout(() => {
      document.getElementById("prognosis_consultation_holder").classList.remove("hidden_module");;
      // document.querySelectorAll(".prognosis_main_nav_item").classList.remove("active");
      document.getElementById("menu_item_new_chat").classList.add("active");
    }, 0);

    
    // if(options && options.from) {
    if(this.from === "website"){
      this.createWidgetContent();
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
      this.widgetContainer.appendChild(this.headerContainer);
      this.buttonContainer.classList.add("btn-main-hidden");
      this.widgetContainer.appendChild(this.headerContainer);
      this.headerContainer.style.display = "none";
      document.getElementById("prognosis_consultation_holder").classList.remove("hidden_module");;
      this.maximizeChatbox();
    }
  }

  createWidgetContent() {
    // <li is="menu-list-item" data-id="existingChat">Existing Chat</li>
    this.widgetContainer.innerHTML = `
    <div class="prognosis__wrapper collapsed">
      <div id="prognosis_side_bar_wrapper" class="prognosis-sidebar-menu-wrapper collapsed" style="background-color: ${this.theme.secondaryColor}">
        <div class="aside-wrap" id="prognosis_main_nav_wrapper">
            <a href="https://myprognosis.ai/">${PROGNOSIS_LOGO}</a>
            <div class="prognosis_menu_collapse_btn_holder">
              <button class="prognosis_menu_collapse_btn collapsed" id="prognosis_menu_collapse_btn">
                <span class="collapse_arrow_left">${LEFT_ARROW}</span>
                <span class="collapse_arrow_right">${RIGHT_ARROW}</span>
              </button>
            </div>
            <ul class="prognosis-sidebar-menu-list">
              <li>
                <div class="prognosis-menu-title active" id="prognosis_e_chat">${CHT_ICON} <span class="prognosis-menu-text">Chat</span></div>
                <!--<ul class="prognosis-menu-children">
                  <li class="prognosis_main_nav_item" is="menu-list-item" data-id="newChat" id="menu_item_new_chat"><span class="prognosis-menu-text">New Chat</span></li>
                </ul>-->
              </li>
              <!--<li>
                <div class="prognosis-menu-title">${SMART_TASK_ICON} <span class="prognosis-menu-text">Smart Tasks</span></div>
                <ul class="prognosis-menu-children">
                  <li class="prognosis_main_nav_item" is="menu-list-item" data-id="medicalCoding" id="menu_item_medical_coding"><span class="prognosis-menu-text">Medical Coding</span></li>
                  <li class="prognosis_main_nav_item" is="menu-list-item" data-id="explain" id="menu_item_explain"><span class="prognosis-menu-text">Explain</span></li>
                  <li class="prognosis_main_nav_item" is="menu-list-item" data-id="guideline" id="menu_item_guideline"><span class="prognosis-menu-text">Medical Guidelines</span></li>
                </ul>
              </li>-->
            </ul>
          </div>
        </div>
        <div class="prognosis__main-wrap" id="prognosis___main_wrapper">
          <div class="prognosis_main_module hidden_module prognosis__medical_coding_holder" id="prognosis_medical_coding_holder" is="medical-coding"></div>
          <div class="prognosis_main_module hidden_module prognosis__conslutation_holder" id="prognosis_consultation_holder" is="consultation-component" data-id="consultaton_comp_wrap"></div>
          <div class="prognosis_main_module hidden_module prognosis__explain_holder" id="prognosis_explain_holder" is="explain-component"></div>
          <div class="prognosis_main_module hidden_module prognosis__guideline_holder" id="prognosis_guideline_holder" is="guideline-component"></div>
        </div>
    </div>
    `;

    
  }

  submitChat() {
    alert("clicked");
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

  maximizeChatbox() {
    const isFullWidth = this.widgetContainer.classList.contains("full-width");
    isFullWidth ? this.widgetContainer.classList.remove("full-width") : this.widgetContainer.classList.add("full-width")
  }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
      this.widgetContainer.appendChild(this.headerContainer);
      this.buttonContainer.classList.add("btn-main-hidden");
      this.widgetContainer.appendChild(this.headerContainer);
      document.getElementById("prognosis_consultation_holder").classList.remove("hidden_module");
    } else {
      this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
      this.buttonContainer.classList.remove("btn-main-hidden");
    }
  }
}

function initializeWidget(position) {
  return new MessageWidget(position);
  
}


window.IntPrognosisWidget = initializeWidget;
