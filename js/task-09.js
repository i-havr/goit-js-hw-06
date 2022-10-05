const changeBtn = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

changeBtn.addEventListener('click', onChangeButtonClick);

function onChangeButtonClick() {
  nameColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = nameColor.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
    .toUpperCase()}`;
}
