const input = require('fs').readFileSync(0, 'utf8').trim();


const lines = input.split('\n')
const target = lines[0];
const values = lines[1].split(' ');

const count = values.reduce((acc, val) => {
    return val === target ? acc + 1 : acc;
}, 0);

console.log(count);