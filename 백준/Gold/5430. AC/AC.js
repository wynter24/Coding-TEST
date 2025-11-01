let [T, ...test] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = [];

const acTest = (P, N, arr) => {
  let isReverse = false;
  let start = 0;
  let end = N - 1;

  for (const el of P) {
    if (el === 'R') {
      isReverse = !isReverse;
    } else {
      if (start > end) return 'error';
      isReverse ? end-- : start++;
    }
  }
  let result = arr.slice(start, end + 1);
  if (isReverse) result.reverse();
  return `[${result}]`;
}

for (let i = 0; i < test.length; i += 3) {
  const P = test[i].trim().split('');
  const N = +test[i + 1];
  const arr = JSON.parse(test[i + 2]);

  answer.push(acTest(P, N, arr));
}

console.log(answer.join(`\n`));