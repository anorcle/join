/**
 * <div class="input-wrapper">
 *     <input type="text" class="input" id="input">
 *     <label for="input" class="label">Name</label>
 * </div>
 * 
 */

const downArrow = `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12L0.504809 0.75L13.4952 0.75L7 12Z" fill="black"/>
</svg>
`
const optionSelectedSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.2813V14.28Z" fill="#219653"/>
</svg>
`
class AnorcleFloatInput extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const inputWrapper = document.createElement("div")
        inputWrapper.classList.add("input-wrapper")
        const label = document.createElement("label")
        let input
        if (this.hasAttribute("multiline") && this.getAttribute("multiline").toLowerCase() === "true") {
            input = document.createElement("div")
            input.contentEditable = true
            input.style.height = "auto"
            input.style.minHeight = "3em"
            label.addEventListener("mousedown", () => {
                setTimeout(() => this.input.focus(), 0)
            })
        } else {
            input = document.createElement("input")
            input.type = this.getAttribute("type") || "text"
            if (input.type === "date" || input.type === "time") {
                label.classList.add('float')
            }
        }
        input.classList.add("input")
        input.id = this.id + "-inp"
        label.setAttribute("for", input.id)
        label.classList.add("label")
        label.innerText = this.getAttribute("label")

        input.addEventListener('focus', function (eve) {
            label.classList.add('float')
        })
        input.addEventListener('blur', function (eve) {
            if ((input.value || input.innerText) === '' && input.type !== "date" && input.type !== "time") {
                label.classList.remove('float')
            }
        })
        inputWrapper.append(label, input)
        this.append(inputWrapper)
        this.input = input
        this.label = label

        if (this.hasAttribute("options")) {
            const iconContainer = document.createElement("div")
            iconContainer.classList.add("icon-container")
            iconContainer.innerHTML = downArrow
            inputWrapper.append(iconContainer)

            const optionContainer = document.createElement("div")
            optionContainer.classList.add("afi-option-container")
            const options = this.getAttribute("options").split(",").map(opt => opt.trim())
            options.forEach(optionText => {
                const option = document.createElement("div")

                const optionValue = document.createElement("div")
                optionValue.innerHTML = optionText
                const optionSelectedIcon = document.createElement("div")
                optionSelectedIcon.innerHTML = optionSelectedSVG
                optionSelectedIcon.classList.add("option_selected_icon")

                option.append(optionValue, optionSelectedIcon)
                option.classList.add("option")

                option.addEventListener("mousedown", () => {
                    if (this.getAttribute("multi") && this.getAttribute("multi").toLowerCase() === "true") {
                        if (option.selected == true) {
                            option.selected = false
                            option.classList.remove("option-selected")
                        } else {
                            option.selected = true
                            option.classList.add("option-selected")
                        }
                        this.value = ([...optionContainer.children].filter(option => option.selected === true)).map(option => option.firstElementChild.innerText).join(", ")
                    } else {
                        this.value = option.innerText
                    }
                })
                optionContainer.append(option)
            })
            document.body.append(optionContainer)

            input.addEventListener('focus', () => {this.showOptionMenu(optionContainer)})
            if (this.getAttribute("multi") && this.getAttribute("multi").toLowerCase() === "true") {
                document.addEventListener("click", (event) => {
                    if(event.targetWithin(this) === false && event.targetWithin(optionContainer) === false) {
                        optionContainer.style.display = 'none'
                    }
                })
            } else {
                input.addEventListener('blur', () => {optionContainer.style.display = 'none'})
            }
        }
    }

    showOptionMenu(optionContainer) {
        optionContainer.style.display = 'flex';
        const rect = this.getBoundingClientRect()

        if (window.innerHeight >= rect.bottom + optionContainer.offsetHeight) {
            optionContainer.style.top = rect.bottom + "px"
        } else if (rect.top - optionContainer.offsetHeight - 10 >= 0) {
            optionContainer.style.top = (rect.top - optionContainer.offsetHeight - 10) + "px";
        } else if (window.innerHeight >= rect.height) {
            optionContainer.style.top = 0;
        } else {
            //...
            console.log('think');
        }
    
        if (window.innerWidth >= this.offsetLeft + optionContainer.offsetWidth) {
            optionContainer.style.left = this.offsetLeft + 'px';
        } else if (rect.right - rect.width >= 0) {
            optionContainer.style.left = (rect.right - rect.width) + 'px';
        } else if (window.innerWidth >= optionContainer.offsetWidth) {
            optionContainer.style.left = 0;
        } else {
            //...
            console.log('think');
        }
    
    }

    get value() {
        if (this.input.tagName === "DIV") {
            return this.input.innerText
        } else {
            return this.input.value
        }
    }
    set value(value) {
        if (value === '' && this.input.type !== "date" && this.input.type !== "time") {
            this.label.classList.remove('float')
        } else {
            this.label.classList.add('float')
        }
        if (this.input.tagName === "DIV") {
            return this.input.innerText = value
        } else {
            return this.input.value = value
        }
    }
}

customElements.define('anorcle-float-input', AnorcleFloatInput);

MouseEvent.prototype.targetWithin = function(realTarget) {
    var parent = this.target;

    if (parent === realTarget) {
        return true;
    }
    while(parent !== realTarget && parent !== document.body) {
        parent = parent.parentElement;
        if (parent === realTarget) {
            return true;
        }
    }
    return false;
}