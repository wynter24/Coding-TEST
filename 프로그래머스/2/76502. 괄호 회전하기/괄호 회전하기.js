function solution(s) {
  let answer = 0;

  const isValid = (str) => {
    let stack = [];
    const pairs = {')': '(', '}': '{', ']': '['};

    for (const el of str) {
      if(el === '(' || el === '{' || el === '[') {
        stack.push(el);
      } else if(el === ')' || el === '}' || el === ']') {
        if(stack.length === 0 || stack.pop() !== pairs[el]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  const rotateLeft = (str) => {
    return str.slice(1) + str[0];
  }

  // s 왼쪽으로 한 칸씩 옮기기
  for (let i = 0; i < s.length; i++) {
    if (isValid(s)) answer++;
    s = rotateLeft(s);
  }

  return answer;
}