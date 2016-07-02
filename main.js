var Gpio = require('onoff').Gpio;

var red = new Gpio(26, 'out');
var green = new Gpio(19, 'out');
var blue = new Gpio(13, 'out');
var yellow = new Gpio(6, 'out');

function lightUp() {
  return new Promise(function(resolve) {
    red.write(1);
    green.write(1);
    blue.write(1);
    yellow.write(1);
    setTimeout(function() {
      red.write(0);
    }, 250);

    setTimeout(function() {
      green.write(0);
    }, 500);

    setTimeout(function() {
      blue.write(0);
    }, 750);

    setTimeout(function() {
      yellow.write(0);
      resolve();
    }, 1000);
  });
};


function init() {
  lightUp().then(function() {
    setTimeout(init, 1000);
  });
};

init();

process.on('SIGINT', cleanup);

function cleanup () {
  red.unexport();
  green.unexport();
  blue.unexport();
  yellow.unexport();
  process.exit();
};
