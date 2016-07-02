var red = require('./led').red;
var green = require('./led').green;
var blue = require('./led').blue;
var yellow = require('./led').yellow;

exports.lightUp = function() {
  return new Promise((resolve) => {
    red.write(1);
    green.write(1);
    blue.write(1);
    yellow.write(1);
    setTimeout(() => {
      red.write(0);
    }, 250);

    setTimeout(() => {
      green.write(0);
    }, 500);

    setTimeout(() => {
      blue.write(0);
    }, 750);

    setTimeout(() => {
      yellow.write(0);
      resolve();
    }, 1000);
  });
}

exports.cleanup = function () {
  red.unexport();
  green.unexport();
  blue.unexport();
  yellow.unexport();
}
