function solution(k, tangerine) {
  let cntBySize = {};
  for (const el of tangerine) {
    cntBySize[el] = cntBySize[el] ? cntBySize[el]+=1 : 1;
  }
  let cntArr = Object.values(cntBySize).sort((a,b) => b-a);
  let countSize = 0;

  for (const cnt of cntArr) {
    k -= cnt;
    countSize++;
    if(k <= 0) break;
  }

  return countSize;
}