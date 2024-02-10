const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let arr = [];
const num = Number(input) / 4;

for(let i=0; i<num; i++) {
    arr.push('long ');
};

console.log(`${arr.join('')}int`)