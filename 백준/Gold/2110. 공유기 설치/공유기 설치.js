let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n,c] = input.shift().split(' ');
let houses = input.map(Number).sort((a,b) => a-b);

function getMaxDistance(n,c,houses) {
  let min = 1; // 공유기 사이 최소 거리
  let max = houses[n-1] - houses[0]; // 최대 거리
  let answer = 0;

  while(min <= max) {
    let mid = Math.floor((min+max) / 2);
    let count = 1; // 무조건 첫번째 집에 설치
    let lastPositon = houses[0]; // 마지막으로 설치한 집

    // 첫번째 집은 이미 설치했으니 다음 집부터(i = 1)
    for (let i = 1; i < n; i++) {
      if(houses[i] - lastPositon >= mid) {
        lastPositon = houses[i]; // 현재 집이 -> 마지막으로 설치한 곳이 됨
        count++;
      }
    }

    if(count >= c) {
      answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return answer;
}

console.log(getMaxDistance(n,c,houses));