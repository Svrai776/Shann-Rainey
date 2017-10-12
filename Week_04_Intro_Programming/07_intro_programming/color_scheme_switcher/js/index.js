document.getElementById('whiteButton').onclick = switchRed;
document.getElementById('blackButton').onclick = switchGreen;

function switchRed() {
  document.body.style.backgroundColor = 'red';
  document.body.style.color = 'white';
}

function switchGreen() {
  document.body.style.backgroundColor = 'green';
  document.body.style.color = 'black';
}
