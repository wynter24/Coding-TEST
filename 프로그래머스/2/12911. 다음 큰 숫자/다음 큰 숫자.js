function solution(n) {
  let nextNum = n+1;
  let nextNum1Cnt = 0;
  let n1Cnt = n.toString(2).split('').filter(el => el === '1').length;
  
  while(n1Cnt !== nextNum1Cnt) {
    nextNum1Cnt = nextNum.toString(2).split('').filter(el => el === '1').length;
    nextNum++;
  }
  return nextNum-1;
}