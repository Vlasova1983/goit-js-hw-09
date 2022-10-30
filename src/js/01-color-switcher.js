
const startChangeBackgroundColorBtn = document.querySelector('[data-start]');
const stopChangeBackgroundColorBtn = document.querySelector('[data-stop]');
const backgroundColorBody = document.querySelector('body');

startChangeBackgroundColorBtn.addEventListener ('click', onClickChangeBackgroundColor);

function onClickChangeBackgroundColor () {
  const randomColor = getRandomHexColor();
  backgroundColorBody.style.background = randomColor;
  }
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }  