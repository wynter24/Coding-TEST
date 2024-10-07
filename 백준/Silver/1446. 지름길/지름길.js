let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, D] = input.shift().split(' ').map(Number);
const shortcuts = input.map(el => el.trim().split(' ').map(Number))

const dist = Array(D + 1).fill(Infinity);
dist[0] = 0;

for (let i = 0; i <= D; i++) {
  // 지름길 이용 vs 그냥 1km씩 이동
  if (i > 0) {
    dist[i] = Math.min(dist[i], dist[i - 1] + 1)
  }

  // 지름길 사용가능한 경우
  // 지름길을 이용한 끝점 데이터 갱신
  for (const [start, end, length] of shortcuts) {
    if (i === start && end <= D) {
      dist[end] = Math.min(dist[end], dist[i] + length);
    }
  }
}

console.log(dist[D])