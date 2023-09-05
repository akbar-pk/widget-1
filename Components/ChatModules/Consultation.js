import { RECORDING_ICON, SEND_ICON, START_RECORD_ICON, STOP_RECORD_ICON } from "../../svgIcons.js";

class Consultation extends HTMLDivElement {
    constructor() {
        super();
        this.theme = JSON.parse(localStorage.getItem("prognosisTheme"));
        console.log("this.options", this.theme.primaryColor);
        this.currentOutput = "";
        this.inputValue = "";

        this.displayArea = document.createElement("div");
        this.displayArea.classList.add("prognosis__consult_display_area");
        this.displayArea.classList.add("prognosis__display_area");

        this.chatBubble = document.createElement("div");
        this.chatBubble.classList.add("prognosis__chat_bubble_out");

        this.userChatBubble = document.createElement("div");
        this.userChatBubble.classList.add("prognosis__chat_bubble_user");
        this.userChatBubbleInner = document.createElement("div");
        this.userChatBubbleInner.classList.add("prognosis__chat_bubble_user_inner")

        // Text Input

        this.inputBox = document.createElement("TEXTAREA");
        this.inputBox.classList.add("prognosis__consult_inputbox");
        this.inputBox.addEventListener("keyup", (e) => {
            this.inputValue = e.target.value;
            console.log("this.inputValue", this.inputValue);
            console.log("e", e.target.value);
        });

        this.inputBox.addEventListener("keyup", (event) => {
            if(event.key === "Enter") {
                this.processMessageToChatGPT()
            }
        });

        const buttonStyle = `
            background-color: ${this.theme.primaryColor};
            color: ${this.theme.btnTextColor};
            fill: ${this.theme.btnTextColor};
        `;

        this.submitBtn = document.createElement("button");
        this.submitBtn.classList.add("prognosis__consult_submitBtn");
        this.submitBtn.innerHTML = SEND_ICON;
        this.submitBtn.setAttribute("style", buttonStyle);
        this.submitBtn.addEventListener("click", () => {
            this.processMessageToChatGPT()
        });

        this.chatStopBtn = document.createElement("button");
        this.chatStopBtn.classList.add("prognosis_chat_stop_btn");
        this.chatStopBtn.innerHTML = STOP_RECORD_ICON;
        this.chatStopBtn.setAttribute("style", buttonStyle);
        this.chatStopBtn.style.display = "none";
        this.chatStopBtn.addEventListener("click", () => {
            if(this.controller) {
                this.controller.abort();
                this.controller = null;
                this.clearChatBtn.style.display = "flex";
            }
        });

            // // Clear Chat
            this.clearChatBtn = document.createElement("button");
            this.clearChatBtn.classList.add("prognotsis_clear_chat_btn");
            this.clearChatBtn.setAttribute("style", buttonStyle);
            this.clearChatBtn.innerText = "Clear Chat";
            this.clearChatBtn.addEventListener("click", () => {
                this.displayArea.innerHTML = "";
                this.clearChatBtn.style.display = "none";
            });
            this.clearChatBtn.style.display = "none";
            // // Clear Chat END

        this.textInputWrapper = document.createElement("div");
        this.textInputWrapper.classList.add("prognosis_text_input_wrapper");
        this.textInputWrapper.appendChild(this.inputBox);
        this.textInputWrapper.appendChild(this.submitBtn);
        this.textInputWrapper.appendChild(this.chatStopBtn);
        this.textInputWrapper.appendChild(this.clearChatBtn);
        //Text Input END

        

        // Rcording
        this.recordingWrapper = document.createElement("div");
        this.recordingWrapper.classList.add("prognosis_recording_wrapper");
            
        this.startRecordBtn = document.createElement("button");
        this.startRecordBtn.classList.add("prognosis_start_record_btn");
        this.startRecordBtn.style.backgroundColor = this.theme.primaryColor;
        this.startRecordBtn.innerHTML = START_RECORD_ICON;

        this.recordingWrapper.appendChild(this.startRecordBtn);
        // Rcording END

        this.inputWrapper = document.createElement("div");
        this.inputWrapper.classList.add("prognosis__consult_wrap");
        this.inputWrapper.appendChild(this.recordingWrapper);
        this.inputWrapper.appendChild(this.textInputWrapper);
        
        this.appendChild(this.displayArea);
        this.appendChild(this.inputWrapper);

        this.API_KEY = localStorage.getItem("prognosisOAKey");
        this.controller = null;

    }

