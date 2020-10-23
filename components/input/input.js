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
        console.log("Connected Callback: ")
        const inputWrapper = document.createElement("div")
        inputWrapper.classList.add("input-wrapper")
        const label = document.createElement("label")
        let input
        if (this.hasAttribute("multiline") && this.getAttribute("multiline").toLowerCase() === "true") {
            input = document.createElement("textarea")
            input.style.minHeight = '3em'
            input.style.resize = "none"
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
            if (input.value === '' && input.type !== "date" && input.type !== "time") {
                label.classList.remove('float');
            }
        })
        if (input.tagName === "TEXTAREA") {
            input.addEventListener('input', function (eve) {
                input.style.height = 'auto'
                input.style.height = input.scrollHeight + 'px'
            })
        }
        inputWrapper.append(label, input)
        this.appendChild(inputWrapper)
    }

}
customElements.define('anorcle-float-input', AnorcleFloatInput);