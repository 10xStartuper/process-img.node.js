var xlsx = require('node-xlsx');

var obj = xlsx.parse(__dirname + '/myFile.xlsx'); // parses a file

var obj = xlsx.parse(fs.readFileSync(__dirname + '/myFile.xlsx')); // parses a buffer