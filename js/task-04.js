const buttonDecrementEl = document.querySelector('button[data-action="decrement"]')
const buttonIncrementEl = document.querySelector('button[data-action="increment"]')
const valueFieldEl = document.querySelector('#value')


console.log(buttonDecrementEl)
console.log(buttonIncrementEl)
console.log(valueFieldEl);

buttonDecrementEl.addEventListener('click', decrValue)
buttonIncrementEl.addEventListener('click', incrValue)

function incrValue(evt) {
    valueFieldEl.textContent = Number(valueFieldEl.textContent) + 1;
}

function decrValue(evt) {
    valueFieldEl.textContent = Number(valueFieldEl.textContent) - 1;
}