var interval = 3000;
var life;
var counterLife = makeCounter();
var flags = [false, false, false, false];

Game();

function timerIdHidden(id) {
  setTimeout(function() {
    if (flags[id - 1] == false) {
      life = counterLife();
      console.log(life);
    } else {
      flags[id - 1] = false;
    }
    document.getElementById(id).style.visibility = "hidden";
  }, 5000);
}

function timerIdVisible(id) {
  setTimeout(function() {
    document.getElementById(id).style.visibility = "visible";
  }, interval);
}


var timerIdInterval = function Interval() {
  setInterval(function() {
    if (interval > 100) {
      interval -= 100;
    } else {
      setTimeout(function() {
        clearInterval(timerIdInterval);
        alert('You win');
      }, 60000);
    }
  }, 10000);
}

function Game() {
  var game = setInterval(function() {
    var id = getRandomInt(1, 5);
    timerIdVisible(id);
    timerIdHidden(id);
    if (life < 1) {
      clearInterval(game);
      clearInterval(timerIdInterval);
      alert('Game over');
    }
  }, 1000);
}



function clickOnButton(id) {
  document.getElementById(id).style.visibility = "hidden";
  flags[id - 1] = true;

}


function makeCounter() {
  var currentLife = 10;
  return function() {
    return currentLife--;
  };
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

