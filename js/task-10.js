const inputNumberRef = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

inputNumberRef.addEventListener('input', getCurrentInputValue);
createButton.addEventListener('click', createBoxes);

function getCurrentInputValue(event) {
  return event.currentTarget.value;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  amount = inputNumberRef.value;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.marginTop = '20px';
    boxesContainer.appendChild(box);
  }
}

destroyButton.addEventListener('click', destroyAllBoxes);
function destroyAllBoxes() {
  boxesContainer.innerHTML = '';
  inputNumberRef.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
