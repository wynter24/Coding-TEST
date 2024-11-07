const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N,M] = input.shift().split(' ').map(v => +v); 
let minPackage = Math.min(...input.map((item) => item.split(' ')[0]));
let minOne = Math.min(...input.map((item) => item.split(' ')[1])); 
let answer = Number.MAX_SAFE_INTEGER;

  let temp1 = N* minOne
 answer =  Math.min(answer, temp1);

  let temp2 = Math.ceil(N/6) * minPackage; 
answer = Math.min(answer, temp2); 

  let temp3 = Math.floor(N/6) * minPackage + ((N%6) * minOne);  
 answer = Math.min(answer, temp3);      

console.log(answer);