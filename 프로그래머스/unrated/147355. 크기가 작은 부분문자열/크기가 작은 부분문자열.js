function solution(t, p) {
  var answer = 0;
  let pLen = p.length;
  for(let i=0;i<t.length;i++) {
    let num = t.slice(i,i+pLen);
    if (num <= p && num.length===pLen) answer++;
  }
  return answer;
}