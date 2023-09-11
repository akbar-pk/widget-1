import { BLOOD_PRESSURE_ICON, BRAIN_ICON, FOOD_ICON, HEART_ICON, PROGNOSIS_LOGO, RECORDING_ICON, SEND_ICON, START_RECORD_ICON, STOP_RECORD_ICON } from "../../svgIcons.js";

class Consultation extends HTMLDivElement {
    constructor() {
        super();
        this.theme = JSON.parse(localStorage.getItem("prognosisTheme"));
        console.log("this.options", this.theme.primaryColor);
        this.currentOutput = "";
        this.inputValue = "";

        this.mainChatLink = document.getElementById("prognosis_e_chat");
        this.mainChatLink.classList.add("prognosis_e_chat");
        this.mainChatLink.addEventListener("click", () => {
            this.chatHomeWrapper.classList.remove("hide_page");
        });

        // Chat loader 
        const loaderHolderStyle = `
            align-items: center;
            border: 1px solid lightgray;
            border-radius: 15px;
            display: flex;
            height: 14px;
            padding: 0 1px 0 1px;
            position: relative;
            width: 45px;
            margin-left: 5px;
        `;

        const loaderBarStyle = `
            animation: chat-typing-bar 1.5s infinite;
            border-radius: 5px;
            height: 6px;
            left: 5px;
            position: absolute;
        `;
        
        this.loaderWrapper = document.createElement("div");
        this.loaderWrapper.classList.add("prognosis_message_loader");
        this.loaderWrapper.setAttribute("style", loaderHolderStyle);

        this.loaderBar = document.createElement("div");
        this.loaderBar.classList.add("prognosis_message_loader_bar");
        this.loaderBar.setAttribute("style", loaderBarStyle);
        this.loaderWrapper.appendChild(this.loaderBar);
        // Chat loader END

        // Pre-defined questions
        this.questions = [
            {
                title: "What is Atrial Fibrillation?"
            },
            {
                title: "What is Stroke?"
            },
            {
                title: "What is HF Stage B?"
            },
            {
                title: "What is Hypertension?"
            },
            {
                title: "What is what is Anaemia?"
            }
        ];

        // Chat home

        this.chatHomeWrapper = document.createElement("div");
        this.chatHomeWrapper.classList.add("prognosis_chat_home_wrapper");

        this.chatHomeLeft  = document.createElement("div");
        this.chatHomeLeft.classList.add("prognosis_chat_home_left");
        this.chatHomeLogoHolder = document.createElement("div");
        this.chatHomeLogoHolder.classList.add("prognosis_chat_home_logo_holder");
        this.chatHomeLogoHolder.innerHTML = PROGNOSIS_LOGO;
        
        this.chatHomeLeftInner = document.createElement("div");
        this.chatHomeLeftInner.classList.add("prognosis_chat_inner_left");
        this.chatHomeLeftInner.appendChild(this.chatHomeLogoHolder);
        this.chatInnerHeader = document.createElement("div");
        this.chatInnerHeader.classList.add("prognosis_chat_inner_left_header");
        this.chatLeftHeading = document.createElement("h2");
        this.chatLeftHeading.classList.add("prognosis_chat_heading");
        const chatLeftHeadingText = document.createTextNode("What medical questions can I answer for you today?");
        this.chatLeftHeading.appendChild(chatLeftHeadingText);
        this.chatInnerHeader.appendChild(this.chatLeftHeading);
        this.chatHomeLeftInner.appendChild(this.chatInnerHeader);
        this.chatHomeLeft.appendChild(this.chatHomeLeftInner);

        this.chatLeftContentBox = document.createElement("div");
        this.chatLeftContentBox.classList.add("prognosis_chat_home_left_content");

        this.chatLetListHolder = document.createElement("div");
        this.chatLetListHolder.classList.add("prognosis_chat_home_left_list_holder");

        const chatHomeQuestionsList = [
            {
               question:  "Why is my chest beating fast while resting?",
               icon: "heart"
            },
            {
                question:  "Is my blood pressure medication the right dosage?",
                icon: "bloodPressure"
            },
            {
                question:  "What is risk of stroke for a 35 year old?",
                icon: "brain"
            },
            {
                question:  "Does not drinking  milk make me anaemic?",
                icon: "food"
            }
        ];

        this.chatHomeLeftInner.appendChild(this.chatLeftContentBox);

        this.generateChatHomeQuestion(chatHomeQuestionsList);

        this.chatLeftContentBox.appendChild(this.chatLetListHolder);

        // this.chatQuestionHeart = document.createElement("h4");
        // this.chatQuestionHeart.classList.add("prognosis_chat_question_item");
        // this.chatQuestionHeartIcon = document.createElement("span");
        // this.chatQuestionHeartIcon.classList.add("prognosis_chat_question_icon");
        // this.chatQuestionHeart.setAttribute("data-question", "Why is my chest beating fast while resting?")
        // this.chatQuestionHeartIcon.innerHTML = HEART_ICON;
        // this.chatQuestionHeart.appendChild(this.chatQuestionHeartIcon);
        // const heartQuestionOne = document.createTextNode("Why is my chest beating fast while resting?");
        // this.chatQuestionHeart.addEventListener("click", () => {
        //     this.chatHomeWrapper.classList.add("hide_page");
        //     this.inputValue = "why is my chest beating fast while resting";
        //     this.processMessageToChatGPT();
        // });
        // this.chatQuestionHeart.appendChild(heartQuestionOne);
        // this.chatLetListHolder.appendChild(this.chatQuestionHeart);

        

        // this.chatHomeLeftInner.appendChild(this.chatLeftContentBox);

        // why is my chest beating fast while resting?
        

        this.chatHomeRight  = document.createElement("div");
        this.chatHomeRight.classList.add("prognosis_chat_home_right");

        this.chatHomeWrapper.appendChild(this.chatHomeLeft);
        this.chatHomeWrapper.appendChild(this.chatHomeRight);

        const rootWrapper = document.querySelector(".prognosis__wrapper");
        console.log("rootWrapper", rootWrapper);
        if(rootWrapper) {
            rootWrapper.appendChild(this.chatHomeWrapper);
        }
        

        // Chat home END

        this.questionsWrapper = document.createElement("div");
        this.generateQuestion(this.questions);
        this.questionsWrapper.classList.add("prognosis_pre_qa_wrapper");
        
        // Pre-defined questions END

        

        this.displayArea = document.createElement("div");
        this.displayArea.classList.add("prognosis__consult_display_area");
        this.displayArea.classList.add("prognosis__display_area");
        // this.displayArea.appendChild(this.chatHomeWrapper);
        this.displayArea.appendChild(this.questionsWrapper);

        this.chatBubble = document.createElement("div");
        this.chatBubble.classList.add("prognosis__chat_bubble_out");

        this.userChatBubble = document.createElement("div");
        this.userChatBubble.classList.add("prognosis__chat_bubble_user");
        this.userChatBubbleInner = document.createElement("div");
        this.userChatBubbleInner.classList.add("prognosis__chat_bubble_user_inner");
        this.userChatBubbleInner.style.backgroundColor = this.theme.primaryColor;
        this.userChatBubbleInner.style.color = "#fff";

        // Text Input

        this.inputBox = document.createElement("TEXTAREA");
        this.inputBox.placeholder = "Type question";
        this.inputBox.classList.add("prognosis__consult_inputbox");
        this.inputBox.addEventListener("keyup", (e) => {
            this.inputValue = e.target.value;
            console.log("this.inputValue", this.inputValue);
            console.log("e", e.target.value);
        });

        this.inputBox.addEventListener("keyup", (event) => {
            if(event.key === "Enter") {
                this.processMessageToChatGPT();
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
        this.chatStopBtn.title = "Stop";
        this.chatStopBtn.style.display = "none";
        this.chatStopBtn.addEventListener("click", () => {
            if(this.controller) {
                this.controller.abort();
                this.controller = null;
                this.clearChatBtn.style.display = "flex";
            }
        });

            const grayButtonStyle = `
                background-color: lightgray;
                color: gray;
                fill: gray;
            `;

            // // Clear Chat
            this.clearChatBtn = document.createElement("button");
            this.clearChatBtn.classList.add("prognotsis_clear_chat_btn");
            this.clearChatBtn.setAttribute("style", grayButtonStyle);
            this.clearChatBtn.innerText = "Clear";
            this.clearChatBtn.addEventListener("click", () => {
                this.displayArea.innerHTML = "";
                this.clearChatBtn.style.display = "none";
                this.displayArea.appendChild(this.questionsWrapper);
                this.questionsWrapper.classList.remove("hide_section");
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

        this.recordDescription = document.createElement("p");
        this.recordDescription.classList.add("prognosis_record_desc_text");
        this.recordDescription.innerText = "Press the mic button to ask a question";

        // this.recordingWrapper.appendChild(this.startRecordBtn);
        // this.recordingWrapper.appendChild(this.recordDescription);

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
        // alert(this.inputValue);
        // return;
        let inputMsg = "";
        inputMsg = this.inputValue;
        

        if(inputMsg.trim().length) {
            this.questionsWrapper.classList.add("hide_section");
            this.chatStopBtn.style.display = "flex"; 
            this.submitBtn.style.display = "none";

            let clonedBubble = this.chatBubble.cloneNode(true);
            let cloneUserChatBubble = this.userChatBubble.cloneNode(true);
            let cloneUserChatBubbleInner = this.userChatBubbleInner.cloneNode(true);
            cloneUserChatBubble.appendChild(cloneUserChatBubbleInner);
            this.displayArea.appendChild(cloneUserChatBubble);
            cloneUserChatBubbleInner.innerText = inputMsg;
            this.displayArea.appendChild(clonedBubble);
            
            this.displayArea.appendChild(this.loaderWrapper);
            // clonedBubble.appendChild(this.messageLoader);

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
                this.loaderWrapper.remove()
            } else {
                console.log("Error occured while generating.");
                console.log("Error ", error);
                this.loaderWrapper.remove()
            }
        
          } finally {
            this.chatStopBtn.style.display = "none"; 
            this.submitBtn.style.display = "flex";
            this.controller = null;
            this.inputBox.value = "";
            this.inputValue = "";
            this.loaderWrapper.remove()
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

    generateQuestion(data) {
        data.forEach(element => {
            console.log("element.title", element.title);
            const questionBlock = document.createElement("div");
            questionBlock.classList.add("prognosis_pre_question_block");
            questionBlock.setAttribute("id", element.title);
            questionBlock.innerText = element.title;
            questionBlock.addEventListener("click", (event) => {
                this.inputValue = event.currentTarget.id;
                this.processMessageToChatGPT();
                this.questionsWrapper.classList.add("hide_section");
            });
            this.questionsWrapper.appendChild(questionBlock);
        });
    }

    generateChatHomeQuestion(data) {
        
        data.forEach(element => {

        // this.chatQuestionHeart = document.createElement("h4");
        // this.chatQuestionHeart.classList.add("prognosis_chat_question_item");
        // this.chatQuestionHeartIcon = document.createElement("span");
        // this.chatQuestionHeartIcon.classList.add("prognosis_chat_question_icon");
        // this.chatQuestionHeart.setAttribute("data-question", "Why is my chest beating fast while resting?")
        // this.chatQuestionHeartIcon.innerHTML = HEART_ICON;
        // this.chatQuestionHeart.appendChild(this.chatQuestionHeartIcon);
        // const heartQuestionOne = document.createTextNode("Why is my chest beating fast while resting?");
        // this.chatQuestionHeart.addEventListener("click", () => {
        //     this.chatHomeWrapper.classList.add("hide_page");
        //     this.inputValue = "why is my chest beating fast while resting";
        //     this.processMessageToChatGPT();
        // });
        // this.chatQuestionHeart.appendChild(heartQuestionOne);
        // this.chatLetListHolder.appendChild(this.chatQuestionHeart);

            

            const questionBlock = document.createElement("h4");
            questionBlock.classList.add("prognosis_chat_question_item");
            questionBlock.setAttribute("id", element.question);

            const chatQuestionIcon = document.createElement("span");
            chatQuestionIcon.classList.add("prognosis_chat_question_icon");
            // chatQuestionIcon.innerHTML = HEART_ICON;
            switch (element.icon) {
                case "heart":
                    chatQuestionIcon.innerHTML = HEART_ICON;
                    break;
                case "bloodPressure":
                    chatQuestionIcon.innerHTML = BLOOD_PRESSURE_ICON;
                    break;
                case "brain":
                    chatQuestionIcon.innerHTML = BRAIN_ICON;
                    break;
                case "food":
                    chatQuestionIcon.innerHTML = FOOD_ICON;
                    break;
            }
            questionBlock.appendChild(chatQuestionIcon);
            const chatTextHolder = document.createElement("span");
            chatTextHolder.classList.add("prognosis_question_text_holder");
            chatTextHolder.innerText = element.question;
            questionBlock.appendChild(chatTextHolder);

            questionBlock.addEventListener("click", (event) => {
                this.chatHomeWrapper.classList.add("hide_page");
                this.inputValue = event.currentTarget.id;
                
                this.processMessageToChatGPT();
                this.questionsWrapper.classList.add("hide_section");
            });
            
            this.chatLetListHolder.appendChild(questionBlock);
        });
        // this.chatLeftContentBox.appendChild(this.chatLetListHolder);
    }

    
    

    askQuestion(event) {
        console.log("question", event.currentTarget.id);
        this.inputValue = event.currentTarget.id;
        this.processMessageToChatGPT();
    }
}

customElements.define("consultation-component", Consultation, {
   extends: "div"
})