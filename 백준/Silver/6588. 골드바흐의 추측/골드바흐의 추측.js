let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(numbers) {
  const n = 1000001;
  const table = Array(n).fill(1);
  for (let i = 3; i <= parseInt(n ** 0.5); i += 2) {
    if (table[i]) {
      for (let j = i * 2; j < n; j += i) table[j] = 0;
    }
  }
  const result = [];
  for (const k of numbers) {
    if (!k) break;
    let exist = false;
    for (let i = 3; i <= parseInt(k / 2); i += 2) {
      if (table[i] && table[k - i]) {
        result.push(`${k} = ${i} + ${k - i}`);
        exist = true;
        break;
      }
    }
    if (!exist) result.push("Goldbach's conjecture is wrong.");
  }
  return result;
}
console.log(solution(input).join('\n'));