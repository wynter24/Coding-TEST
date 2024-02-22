const [n,...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0;

arr.forEach(word => {
  let newArr = [];
  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    if(word[i-1] !== word[i]) newArr.push(word[i]);
  }
  newArr.forEach(el => {
    if(newArr.indexOf(el) !== newArr.lastIndexOf(el)) sum++;
  });
  if(sum === 0) result++;
});

console.log(result);