let [total, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let words = arr.map(word => word.trim().split(''));

const isGroupWord = (word) => {
  let prevList = [];
  prevList.push(word[0]);

  for (let i = 1; i < word.length; i++) {
    const prev = prevList[prevList.length - 1];
    if (prev !== word[i]) {
      if (prevList.includes(word[i])) return false;
      else prevList.push(word[i]);
    } else {
      continue;
    }
  }
  return true;
}

let count = 0;
words.forEach(word => {
  if (isGroupWord(word)) count++;
})

console.log(count);