import { SEND_ICON } from "../../svgIcons.js";

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
        this.chatBubble.classList.add("prognosis__chat_bubble_in");

        this.inputBox = document.createElement("TEXTAREA");
        this.inputBox.classList.add("prognosis__consult_inputbox");
        this.inputBox.addEventListener("keyup", (e) => {
            this.inputValue = e.target.value;
            console.log("this.inputValue", this.inputValue);
            console.log("e", e.target.value);
        });

        const buttonStyle = `
            background-color: ${this.theme.primaryColor};
            color: ${this.theme.btnTextColor};
        `

        this.submitBtn = document.createElement("button");
        this.submitBtn.classList.add("prognosis__consult_submitBtn");
        // this.submitBtn.style.cssText = JSON.stringify(buttonStyle);
        this.submitBtn.setAttribute("style", buttonStyle);
        this.submitBtn.innerHTML = SEND_ICON;
        this.submitBtn.addEventListener("click", () => {
            this.processMessageToChatGPT()
        });

        this.inputWrapper = document.createElement("div");
        this.inputWrapper.classList.add("prognosis__consult_wrap");
        this.inputWrapper.appendChild(this.inputBox);
        this.inputWrapper.appendChild(this.submitBtn);
        
        this.appendChild(this.displayArea);
        this.appendChild(this.inputWrapper);
        this.API_KEY = " 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";
    }

    get consult() {
        console.log("get consult");
    }

    async processMessageToChatGPT() {
        let inputMsg = "";
            inputMsg = this.inputValue;
            let clonedBubble = this.chatBubble.cloneNode(true);
            this.displayArea.appendChild(clonedBubble);

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [{role: "user", content: inputMsg}],
            stream: true
          }

        console.log("apiRequestBody", apiRequestBody);

        try {
            const streamChat = await fetch("https://api.openai.com/v1/chat/completions", 
            {
              method: "POST",
              headers: {
                "Authorization": "Bearer " + this.API_KEY,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(apiRequestBody),
            //   signal,
            });
        
            const reader = streamChat.body?.getReader();
            const decoder = new TextDecoder("utf-8");
        
            while(true) {
            //   if(generateBtnRef.current) {
            //     generateBtnRef.current.innerText = "Stop";
            //   }
              
              const chunk = await reader?.read();
              
              const { done, value } = chunk;
            //   if(done) {
            //     setIsTyping(false);
            //     if(generateBtnRef.current) {
            //       generateBtnRef.current.innerText = "Generating...";
            //     }
            //     break;
            //   }
        
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
                    console.log("clonedBubble", clonedBubble.innerHTML);
                  const newMessage = {
                    message: conts,
                    sentTime: "just now",
                    sender: "Prognosis",
                  };

                  console.log("contscontscontsconts", newMessage);
                }
            }
        }
        } catch(error) {
            // if(signal.aborted) {
        
            // }
        
          } finally {
            // if(generateBtnRef.current) {
            //   generateBtnRef.current.disabled = true;
            //   controller = null;
            // }
            // setIsTyping(false);
          }        
    }
}

customElements.define("consultation-component", Consultation, {
   extends: "div"
})