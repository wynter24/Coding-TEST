let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [S, T] = input[0].split(' ').map(Number);
let sequence = input[1].trim().split('');

let condition = {};
let dna = ['A', 'C', 'G', 'T'];
input[2].trim().split(' ').forEach((item, i) => {
  condition[dna[i]] = +item;
});

let count = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };
let start = 0;
let end = T;

for (let i = start; i < end; i++) {
  count[sequence[i]]++;
}

function checkCondition() {
  return count['A'] >= condition['A'] &&
    count['C'] >= condition['C'] &&
    count['G'] >= condition['G'] &&
    count['T'] >= condition['T'];
}

let validCount = 0;

if (checkCondition()) validCount++;

while (end < S) {
  count[sequence[start]]--;
  count[sequence[end]]++;

  if (checkCondition()) validCount++;

  start++;
  end++;
}

console.log(validCount);