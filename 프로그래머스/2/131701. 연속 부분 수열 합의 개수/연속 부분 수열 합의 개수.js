function solution(elements) {
  let sumArr = new Set();
  const sum = (arr) => arr.reduce((a,b) => a+b,0);
  for (let i = 0; i < elements.length; i++) {
    for (let j = 1; j < elements.length; j++) {
      if(i+j > elements.length) {
        let arr1 = elements.slice(i,elements.length);
        let arr2 = elements.slice(0,elements.length-j);
        sumArr.add(sum([...arr1,...arr2]));
      } else {
        sumArr.add(sum(elements.slice(i,i+j)));
      }
    }
  }
  sumArr.add(sum(elements));
  return sumArr.size;
}