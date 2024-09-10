let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = input.length;
const countA = input.match(/a/g)?.length;
input += input.slice(0, countA - 1);
let min = Infinity;

for (let i = 0; i < N; i++) {
    const substring = input.slice(i, i + countA);
    min = Math.min(min, substring.match(/b/g)?.length || 0);
}
console.log(min);