function solution(elements) {
  let sumArr = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = 1; j <= elements.length; j++) {
      if(i+j > elements.length) {
        let arr1 = elements.slice(i,elements.length);
        let arr2 = elements.slice(0,elements.length-j);
        sumArr.push([...arr1,...arr2].reduce((a,b) => a+b));
      } else {
        sumArr.push(elements.slice(i,i+j).reduce((a,b) => a+b));
      }
    }
  }
  // sumArr.push(elements.reduce((a,b) => a+b));
  return [...new Set(sumArr)].length;
}