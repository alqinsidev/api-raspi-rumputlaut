var ATCommander = require('at-commander');
var Command = ATCommander.Command;

// all options are optional, these are the default options
var opts = {
    // the following options define the options used by serialport
    parser: serialport.parsers.raw,
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,

    // command termination string (is added to every normal string type command)
    EOL: "\r\n",

    // this regex is used by default to detect one-line responses
    lineRegex: /^\r\n(.+)\r\n/,

    // (default) command timeout
    timeout: 500
};

var modem = new ATCommander.Modem(opts);
var port = '/dev/ttyS0'; // linux based machines

modem.open(port).catch((err) => {
    console.log("Failed to open serial", err);
}).then(function(){

    // check if a response is coming
    // NOTE: run(command) bypasses the command queue and is executed immediatly (unless another command is being executed already)
    modem.run('AT').then((success) => {

        modem.startProcessing();

    });

    // fill up command queue
    // queue is only processed it modem.startProcessing() is called.
  modem.addCommand('AT+CPIN?');
});
