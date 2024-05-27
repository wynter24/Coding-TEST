function solution(keymap, targets) {
  let answer = [];
  // 객체에 최소 key 저장
  let map = {};
  for (const key of keymap) {
    key.split('').forEach((el,i) => map[el] = (map[el] < i+1 ? map[el] : i+1));
  }

  // key의 총합 구하기
  for (const target of targets) {
    answer.push(target.split('').reduce((a,c) => a+map[c], 0) || -1)
  }

  return answer;
}