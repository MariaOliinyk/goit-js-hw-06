const inputEl = document.querySelector('#font-size-control')
inputEl.addEventListener('input', onInput)

const textLine = document.querySelector('#text')

function onInput(ivt) {
    textLine.setAttribute('style', `font-size: ${inputEl.value}pt;`)
}
console.dir(inputEl)