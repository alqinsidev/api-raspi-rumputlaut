const serialportgsm = require('serialport-gsm');

var gsmModem = serialportgsm.Modem()
let options = {
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  xon: false,
  rtscts: false,
  xoff: false,
  xany: false,
  autoDeleteOnReceive: true,
  enableConcatenation: true,
  incomingCallIndication: true,
  incomingSMSIndication: true,
  pin: '',
  customInitCommand: 'AT^CURC=0',
  logger: console
}



// Port is opened
modem.on('open', data => {
  gsmModem.initializeModem((msg, err) => {
 if (err) {
   console.log(`Error Initializing Modem - ${err}`);
 } else {
   console.log(`InitModemResponse: ${JSON.stringify(msg)}`);
   // execute a custom command - one line response normally is handled automatically
          gsmModem.executeCommand('AT+CPIN?', (result, err) => {
            if (err) {
              console.log(`Error - ${err}`);
            } else {
              console.log(`Result ${JSON.stringify(result)}`);
            }
          });
}
})



gsmModem.open('/dev/ttyS0', options);
