let [n, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

arr = arr.split(' ').map(Number);

const best = Math.max(...arr);
const new_score = arr.map(el => el/best*100);
const sum = new_score.reduce((a,c) => a+c);

console.log(sum/n);