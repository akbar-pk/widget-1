// import * as Redux from "/store/Redux.js"
import { styles } from "./styles.js";
import { PROGNOSIS_AI_LOGO, CLOSE_ICON, MESSAGE_ICON, CHT_ICON } from "./svgIcons.js";
import "./Components/ExpandableList.js";
import "./Components/MainMenuListItem.js";
import "./Components/ChatModules/Consultation.js";

class MessageWidget {
  constructor(options) { 
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
    console.log("options", this.theme);
    this.from = (options && options.from && options.from === "website") ? options.from : null;
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

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content and the button to the container
     */
    
    container.appendChild(this.widgetContainer);
    container.appendChild(this.buttonContainer);
    // container.appendChild(submitButton);

    if(this.from) {
      this.toggleOpen();
    }
  }

  test() {
    alert("Test")
  }

  // <div class="prognosis-sidebar-menu-wrapper" style="background-color: ${this.theme.sideMenuBgColor}">
  //           ${PROGNOSIS_AI_LOGO}
  //           <ul class="prognosis-sidebar-menu-list">
  //             <li>
  //               <div class="prognosis-menu-title">${CHT_ICON} <span>Chat</span></div>
  //               <ul class="prognosis-menu-children">
  //                 <li>New Chat</li>
  //                 <li>Existing Chat</li>
  //               </ul>
  //             </li>
  //           </ul>
  //       </div>

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
    <div class="prognosis__wrapper">
      <div class="prognosis-sidebar-menu-wrapper" style="background-color: ${this.theme.secondaryColor}">
        <div class="aside-wrap">
            ${PROGNOSIS_AI_LOGO}
            <ul class="prognosis-sidebar-menu-list">
              <li>
                <div class="prognosis-menu-title">${CHT_ICON} <span>Chat</span></div>
                <ul class="prognosis-menu-children">
                  <li is="menu-list-item" data-id="newChat">New Chat</li>
                  <li is="menu-list-item" data-id="existingChat">Existing Chat</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="prognosis__main-wrap">
            <div class="prognosis__conslutation_holder" is="consultation-component" data-id="consultaton_comp_wrap"></div>
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
      console.log("this.buttonContainer 1", this.buttonContainer);
    } else {
      this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
      this.buttonContainer.classList.remove("btn-main-hidden");
      console.log("this.buttonContainer 2", this.buttonContainer);
    }
  }
}

function initializeWidget(position) {
  return new MessageWidget(position);
  
}

window.IntPrognosisWidget = initializeWidget;
