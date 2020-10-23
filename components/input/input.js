/**
 * <div class="input-wrapper">
 *     <input type="text" class="input" id="input1" data-label="Name">
 *     <label for="input1" id="label1" class="label">Name</label>
 * </div>
 * 
 */

function getInputElement({ type, label }) {

    let inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');

    let input = document.createElement('input');
    input.classList.add('input');
    input.type = type;
    // input.id = id || type;

    let labelElm = document.createElement('label');
    labelElm.classList.add('label');
    labelElm.innerText = label || type;
    labelElm.htmlFor = input.id;
    console.log(labelElm);


    if (type.toLowerCase() === 'date') {
        labelElm.classList.add('float');
    } else {
        input.addEventListener('focus', function (eve) {
            labelElm.classList.add('float');
        })

        input.addEventListener('blur', function (eve) {
            if (input.value === '') {
                labelElm.classList.remove('float');
            }
        })
    }

    inputWrapper.appendChild(input);
    inputWrapper.appendChild(labelElm);
    return inputWrapper;
}

class AnorcleFloatInput extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        console.log("Connected Callback: ")
        const inputWrapper = document.createElement("div")
              inputWrapper.classList.add("input-wrapper")
        const input = document.createElement("input")
              input.type = this.getAttribute("type") /* || "text" */
              input.classList.add("input")
              input.id = this.id + "-inp"
        const label = document.createElement("label")
              label.setAttribute("for", input.id)
              label.classList.add("label")
              label.innerText = this.getAttribute("label")

        input.addEventListener('focus', function (eve) {
            label.classList.add('float');
        })
        input.addEventListener('blur', function (eve) {
            if (input.value === '') {
                label.classList.remove('float');
            }
        })

        inputWrapper.append(label, input)
        this.appendChild(inputWrapper)
    }

}
customElements.define('anorcle-float-input', AnorcleFloatInput);