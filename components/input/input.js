/**
 * <div class="input-wrapper">
 *     <input type="text" class="input" id="input">
 *     <label for="input" class="label">Name</label>
 * </div>
 * 
 */

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
            label.addEventListener("mousedown", () =>{
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
        this.appendChild(inputWrapper)
        this.input = input
        this.label = label
    }
    get value () {
        if (this.input.tagName === "DIV") {
            return this.input.innerText
        } else {
            return this.input.value
        }
    }
    set value (value) {
        if(value === '' && this.input.type !== "date" && this.input.type !== "time") {
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