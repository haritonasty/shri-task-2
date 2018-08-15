const valueCurrent = document.querySelector('.value-current__numbers');

function updateTextInput(e) {
  valueCurrent.innerHTML = parseInt(e.value) > 0 ? `+${e.value}` : e.value;
}



