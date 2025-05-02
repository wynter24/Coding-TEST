let [n, k, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

n = Number(n);
k = Number(k);

let board = Array.from({ length: n }, () => Array(n).fill(0));
const apples = input.slice(0, k).map(el => el.trim().split(' ').map(Number));
const shift = input.slice(k + 1, input.length)
  .map(el => {
    const [t, s] = el.trim().split(' ');
    return { time: +t, turn: s };
  });

apples.forEach(apple => {
  board[apple[0] - 1][apple[1] - 1] = 1;
})

const isCollision = (newHead, snake) => {
  const [x, y] = newHead;
  if (x < 0 || y < 0 || x >= n || y >= n) return true;
  return snake.some(([sx, sy]) => x === sx && y === sy);
}

function solution() {
  let snake = [[0, 0]];
  let time = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let direction = 0; // 오른쪽
  let dirIdx = 0;

  while (true) {
    time++;

    // 1. 머리 위치 계산
    const [x, y] = snake[snake.length - 1];
    const nx = x + dx[direction];
    const ny = y + dy[direction];
    const newHead = [nx, ny];

    // 2. 충돌 확인
    if (isCollision(newHead, snake)) return time;

    // 3. 머리 이동
    snake.push(newHead);

    // 4.사과 있는지 확인
    if (board[nx][ny] === 1) {
      board[nx][ny] = 0 // 사과 먹기
    } else {
      snake.shift();
    }

    // 5. 방향 전환 시점인지 확인
    if (dirIdx < shift.length && shift[dirIdx].time === time) {
      const turn = shift[dirIdx].turn;
      if (turn === 'D') direction = (direction + 1) % 4
      if (turn === 'L') direction = (direction + 3) % 4 // == (direction - 1 + 4) % 4 (음수 나머지 대비비)
      dirIdx++;
    }
  }
}

console.log(solution());