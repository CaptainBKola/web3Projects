const path = require('path');
const fs = require('fs');
const solc = require('solc')

const fileDir= path.resolve( __dirname,  'contracts', 'account.sol');
const parseFile  = fs.readFileSync(fileDir, 'utf-8');
module.exports = solc.compile(parseFile,1).contracts[':Account']

