const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let visited = Array(N + 1).fill(false);
let selected = [];
let result = [];

const recursive = (num) => {
  if (num === M) {
    result.push(selected.join(' '))
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(i);
      recursive(num + 1);
      selected.pop();
      visited[i] = false;
    }
  }
}

recursive(0);
console.log(result.join(`\n`))