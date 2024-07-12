let input = require('fs').readFileSync('/dev/stdin').toString();

let score = '';
if(90<=input && input <= 100) score = 'A'
else if(80<=input && input < 90) score = 'B'
else if(70<=input && input < 80) score = 'C'
else if(60<=input && input < 70) score = 'D'
else score = 'F'

console.log(score);