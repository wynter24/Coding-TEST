let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const chart = input.map(el => el.split(' ').map(Number));

// 이중 for문 사용
function calculateRanks(n, people) {
  let ranks = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
          ranks[i]++;
        }
      }
    }
  }

  return ranks;
}

let ranks = calculateRanks(n, chart);
console.log(ranks.join(' '));