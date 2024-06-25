function solution(n, works) {
  if(works.reduce((a,c) => a + c, 0) <= n) return 0;
  let sorted = works.sort((a,b) => b-a);
  
  while(n) {
    let max = sorted[0];
    for (let i = 0; i < sorted.length; i++) {
      if(sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      if(!n) break;
    }
  }
  return works.reduce((a,c) => a + c**2, 0);
}