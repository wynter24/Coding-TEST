function solution(n) {
  var answer = 0;
  for(i=1;i<=n;i++) {
    let countJ = 0;
    for(j=1;j<=n;j++) {
      if(i%j==0) countJ+=1
    }
    if(countJ>2) answer+=1;
  }
  return answer;
}