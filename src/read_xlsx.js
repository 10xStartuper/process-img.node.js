var xlsx = require('node-xlsx');

async function readXlsx(){
    const obj = await xlsx.parse(__dirname + '/data/data.xlsx'); // parses a file
    const data = obj[0].data;
    console.table(data);
    return data;
}

module.exports = readXlsx;