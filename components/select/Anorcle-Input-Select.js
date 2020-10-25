class AnorcleInputSelect extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        console.log("c");
        const options = this.getAttribute("options").split(",").map(opt => opt.trim())

        const optionContainer = document.createElement("div")
        options.forEach(optionText => {
            const option = document.createElement("div")
            option.innerText = optionText
            option.classList.add("option")
            optionContainer.append(option)
        })
        optionContainer.classList.add("option-container")
        this.append(optionContainer)
    }
}
customElements.define('anorcle-input-select', AnorcleInputSelect);