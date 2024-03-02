const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.trim());

let answer;

input.forEach(el => {
  let [num1, num2] = el.split(' ').map(Number);
  if(num1<num2) {
    num2%num1 === 0 ? answer='factor' : answer='neither'
  } else {
    num1%num2 === 0 ? answer='multiple' : answer='neither'
  }
  if(num1 === 0 || num2 === 0) return;
  console.log(answer);
})