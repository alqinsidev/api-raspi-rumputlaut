let serialportgsm = require('serialport-gsm')
let modem = serialportgsm.Modem()
let options = {
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
    rtscts: false,
    xon: false,
    xoff: false,
    xany: false,
    autoDeleteOnReceive: true,
    enableConcatenation: true,
    incomingCallIndication: true,
    incomingSMSIndication: true,
    pin: '',
    customInitCommand: '',
    logger: console
}

modem.open('/dev/ttyS0', options,()=>{
  console.log("opening modem port");
});

modem.on('open', data => {
    modem.initializeModem(()=>{
      console.log("modem terbuka");
    })
})
