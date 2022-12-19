const buttonEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const colorLable = document.querySelector('.color')
buttonEl.addEventListener('click', onChangeColor)

function onChangeColor(evt) {
  const randomColor = getRandomHexColor();

  bodyEl.setAttribute('style', `background-color: ${randomColor}`)
  colorLable.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
