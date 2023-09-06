export const messageLoader = () => {

        const loaderHolderStyle = `
            align-items: center,
            border: 1px solid theme("colors.ctm-gray-90"),
            border-radius: 15px,
            display: flex,
            height: 14px;
            padding: 0 1px 0 1px,
            position: relative,
            width: 45px,
            margin-left: 5px
        `;

        const loaderBarStyle = `
            animation: chat-typing-bar 1.5s infinite,
            border-radius: 5px,
            height: 6px,
            left: 5px,
            position: absolute,
        `;
        
        this.loaderWrapper = document.createElement("div");
        this.loaderWrapper.classList.add("prognosis_message_loader");
        this.loaderWrapper.setAttribute("style", loaderHolderStyle);

        this.loaderBar = document.createElement("div");
        this.loaderBar.classList.add("prognosis_message_loader_bar");
        this.loaderBar.setAttribute("style", loaderBarStyle);

        return this.loaderWrapper;
}
