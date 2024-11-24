let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const chart = input.map(el => el.split(' ').map(Number));

function calculateRanks(people) {
  return people.map((personA, idxA) => {
    return people.reduce((rank, personB, idxB) => {
      if (idxA !== idxB && personA[0] < personB[0] && personA[1] < personB[1]) {
        return rank + 1;
      }
      return rank;
    }, 1)
  })
}

let ranks = calculateRanks(chart);
console.log(ranks.join(' '));