function solution(order) {
  let result = 0;
  let stack = [];

  for (let i = 0; i < order.length; i++) {
    stack.push(i+1);
    while(stack.length > 0 && stack.at(-1) === order[result]) {
      stack.pop();
      result++;
    }
  }

  return result;
}