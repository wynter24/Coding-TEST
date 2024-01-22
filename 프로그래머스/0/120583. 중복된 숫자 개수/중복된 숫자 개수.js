function solution(array, n) {
    var answer = 0;
    array.forEach(num => num === n? answer++ : 0)
    return answer;
}