'use strict';

// require lib
const Port = require('serial-at');

(async function main() {
    // create serial connection
    const port = new Port('/dev/ttyS0');

    const baudrate = new baudRate(9600);

    // open serial connection
    await port.open();

    // execute AT command and diaplay result
    console.log(await port.at('AT'));

    // close serial connection
    await port.close();
})();
