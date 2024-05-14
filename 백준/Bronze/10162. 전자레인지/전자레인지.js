let input = require('fs').readFileSync('/dev/stdin');

let timer = [300, 60, 10];
let count = [0,0,0];

for (let i = 0; i < timer.length; i++) {
  if(input >= timer[i]) {
    count[i] = Math.floor(input/timer[i]);
    input = input%timer[i];
  }
}
console.log(input ? -1 : count.join(' '));