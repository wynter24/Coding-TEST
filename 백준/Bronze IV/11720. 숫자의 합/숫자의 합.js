let [n1,n2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

n2 = n2.split('').map(Number);

const sum = n2.reduce((a,c) => a+c);

console.log(sum);