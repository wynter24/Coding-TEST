let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input = input.map(el => el.split(' '));

const arr = input.map(el => el.map(Number));

for(let i=0; i<arr.length; i++) {
    if(arr[i][0]!==0 && arr[i][1]!==0){
        console.log(arr[i][0]+arr[i][1]);
    }
};