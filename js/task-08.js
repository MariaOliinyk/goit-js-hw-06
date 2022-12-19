const formEl = document.querySelector('.login-form')
console.log(formEl)
formEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    const { email, password } = evt.currentTarget.elements;
    // console.dir(evt.currentTarget.elements)
    if (email.value == '' || password.value == '') {
        alert ('Bсі поля повинні бути заповнені!')
    } else {
        const result = {};
        result[email.name] = email.value;
        result[password.name] = password.value;
        console.log(result);
    }
    formEl.reset()
   
}
