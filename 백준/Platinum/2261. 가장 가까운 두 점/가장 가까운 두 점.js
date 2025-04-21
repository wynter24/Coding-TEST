let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let map = input.map(el => el.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
let start = 0;
let end = n - 1;

const getDistance = (p1, p2) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return (x1 - x2) ** 2 + (y1 - y2) ** 2;
}

function solutions(start, end) {
  if (end - start <= 2) {
    let min = Infinity;
    for (let i = start; i <= end; i++) {
      for (let j = i + 1; j <= end; j++) {
        min = Math.min(min, getDistance(map[i], map[j]));
      }
    }
    return min;
  }

  const mid = Math.floor((start + end) / 2);
  const minLeft = solutions(start, mid);
  const minRigth = solutions(mid + 1, end);
  let minDist = Math.min(minLeft, minRigth);

  let candidates = [];
  for (let i = start; i <= end; i++) {
    if (Math.abs(map[i][0] - map[mid][0]) < minDist) {
      candidates.push(map[i]);
    }
  }
  candidates.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < candidates.length - 1; i++) {
    for (let j = i + 1; j < candidates.length && (candidates[j][1] - candidates[i][1]) ** 2 < minDist; j++) {
      const dist = getDistance(candidates[i], candidates[j])
      minDist = Math.min(minDist, dist);
    }
  }

  return minDist;
}

console.log(solutions(start, end));