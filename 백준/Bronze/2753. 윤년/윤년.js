const input = require('fs').readFileSync('/dev/stdin').toString().trim();

(input%4 === 0) && ((input%100 !== 0) || (input%400 === 0)) ? console.log(1) : console.log(0);