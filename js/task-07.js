const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.log(textRef);

inputRef.addEventListener('input', onInputChangeRange);

function onInputChangeRange(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
