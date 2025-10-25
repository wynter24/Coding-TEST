const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let visited = Array(N + 1).fill(false);
let result = [];

const recursive = (num) => {
  if (num === M) {
    console.log(result.join(' '))
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      recursive(num + 1);
      result.pop();
      visited[i] = false;
    }
  }
}

recursive(0);