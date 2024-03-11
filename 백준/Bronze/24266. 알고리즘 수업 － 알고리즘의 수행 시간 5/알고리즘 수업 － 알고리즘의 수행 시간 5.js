let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = BigInt(input)

console.log(`${num*num*num}`);
console.log(3);