let [n, ...seats] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

seats = seats[0].replaceAll('LL', 'L').split('');
let cupHolder = seats.length * 2 - (seats.length-1);

console.log(cupHolder >= n ? n : cupHolder);