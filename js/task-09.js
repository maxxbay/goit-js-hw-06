function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColors = document.querySelector('body');
const changeColorsButton = document.querySelector('.change-color');
const changeColorsText = document.querySelector('.color');

changeColorsButton.addEventListener('click', handlerClick) 

function handlerClick() {
  changeColors.style.backgroundColor = getRandomHexColor()
  changeColorsText.textContent = getRandomHexColor()
 }