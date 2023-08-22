function solution(n) {
    // toString(3): 10진수 -> 3진수
    // parseInt(answer,3): 3진수 -> 10진수
    let answer = n.toString(3).split('').reverse().join('');
    return parseInt(answer,3)
}