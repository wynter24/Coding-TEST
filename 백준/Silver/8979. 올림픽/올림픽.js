let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, target] = input.shift().split(' ').map(Number);
const countries = input.map(el => el.split(' ').map(Number));

// 금, 은, 동 메달 수를 기준으로 내림차순 정렬
countries.sort((a, b) => {
  if (b[1] !== a[1]) {
    return b[1] - a[1];
  } else if (b[2] - a[2]) {
    return b[2] - a[2];
  } else {
    return b[3] - a[3];
  }
});

// 등수 계산
let rank = 1;
let targetRank = 0;
let prevMedals = null;
for (let i = 0; i < n; i++) {
  const [country, gold, silver, bronze] = countries[i];

  if (!prevMedals || gold !== prevMedals[0] || silver !== prevMedals[1] || bronze !== prevMedals[2]) {
    rank = i + 1;
  }

  if (country === target) {
    targetRank = rank;
    break;
  }

  prevMedals = [gold, silver, bronze];
}

console.log(targetRank)