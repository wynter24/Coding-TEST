function solution(lottos, win_nums) {
  let sameNums = [6,5,4,3,2];
  let sameArr = [];
  let sameCnt = 0;
  let zeroCnt = 0;

  for (let i = 0; i < lottos.length; i++) {
    if(win_nums.includes(lottos[i])) sameCnt++;
    if(lottos[i] === 0) zeroCnt++;
  }
  sameArr.push(sameCnt + zeroCnt);
  sameArr.push(sameCnt);
  let answer = sameArr.map(el => el < 2 ?  6 : sameNums.indexOf(el) + 1)

  return answer;
}