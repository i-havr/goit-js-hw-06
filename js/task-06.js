const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  inputRef.classList.remove('valid');
  inputRef.classList.remove('invalid');

  inputRef.dataset.length == event.currentTarget.value.length
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
