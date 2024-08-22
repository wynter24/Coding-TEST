function solution(maps) {
  let xlen = maps[0].length;
  let ylen = maps.length;
  let visited = Array.from({ length: ylen }, () => Array(xlen).fill(false));
  let targetX = xlen - 1;
  let targetY = ylen - 1;

  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  const bfs = (x, y) => {
    let queue = [[x, y, 1]]
    visited[y][x] = true;

    while (queue.length) {
      let [curX, curY, count] = queue.shift();
      if (curX === targetX && curY === targetY) {
        return count;
      }

      for (let i = 0; i < 4; i++) {
        let nx = curX + dx[i];
        let ny = curY + dy[i];

        if (nx >= 0 && nx < xlen && ny >= 0 && ny < ylen) {
          if (maps[ny][nx] === 1 && !visited[ny][nx]) {
            visited[ny][nx] = true;
            queue.push([nx, ny, count + 1]);
          }
        }
      }
    }

    return -1;
  }

  return bfs(0, 0)
}