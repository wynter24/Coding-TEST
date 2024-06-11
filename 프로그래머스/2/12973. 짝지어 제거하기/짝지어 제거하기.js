function solution(s) {
  let stack = [];

  for (const el of s) {
    if(stack.length === 0) stack.push(el);
    else if (stack[stack.length-1] == el) stack.pop();
    else stack.push(el);
  }

  return stack.length === 0 ? 1 : 0;
}