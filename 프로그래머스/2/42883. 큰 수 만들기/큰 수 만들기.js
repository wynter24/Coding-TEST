function solution(number, k) {
  let arr = number.split('').map(Number);
  let stack = [];

  for (const num of arr) {
    while(k > 0 && stack[stack.length-1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  stack.splice(stack.length-k, k);

  return stack.join('');
}