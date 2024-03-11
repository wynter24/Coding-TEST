let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let result;
const ascending = input.sort((x,y) => x-y);

if(ascending[0]+ascending[1] > ascending[2]) {
  result = ascending.reduce((a,c) => a+c)
} else{
  const sumOfTowside = ascending[0]+ascending[1];
  result = sumOfTowside + (sumOfTowside-1)
}

console.log(result);