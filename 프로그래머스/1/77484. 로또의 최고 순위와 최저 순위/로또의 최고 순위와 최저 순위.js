function solution(lottos, win_nums) {
  let rank = [6,6,5,4,3,2,1];

  let min = lottos.filter(el => win_nums.includes(el)).length;
  let max = lottos.filter(el => !el).length + min;

  return [rank[max], rank[min]];
}