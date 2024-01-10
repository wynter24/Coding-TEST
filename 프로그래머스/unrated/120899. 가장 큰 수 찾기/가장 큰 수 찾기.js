function solution(array) {
    let maxNum = Math.max.apply(null, array);
    let maxIndex = array.indexOf(maxNum);
    return [maxNum, maxIndex];
}