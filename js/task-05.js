const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')
console.log(inputEl)
console.log(outputEl)

inputEl.addEventListener('input', onInput)

function onInput(evt) {
    if (evt.currentTarget.value) {
        outputEl.textContent = evt.currentTarget.value
    } else {
        outputEl.textContent = "Anonymous"
    }
}
