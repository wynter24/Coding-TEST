function solution(s) {
  let zeroCnt = 0;
  let binaryCnt = 0;

  while(s.length > 1) {
    let arr = s.split('').filter(num => num !== '0');
    zeroCnt += s.length - arr.length;
    s = (arr.length).toString(2);
    binaryCnt++
  }
  
  return [binaryCnt, zeroCnt];
}