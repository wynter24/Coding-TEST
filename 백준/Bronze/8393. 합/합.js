let input = require('fs').readFileSync('/dev/stdin').toString();

let answer = 0;

for(let i=1; i<=Number(input); i++) {
    answer += i
};

console.log(answer);