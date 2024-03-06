const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());

input.forEach(el => {
  let [a,b,c] = el.split(' ').map(Number).sort((x,y) => x-y);
  if(a===0 || b===0 || c===0) return
  if(a+b > c) {
    if(a===b && b===c) console.log('Equilateral ')
    else if(a===b || a===c || b===c) console.log('Isosceles')
    else console.log('Scalene ')
  } else {
    console.log('Invalid')
  }
})