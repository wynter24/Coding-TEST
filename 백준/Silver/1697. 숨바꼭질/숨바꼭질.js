let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const visited = Array(100001).fill(false);
function bfs(start) {
  let queue = [[start, 0]];
  visited[start] = true;

  while (queue.length) {
    let [curr, time] = queue.shift();

    if (curr === K) return time;

    for (const next of [curr + 1, curr - 1, curr * 2]) {
      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(N));