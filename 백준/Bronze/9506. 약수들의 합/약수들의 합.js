const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.trim());

input.forEach(el => {
  let arr = [];
  el = Number(el);

  if(el < 0) return;
  for (let i = 1; i < el; i++) {
    if(el%i === 0) arr.push(i);    
  }
  let sumofArr = arr.reduce((a,c) => a+c);

  if(sumofArr === el) {
    console.log(`${el} = ${arr.join(' + ')}`)
  } else {
    console.log(`${el} is NOT perfect.`)
  }
})