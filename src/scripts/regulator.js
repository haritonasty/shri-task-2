const valueCurrent = document.querySelector('.value-current__numbers');

function updateTextInput(value) {
  valueCurrent.innerHTML = parseInt(value) > 0 ? `+${value}` : value;
}
