const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const resultRef = document.querySelector('#value');
let counterValue = 0;

buttonDecrementRef.addEventListener('click', onButtonDecrement);
function onButtonDecrement() {
  counterValue -= 1;
  resultRef.innerHTML = counterValue;
}

buttonIncrementRef.addEventListener('click', onButtonIncrement);
function onButtonIncrement() {
  counterValue += 1;
  resultRef.innerHTML = counterValue;
}
