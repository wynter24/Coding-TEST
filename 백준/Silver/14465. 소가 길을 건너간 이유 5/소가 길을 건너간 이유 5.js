let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K, B] = input.shift().split(' ').map(Number);
let broken = input.map(Number).sort((a, b) => a - b);

let trafficSignal = new Array(N).fill(1);
broken.forEach(item => {
  trafficSignal[item - 1] = 0;
});

let brokenCount = 0;
for (let i = 0; i < K; i++) {
  if (trafficSignal[i] === 0) brokenCount++;
}

let minRepairs = brokenCount;
for (let start = 1; start <= N - K; start++) {
  if (trafficSignal[start - 1] === 0) minRepairs--;
  if (trafficSignal[start + K - 1] === 0) minRepairs++;

  brokenCount = Math.min(brokenCount, minRepairs);
}

console.log(brokenCount);