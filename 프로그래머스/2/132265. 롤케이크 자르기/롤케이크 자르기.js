function solution(topping) {
  let answer = 0;
  let rightCount = new Map();
  let lefCount = new Map();

  for (const t of topping) {
    rightCount.set(t, (rightCount.get(t) || 0)+1)
  }

  for (const t of topping) {
    lefCount.set(t, (lefCount.get(t) || 0) + 1);
    if(rightCount.get(t) > 1) rightCount.set(t, rightCount.get(t)-1);
    else rightCount.delete(t);
    if(lefCount.size === rightCount.size) answer++;
  }

  return answer;
}