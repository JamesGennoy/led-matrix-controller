var Gpio = require('onoff').Gpio;

exports.red = new Gpio(26, 'out');
exports.green = new Gpio(19, 'out');
exports.blue = new Gpio(13, 'out');
exports.yellow = new Gpio(6, 'out');
