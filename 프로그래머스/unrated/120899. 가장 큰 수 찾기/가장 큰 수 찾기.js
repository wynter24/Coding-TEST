function solution(array) {
    let maxNum = Math.max(...array)
    let maxIndex = array.indexOf(maxNum);
    return [maxNum, maxIndex];
}