function solution(s) {
  let count = 0;
  for (const el of s) {
    el === '(' ? count+=1 : count-=1;
    if(count < 0) break;
  }
  return count ? false : true;
}