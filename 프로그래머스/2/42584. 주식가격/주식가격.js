function solution(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while(stack.length > 0 && prices[stack[stack.length-1]] > prices[i]) {
      let j = stack.pop();
      answer[j] = i - j; 
    }
    stack.push(i);
  }
  
  while(stack.length > 0) {
    let j = stack.pop();
    answer[j] = prices.length - j - 1;
  }

  return answer;
}