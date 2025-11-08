let [T, ...test] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = [];

const acTest = (FN, LEN, arr) => {
  let isReverse = false;
  let start = 0;
  let end = LEN - 1;
  for (const el of FN) {
    if (el === 'R') isReverse = !isReverse;
    else {
      if (end < start) return 'error';
      isReverse ? end-- : start++;
    }
  }
  let result = arr.slice(start, end + 1);
  if (isReverse) result.reverse();
  return `[${result}]`;
}

for (let i = 0; i < test.length; i += 3) {
  const FN = test[i].trim().split('');
  const LEN = +test[i + 1].trim();
  let arr = JSON.parse(test[i + 2].trim());

  answer.push(acTest(FN, LEN, arr));
}

console.log(answer.join(`\n`));