function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
    
  let realLost = lost.filter(l => !reserve.includes(l));
  let realReserve = reserve.filter(r => !lost.includes(r));
  
  for (let i = 0; i < realReserve.length; i++) {
    let extra = realReserve[i];
    if (realLost.includes(extra - 1)) {
      realLost.splice(realLost.indexOf(extra - 1), 1);
    } else if (realLost.includes(extra + 1)) {
      realLost.splice(realLost.indexOf(extra + 1), 1);
    }
  }

  return n - realLost.length;
}