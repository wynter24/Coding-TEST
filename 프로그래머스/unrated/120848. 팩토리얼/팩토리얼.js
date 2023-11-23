function solution(n) {
  var answer = 1;
  for(i=1;i<=n;i++) {
    answer*=i;
    if(answer===n) return i;
    if(answer>n) return i-1;
  }  
}