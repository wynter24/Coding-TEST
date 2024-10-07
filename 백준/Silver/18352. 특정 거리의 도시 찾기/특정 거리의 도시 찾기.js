let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K, X] = input.shift().split(' ').map(Number);
input = input.map(el => el.split(' ').map(Number));
const cities = Array.from({ length: N + 1 }, () => []);
for (const [x, y] of input) {
  cities[x].push(y);
}

let distance = Array(N + 1).fill(-1); // 방문여부
const bfs = (start) => {
  let queue = [start];
  distance[start] = 0;

  while (queue.length) {
    let city = queue.shift();

    for (const nextCity of cities[city]) {
      if (distance[nextCity] === -1) {
        distance[nextCity] = distance[city] + 1;
        queue.push(nextCity);
      }
    }
  }
}

bfs(X);
const result = [];
for (let i = 1; i <= N; i++) {
  if (distance[i] === K) result.push(i);
}

if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.join('\n'));
}