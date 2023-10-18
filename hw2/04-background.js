var intervalID = setInterval(newColor, 3000);
const time = document.querySelector('#time');
const startButton = document.querySelector('#start');
startButton.addEventListener('click', begin);
addEventListener('load', swapInterval);

function begin() {
  startButton.removeEventListener('click', startButton);
  startButton.addEventListener('click', stop);
  startButton.innerHTML = 'Stop';
  startButton.className = 'mt-4 btn btn-danger';
  swapInterval();
}

function stop() {
  startButton.removeEventListener('click', stop);
  startButton.addEventListener('click', startButton);
  startButton.innerHTML = 'Start';
  startButton.className = 'mt-4 btn btn-primary';
  clearInterval(intervalID);
}

function swapInterval() {
  clearInterval(intervalID);
  changeBackground();
}

function changeBackground() {
  userInput = time.value;
  var interval = 3;
  if (userInput === '') {
    interval = 3;
  } else {
    interval = userInput;
  }
  intervalID = setInterval(newColor, interval * 1000);
}

function newColor() {
  const randColor = '#' + Math.floor(Math.random() * 12345678).toString(16);
  document.body.style.background = randColor;
}
