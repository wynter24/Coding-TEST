function solution(routes) {
  let answer = 0;
  let curCamera = -30001;
  routes.sort((a, b) => a[1] - b[1]);

  for (const [enter, exit] of routes) {
    if (curCamera < enter) {
      curCamera = exit;
      answer++;
    }
  }

  return answer;
}