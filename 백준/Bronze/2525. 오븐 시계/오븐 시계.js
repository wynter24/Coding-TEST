const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let cookedH, cookedM;
let result = [];
const [h, m] = input[0].split(' ').map(Number);
const cooking = Number(input[1]);

cookedH = parseInt((h*60+m + cooking) / 60);
cookedM = (h*60+m + cooking) % 60;

cookedH >= 24 ? result.push(cookedH-24) : result.push(cookedH);
result.push(cookedM);

console.log(result.join(' '));