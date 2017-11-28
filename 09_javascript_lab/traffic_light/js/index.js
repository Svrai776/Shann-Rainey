
var speedLimit = 4;
var car = document.getElementById('flyCar');
var stopButton = document.getElementById('stopButton');
var slowButton = document.getElementById('slowButton');
var goButton = document.getElementById('goButton');


illuminateRed();
moveCar(speedLimit);
stopButton.onclick = illuminateRed;
slowButton.onclick = illuminateYellow;
goButton.onclick = illuminateGreen;


function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "purple";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}


var pos = 0,
    carInterval;
function moveCar(speed) {
  var windowWidth = window.outerWidth;
  if (carInterval) {
    window.clearInterval(carInterval);
  }
 
  carInterval = setInterval(function() {
    var carWidth = car.width;
    var carPos = car.offsetLeft;

    pos = pos + speed;
    car.style.marginLeft = pos + 'px';

    if ((carPos) > windowWidth) {
      pos = -carWidth;
    }
  }, 10)
}

function changeLight() {
  var colors = ['green', 'yellow', 'red'],
      i = 0;

  setInterval(function() {

    var currentColor = colors[i];
    document.getElementById('goLight').style.backgroundColor = currentColor;
    i++;

  }, 200);
}
