let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, X] = input.shift().split(' ').map(Number);
let arr = input[0].split(' ').map(Number);

let start = 0;
let end = 0;
let temp = 0;

for (let i = 0; i < X; i++) {
  temp += arr[i];
}

let maxVisitors = temp;  
let count = 1;  

for (let i = X; i < N; i++) {
  temp = temp - arr[i - X] + arr[i]; 
  
  if (temp > maxVisitors) { 
    maxVisitors = temp;
    count = 1;
  } else if (temp === maxVisitors) { 
    count++;
  }
}

if (maxVisitors === 0) {
  console.log('SAD');
} else {
  console.log(`${maxVisitors}${'\n'}${count}`);
}