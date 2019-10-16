var modem = require('simcom').modem('/dev/ttyS0');

modem.on('open', function() {
  // do something with the modem
  modem.execute('AT').then(function(lines) {
  console.log('AT Response', lines);
}, function(error) {
  console.error('AT Command Error', error);
});
});

modem.error('error', function() {

});

modem.open(); // open the port
