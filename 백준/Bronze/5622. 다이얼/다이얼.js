let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let sum = 0;
const dial = [['A','B','C'],['D','E','F'],['G','H','I'],['J','K','L'],['M','N','O'],['P','Q','R','S'],['T','U','V'],['W','X','Y','Z']];

dial.forEach(el => {
  input.forEach(s => el.includes(s) ? sum += dial.indexOf(el)+3 : 0)
});

console.log(sum);