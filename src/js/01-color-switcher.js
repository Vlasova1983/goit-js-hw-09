
const startChangeBackgroundColorBtn = document.querySelector('[data-start]');
const stopChangeBackgroundColorBtn = document.querySelector('[data-stop]');
const backgroundColorBody = document.querySelector('body');
let timerId = null;
stopChangeBackgroundColorBtn.setAttribute('disabled',true);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}  

startChangeBackgroundColorBtn.addEventListener("click", () => {
  startChangeBackgroundColorBtn.setAttribute('disabled',true);
  stopChangeBackgroundColorBtn.removeAttribute('disabled');
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    backgroundColorBody.style.background = randomColor;
  }, 1000);
});

stopChangeBackgroundColorBtn.addEventListener("click", () => {
  clearInterval(timerId);
  stopChangeBackgroundColorBtn.setAttribute('disabled',true);
  startChangeBackgroundColorBtn.removeAttribute('disabled');
});