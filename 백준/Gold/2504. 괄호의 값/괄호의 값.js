let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim();

let stack = [];

for (let i = 0; i < input.length; i++) {
  const char = input[i]

  if (char === '(' || char === '[') {
    stack.push(char);
  } else {
    let temp = 0;

    while (stack.length) {
      const top = stack.pop();

      if (typeof (top) === 'number') {
        temp += top;
        continue;
      }
      if (top === '(' && input[i] === ')') {
        stack.push(temp === 0 ? 2 : temp * 2);
        break;
      }
      if (top === '[' && input[i] === ']') {
        stack.push(temp === 0 ? 3 : temp * 3);
        break;
      }

      return console.log(0);
    }
  }

  if (!stack.length && (char === ')' || char === ']')) return console.log(0);

}

for (const el of stack) {
  if (typeof (el) !== 'number') return console.log(0);
}

let answer = stack.reduce((a, c) => a + c, 0);
console.log(answer);