class PreDefinedQuestions extends HTMLDivElement {
    constructor() {
        super();

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

        this.questionsWrapper = document.createElement("div");
        this.questionsWrapper.classList.add("prognosis_pre_qa_wrapper");

        this.createQuestion();
        this.generateQuestion(this.questions);
    }

    createQuestion() {
        this.appendChild(this.questionsWrapper);
    }

    generateQuestion(data) {
        data.forEach(element => {
            console.log("element.title", element.title);
            const questionBlock = document.createElement("div");
            questionBlock.classList.add("prognosis_pre_question_block");
            questionBlock.innerText = element.title;
            questionBlock.addEventListener("click", this.askQuestion(element));
            this.questionsWrapper.appendChild(questionBlock);
        });
    }

    askQuestion(question) {
        console.log("question", question);
    }
    
}

customElements.define("pre-defined-questions", PreDefinedQuestions, {
    extends: "div"
})