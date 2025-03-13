let [Cases, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < +Cases; i++) {
  let [n, ...test] = arr[i].trim().split(' ').map(Number);
  const avg = Math.floor(test.reduce((a, c) => a + c) / n);
  const overAvg = test.filter(score => score > avg).length;
  console.log((overAvg / n * 100).toFixed(3) + '%');
}