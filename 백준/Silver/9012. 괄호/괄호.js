let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());

for (let i = 0; i < n; i++) {
  let count = 0;
  for (const el of arr[i]) {
    el === '(' ? count+=1 : count-=1;
    if(count < 0) break; 
  }
  console.log(count ? 'NO' : 'YES');
}