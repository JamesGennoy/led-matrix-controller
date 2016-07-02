var lightUp = require('./lightup').lightUp;
var cleanup = require('./lightup').cleanup;

function init() {
  console.log('light up');
  lightUp().then(() => {
    console.log('done');
    setTimeout(init, 1000);
  });
};

init();

process.on('SIGINT', () => {
  cleanup();
  process.exit();
});
