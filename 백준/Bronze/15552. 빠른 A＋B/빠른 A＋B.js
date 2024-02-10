const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer ='';
let newarr = arr.map(el => el.split(' '));

for(let i=0; i<n; i++) {
    answer += Number(newarr[i][[0]]) + Number(newarr[i][1]) + '\n'
};

 console.log(answer);