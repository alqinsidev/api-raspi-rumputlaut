const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM17', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
const fs = require('fs');
var moment = require('moment');
const axios = require('axios');

var d = new Date();
var n = d.getTime();
var curdat;

parser.on('data', function (data) {
 if(data.substring(0,1) ==  '{')
 {
   curdat = JSON.parse(data);
   fs.writeFile(__dirname+'/datalogger/' + curdat.id + '-' + moment(d).format('YYYY-MM-DD hh-mm') +'.json', data, function (err) {
     if (err) throw err;
     console.log('Saved!');
     axios.post('http://localhost:3000/data/' + curdat.id, curdat)
   });


 }
})