    get consult() {
        console.log("get consult");
    }

    async processMessageToChatGPT() {
        let inputMsg = "";
        inputMsg = this.inputValue;
        

        if(inputMsg.trim().length) {
            this.chatStopBtn.style.display = "flex"; 
            this.submitBtn.style.display = "none";

            let clonedBubble = this.chatBubble.cloneNode(true);
            let cloneUserChatBubble = this.userChatBubble.cloneNode(true);
            let cloneUserChatBubbleInner = this.userChatBubbleInner.cloneNode(true);
            cloneUserChatBubble.appendChild(cloneUserChatBubbleInner);
            this.displayArea.appendChild(cloneUserChatBubble);
            cloneUserChatBubbleInner.innerText = inputMsg;
            this.displayArea.appendChild(clonedBubble);

            this.inputBox.value = "";
            this.inputValue = "";

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [{role: "user", content: inputMsg}],
            stream: true
          }

        console.log("apiRequestBody", apiRequestBody);

        this.controller = new AbortController();
        const signal = this.controller.signal;
        

        try {
            const streamChat = await fetch("https://api.openai.com/v1/chat/completions", 
            {
              method: "POST",
              headers: {
                "Authorization": "Bearer " + this.API_KEY,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(apiRequestBody),
              signal: signal,
            });
        
            const reader = streamChat.body?.getReader();
            const decoder = new TextDecoder("utf-8");
        
            while(true) {
            //   if(generateBtnRef.current) {
            //     generateBtnRef.current.innerText = "Stop";
            //   }
              
              const chunk = await reader?.read();
              
              const { done, value } = chunk;
              if(done) {
                // setIsTyping(false);
                // if(generateBtnRef.current) {
                //   generateBtnRef.current.innerText = "Generating...";
                // }
                this.clearChatBtn.style.display = "flex";
                break;
              }
        
              const decodeChunk = decoder.decode(value);
              const lines = decodeChunk.split("\n");
              
              const parsedLines = lines
              .map(line => line.replace(/^data: /, "").trim())
              .filter((line) => line !== "" && line !== "[DONE]")
              .map(line => JSON.parse(line));

              console.log("parsedLines", parsedLines);
        
            const user = {
                message: inputMsg,
                direction: "outgoing",
                sender: "user",
              };
        
              for(const parsedLine of parsedLines) {
                const { choices } = parsedLine;
                const { delta } = choices[0];
                const { content } = delta;
                console.log("content ltst", content);
                if(content) {
                    let conts = "";
                  conts += content;
                  this.currentOutput += conts;
                    console.log("contscontscontsconts", conts);
                    
                    
                    clonedBubble.innerText = this.currentOutput;
                    

                const newMessage = {
                    message: conts,
                    sentTime: "just now",
                    sender: "Prognosis",
                  };

                  

                  setTimeout(() => {
                    this.displayArea.scrollTop = this.displayArea.scrollHeight
                }, 100)
                }
            }
        }
        } catch(error) {
            if(signal.aborted) {
                console.log("Request aborted!");
            } else {
                console.log("Error occured while generating.");
                console.log("Error ", error);
            }
        
          } finally {
            this.chatStopBtn.style.display = "none"; 
            this.submitBtn.style.display = "flex";
            this.controller = null;
            this.inputBox.value = "";
            this.inputValue = "";
            // if(generateBtnRef.current) {
            //   generateBtnRef.current.disabled = true;
            //   controller = null;
            // }
            // setIsTyping(false);
          }        
        } else {
            alert("Please enter a message");
        }
    }
}

customElements.define("consultation-component", Consultation, {
   extends: "div"
})