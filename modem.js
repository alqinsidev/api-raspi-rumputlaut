const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyS0', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
var data_sensor;

port.write('AT', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  parser.on('data', function (data) {
    console.log(data);
  })
})
