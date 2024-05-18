let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let times = input[0].split(' ').map(Number);
times.sort((a,b) => a-b);

function minTimeOfAtm(arr) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result += sum;
  }

  return result;
}

console.log(minTimeOfAtm(times));