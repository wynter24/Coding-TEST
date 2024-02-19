const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const reInput = input.split('').reverse().join('');

console.log(input === reInput ? 1 : 0);