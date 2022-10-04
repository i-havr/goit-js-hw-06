const inputField = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

inputField.addEventListener('input', onInputChange);
function onInputChange(event) {
  userName.textContent = event.currentTarget.value;
}
