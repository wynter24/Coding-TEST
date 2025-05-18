function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let visited = Array.from({ length: N }, () => Array(M).fill(0));

  const bfs = (y, x) => {
    let queue = [[y, x]];
    visited[y][x] = 1;

    while (queue.length) {
      const [cy, cx] = queue.shift();
      for (const [dy, dx] of dir) {
        const ny = cy + dy;
        const nx = cx + dx;
        if (
          ny >= 0 && nx >= 0 && ny < N && nx < M &&
          !visited[ny][nx] && maps[ny][nx] === 1
        ) {
          visited[ny][nx] = visited[cy][cx] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  };

  bfs(0, 0);
  return visited[N - 1][M - 1] === 0 ? -1 : visited[N - 1][M - 1];
}