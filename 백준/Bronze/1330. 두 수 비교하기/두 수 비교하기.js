const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [a, b] = input.split(' ').map(el => +el);

a === b ? console.log('==') : a > b ? console.log('>') : console.log('<');