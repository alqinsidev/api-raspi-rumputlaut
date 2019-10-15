const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
var data_sensor;

parser.on('data', function (data) {
 if(data.substring(0,1) ==  '{')
 {
   data_sensor = JSON.parse(data);
   console.log(data_sensor);
 }
})
