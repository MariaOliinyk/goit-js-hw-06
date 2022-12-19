const inputEl = document.querySelector('#validation-input')
const styleEl = document.querySelector('style')
console.dir(inputEl)
console.dir(styleEl)

const validInputData = Number(inputEl.dataset.length)
console.log(validInputData)

inputEl.addEventListener('blur', onFocus)

function onFocus(evt) {
    if (evt.currentTarget.value.length < validInputData) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
        
        //console.log('hello')
    } else {
       inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
 
    }
   
    console.log(evt)
}