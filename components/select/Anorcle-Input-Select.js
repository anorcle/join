const downArrow = `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12L0.504809 0.75L13.4952 0.75L7 12Z" fill="black"/>
</svg>
`

class AnorcleInputSelect extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        console.log("c");
        const options = this.getAttribute("options").split(",").map(opt => opt.trim())

        const optionContainer = document.createElement("div")
        optionContainer.classList.add("option-container")
        options.forEach(optionText => {
            const option = document.createElement("div")
            option.innerText = optionText
            option.classList.add("option")
            optionContainer.append(option)
        })

        const selectInput = document.createElement("div")
        selectInput.classList.add("select-input")

        const selectedText = document.createElement("div")
        selectedText.classList.add("selected-text")
        selectedText.innerText = "Select"

        const iconContainer = document.createElement("div")
        iconContainer.classList.add("icon-container")
        iconContainer.innerHTML = downArrow

        selectInput.append(selectedText, iconContainer)

        this.append(selectInput, optionContainer)
    }
}
customElements.define('anorcle-input-select', AnorcleInputSelect);