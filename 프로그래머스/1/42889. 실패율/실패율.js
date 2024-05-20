function solution(N, stages) {
  let data = [];

  for(let i = 1; i <= N; i++) {
    let stageCount = 0;
    let reachCount = 0;
    for (const stage of stages) {
      if(i === stage) stageCount++;
      if(i <= stage) reachCount++;
    }
    let failureLate = stageCount/ reachCount;
    data.push({stage: i, failureLate});
  }

  data.sort((a,b) => b.failureLate - a.failureLate);
  let result = data.map(el => el.stage);

  return result;
}